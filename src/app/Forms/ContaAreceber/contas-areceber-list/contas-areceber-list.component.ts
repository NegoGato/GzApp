import { Component, OnInit, ViewChild } from '@angular/core';
import { DBOperation } from 'src/app/shared/DBOperation';
import { ContasAReceber } from 'src/app/models/contasAreceber';
import { MatPaginator, MatDialog, MatSnackBar, MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { TipoGeneric } from 'src/app/models/tipoLicense';
import { Global } from 'src/app/shared/Global';
import { SelectionModel } from '@angular/cdk/collections';
import { ContasApagarSearch } from 'src/app/models/contasApagarSearch';
import { ContasAreceberService } from 'src/app/services/contas-areceber.service';
import { DialogOverviewExampleDialog } from '../../Confirmacao/confirmacao';

@Component({
  selector: 'app-contas-areceber-list',
  templateUrl: './contas-areceber-list.component.html',
  styleUrls: ['./contas-areceber-list.component.css']
})
export class ContasAreceberListComponent implements OnInit {
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
  contaAreceber: ContasAReceber;
  listContasAreceber: ContasAReceber[];
  dataSource = new MatTableDataSource<ContasAReceber>();
  listContasAReceberId: number[];
  currentUser: any;
  displayedColumns: string[] = ['select', 'conta', 'nomeFornecedor', 'titulo','tipoDocDescricao', 'data', 'valor', 'descricaoStatus', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private _contaAReceberService: ContasAreceberService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
  listStatus: TipoGeneric[];
  ngOnInit() {
    this.loginState = false;
    this.loadContasAReceber();
    this.dataSource.paginator = this.paginator;
    this.isHidden = false;
    this.listStatus = Global.GetTipoStatusApagarReceber();
  }

  // select grid
  selection = new SelectionModel<ContasAReceber>(true, []);
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

  checkboxLabel(row?: ContasAReceber): string {
    this.listContasAReceberId = [];
    if (row) {
      row.select = this.selection.isSelected(row) ? true : false;
      var contaAreceberSelecionadas = this.dataSource.data.filter(c => c.select).length > 0 ? this.dataSource.data.filter(c => c.select) : null;
      if (contaAreceberSelecionadas != null)
        contaAreceberSelecionadas.forEach(c => {
          this.listContasAReceberId.push(c.id);
        });
    }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  cancelarPagamento(): void {
    if (this.validarStatus()) {
      if (this.listContasAReceberId == null || this.listContasAReceberId.length == 0)
        this.showMessage("nenhum registro selecionado");
      else {
        this._contaAReceberService.getCancelarPagamento(Global.BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber/cancelarPagamento', this.listContasAReceberId,this.currentUser.user.id)
          .subscribe(contasAReceber => {
            this.loginState = false;
            this.loadContasAReceber();
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
    if (this.listContasAReceberId != null || this.listContasAReceberId.length > 0) {
      var conta = this.dataSource.data.filter(c => c.select);
      if (conta.some(c => c.status == 1 || c.status == 3)) {
        this.showMessage("Operação inválida, um ou mais registros selecionados estão com o status cancelado ou conciliado.");
        return false;
      }
      else
        return true;
    }
  }

  openDialog(): void {
    
   
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  loadContasAReceber(): void {
    this._contaAReceberService.getAll(Global.BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber')
      .subscribe(contasAReceber => {
        this.loginState = false;
        this.dataSource.data = contasAReceber;
        // this.preencherConsultasFornecedores();
      });
  }

  addContasAreceber() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Adicionar contas a receber';
    this.modalBtnTitle = 'Adicionar';
    this.contaAreceber = new ContasAReceber();
    this.contaAreceber.valor = 0, 0;
    this.openDialog();
  }
  editContasAReceber(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Editar contas a receber';
    this.modalBtnTitle = 'Editar';
    this.contaAreceber = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteContasAReceber(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Deseja deletar esse conta a receber?';
    this.modalBtnTitle = 'Remover';
    this.contaAreceber = this.dataSource.data.filter(x => x.id === id)[0];
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
    this._contaAReceberService.getAdvanced(Global.BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber/Search', search)
      .subscribe(contasAReceber => {
        this.loginState = false;
        this.dataSource.data = contasAReceber;
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
