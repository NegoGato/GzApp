import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDatepickerInputEvent, MatTableDataSource, MatDialog, MatSnackBar, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DBOperation } from 'src/app/shared/DBOperation';
import { ContasApagar } from 'src/app/models/contasApagar';
import { Global } from 'src/app/shared/Global';
import { ContasAPagarService } from 'src/app/services/contas-apagar.service';
import { ContasApagarFormComponent } from '../contas-apagar-form/contas-apagar-form.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ContasApagarSearch } from 'src/app/models/contasApagarSearch';
import { TipoGeneric } from 'src/app/models/tipoLicense';
import { DialogOverviewExampleDialog } from '../../Confirmacao/confirmacao';

@Component({
  selector: 'app-contas-apagar-list',
  templateUrl: './contas-apagar-list.component.html',
  styleUrls: ['./contas-apagar-list.component.css']
})
export class ContasApagarListComponent implements OnInit {
  isHidden: boolean;
  inicio: string;
  fim: string;
  status: any;
  panelOpenState = false;
  selecteFornecedor: any;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  loginState: boolean;
  currentUser: any;
  contaApagar: ContasApagar;
  listContasApagar: ContasApagar[];
  dataSource = new MatTableDataSource<ContasApagar>();
  listContasApagarId: number[];
  displayedColumns: string[] = ['select', 'conta', 'nomeFornecedor', 'titulo','tipoDocDescricao', 'dataAgendada', 'valor', 'descricaoStatus', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private _contaAPagarService: ContasAPagarService) { }
  listStatus: TipoGeneric[];
  ngOnInit() {
    this.loginState = false;
    this.loadContasAPagar();
    this.dataSource.paginator = this.paginator;
    this.isHidden = false;
    this.listStatus = Global.GetTipoStatusApagarReceber();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  // select grid
  selection = new SelectionModel<ContasApagar>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: ContasApagar): string {
    this.listContasApagarId = [];
    if (row) {
      row.select = this.selection.isSelected(row) ? true : false;
      var contaApagarSelecionadas = this.dataSource.data.filter(c => c.select).length > 0 ? this.dataSource.data.filter(c => c.select) : null;
      if (contaApagarSelecionadas != null)
        contaApagarSelecionadas.forEach(c => {
          this.listContasApagarId.push(c.id);
        });
    }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  cancelarPagamento(): void {
    if (this.validarStatus()) {
      if (this.listContasApagarId == null || this.listContasApagarId.length == 0)
        this.showMessage("nenhum registro selecionado");
      else {
        this._contaAPagarService.getCancelarPagamento(Global.BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar/cancelarPagamento', this.listContasApagarId,this.currentUser.user.id)
          .subscribe(contasAPagar => {
            this.loginState = false;
            this.loadContasAPagar();
            // this.preencherConsultasFornecedores();
          });
      }
    }

  }

  openDialogCancelar(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { mensagem: 'deseja confirmar essa operação?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'true') {
        this.cancelarPagamento();
      }
    });
  }
  validarStatus(): boolean {
    if (this.listContasApagarId != null || this.listContasApagarId.length > 0) {
      var conta = this.dataSource.data.filter(c => c.select);
     if(conta.some(c=> c.status == 1 || c.status == 3 )) {
        this.showMessage("Operação inválida, um ou mais registros selecionados estão com o status cancelado.");
        return false;
      }   
      else
      return true;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContasApagarFormComponent, {
      width: '800px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, fornecedor: this.contaApagar }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loginState = true;
        this.loadContasAPagar();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Operação realizada com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Operação com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Operação realizada com sucesso.');
            break;
        }
      } else if (result === 'error') {
        this.showMessage('Algo de errado não está certo!');
      } else {
        //this.showMessage('Por favor tente novamente mais tarde.');
        console.log('The dialog was closed');
      }
    });
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  loadContasAPagar(): void {
    this._contaAPagarService.getAll(Global.BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar')
      .subscribe(contasAPagar => {
        this.loginState = false;
        this.dataSource.data = contasAPagar;
        // this.preencherConsultasFornecedores();
      });
  }

  addContasApagar() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Adicionar contas a pagar';
    this.modalBtnTitle = 'Adicionar';
    this.contaApagar = new ContasApagar();
    this.contaApagar.valor = 0, 0;
    this.contaApagar.desconto = 0, 0;
    this.openDialog();
  }
  editContasAPagar(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Editar contas a pagar';
    this.modalBtnTitle = 'Editar';
    this.contaApagar = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteContasAPagar(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Deseja deletar esse conta a pagar?';
    this.modalBtnTitle = 'Remover';
    this.contaApagar = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }

  dataInicio(type: string, event: MatDatepickerInputEvent<Date>, date: number) {
    if (date == 1)
      this.inicio = new Date(event.value).toISOString();
    else
      this.fim = new Date(event.value).toISOString();

    this.isHidden = true;
  }

  Pesquisar(): void {
    var search = new ContasApagarSearch();

    search.dataFim = this.fim != null ? new Date(this.fim).toISOString() : null;
    search.dataInicio = this.inicio != null ? new Date(this.inicio).toISOString() : null;
    search.statusId = this.status;
    this._contaAPagarService.getAdvanced(Global.BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar/Search', search)
      .subscribe(contasAPagar => {
        this.loginState = false;
        this.dataSource.data = contasAPagar;
        // this.preencherConsultasFornecedores();
      });
  }
  limparFiltro(): void {
    this.fim = null;
    this.inicio = null;
    this.status = null;
    this.isHidden = false;
  }

}
