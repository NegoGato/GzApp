import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ContaFinanceira } from 'src/app/models/contaFinanceira';
import { MovimentacaoFinanceiraQuery } from 'src/app/models/movimentacaoFinanceiraQuery';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar, MatDatepickerInputEvent } from '@angular/material';
import { ContaService } from 'src/app/services/conta.service';
import { Global } from 'src/app/shared/Global';
import { takeUntil } from 'rxjs/operators';
import { MovimentacaoFinanceiraFormComponent } from '../movimentacao-financeira-form/movimentacao-financeira-form.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { MovimentacaoFinanceira } from 'src/app/models/movimentacaoFinanceira';
import { MovimentacaoFinanceiraServicoService } from 'src/app/services/movimentacao-financeira-servico.service';
import { DialogOverviewExampleDialog } from '../../Confirmacao/confirmacao';

@Component({
  selector: 'app-movimentacao-financeira-list',
  templateUrl: './movimentacao-financeira-list.component.html',
  styleUrls: ['./movimentacao-financeira-list.component.css']
})
export class MovimentacaoFinanceiraListComponent implements OnInit {


  // consulta contas financeiras
  private _onDestroy = new Subject<void>();
  public contaFinanceiraFilterCtrl: FormControl = new FormControl();
  public contaFinanceiraCtrl: FormControl = new FormControl();
  public filteredContaFinanceira: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  inicio: any;
  contaFinaceira: ContaFinanceira;
  listContaFinanceira: ContaFinanceira[];
  currentUser: any;
  dataSource = new MatTableDataSource<MovimentacaoFinanceiraQuery>();
  data:ContaFinanceira;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  movimentavao:MovimentacaoFinanceira;
  
  displayedColumns: string[] = ['contaOrigem','contaDestino', 'credito', 'debito', 'tipoMov', 'dataMovimentacao','data', 'usuario', 'desfazer'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _contaFinanceiraService: ContaService,
    private snackBar: MatSnackBar,
    private _movimentacaoFinanceiraServico:MovimentacaoFinanceiraServicoService

  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadContaFinanceira();
    this.dataSource.paginator = this.paginator;
    this.contaFinanceiraFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterContasFinanceiras();
      });
  }

  private filterContasFinanceiras() {
    if (!this.listContaFinanceira) {
      return;
    }
    // get the search keyword
    let search = this.contaFinanceiraFilterCtrl.value;
    if (!search) {
      this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the fornecedores
    this.filteredContaFinanceira.next(
      this.listContaFinanceira.filter(c => c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovimentacaoFinanceiraFormComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, data: this.movimentavao }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadMovimentacaoFinanceira();
         if(this.dbops == DBOperation.create){
          this.showMessage('Movimentação registrada com sucesso.');
         }       
      } else if (result === 'error') {
        this.showMessage('Algo de errado não está certo!');
      } else {
         //this.showMessage('Por favor tente novamente mais tarde.');
         console.log('The dialog was closed');
      }
    });
  }
  loadMovimentacaoFinanceira(): void{
    this.inicio = this.inicio != null ? new Date(this.inicio).toISOString() : null;
    this._movimentacaoFinanceiraServico.getAllById(Global.BASE_USER_ENDPOINT + 'api/movimentacaoBancaria/v1/MovimentacaoBancariaPorConta',this.contaFinaceira.id,this.inicio)
    .subscribe(
      movimentacao => {
        this.loadingState = false;
        this.dataSource.data = movimentacao;
      });
  }

  loadContaFinanceira(): void {
    this._contaFinanceiraService.getAllConta(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
      .subscribe(contafinanceira => {
        this.listContaFinanceira = contafinanceira;
        this.contaFinanceiraCtrl.setValue(this.listContaFinanceira);
        this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
      });
  }

  desfazer(id:number):void{
    this._movimentacaoFinanceiraServico.desativar(Global.BASE_USER_ENDPOINT + 'api/movimentacaoBancaria/v1/MovimentacaoBancaria/desativar',id,this.currentUser.user.id)
    .subscribe(
      movimentacao => {
        this.loadMovimentacaoFinanceira();
      });
  }

  openDialogDesfazer(id:number): boolean {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { mensagem: 'Deseja desfazer essa movimentação?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'true') {
        this.desfazer(id);
        return true;
      }
      else
        return false;
    });
    return false;
  }

  pesquisar():void{
    this.loadMovimentacaoFinanceira();
  }
  dataInicio(type: string, event: MatDatepickerInputEvent<Date>, date: number) {
    if (date == 1)
      this.inicio = new Date(event.value).toISOString();
  }
  addMovimentacaoBancaria() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Registrar movimentação';
    this.modalBtnTitle = 'Adicionar';
    this.movimentavao = new MovimentacaoFinanceira();
    this.movimentavao.id = 0;
    this.movimentavao.contaOrigemId = this.contaFinaceira.id;
    this.movimentavao.usuarioId = this.currentUser.user.id;
    this.movimentavao.ativo = true;
    this.movimentavao.contaDestinoId = 0;
    this.movimentavao.contraPartida = 0;
    this.movimentavao.credito = 0.0;
    this.movimentavao.data = new Date().toISOString();
    this.movimentavao.debito = 0.0;
    this.movimentavao.geradoPeloSistema = false;
    this.movimentavao.identificador = '';
    this.movimentavao.objetoId = 0;
    this.movimentavao.tipoMov = 0;   
    this.movimentavao.dataMovimentacao = null;
    this.openDialog();
  }
  
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

}
