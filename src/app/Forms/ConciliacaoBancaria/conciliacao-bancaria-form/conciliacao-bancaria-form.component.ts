import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { ContaFinanceira } from 'src/app/models/contaFinanceira';
import { ContaService } from 'src/app/services/conta.service';
import { Global } from 'src/app/shared/Global';
import { takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { ConciliacaoQuery } from 'src/app/models/conciliacaoQuery';
import { MatTableDataSource, MatPaginator, MatDatepickerInputEvent, MatSnackBar, MatDialog } from '@angular/material';
import { ConciliacaoBancariaService } from 'src/app/services/conciliacao-bancaria.service';
import { DialogOverviewExampleDialog } from '../../Confirmacao/confirmacao';
import { ConciliacaoBancaria } from 'src/app/models/conciliacaoBancaria';

@Component({
  selector: 'app-conciliacao-bancaria-form',
  templateUrl: './conciliacao-bancaria-form.component.html',
  styleUrls: ['./conciliacao-bancaria-form.component.css']
})
export class ConciliacaoBancariaFormComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  // consulta contas financeiras
  public contaFinanceiraFilterCtrl: FormControl = new FormControl();
  public contaFinanceiraCtrl: FormControl = new FormControl();
  public filteredContaFinanceira: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  inicio: any;
  contaFinaceira: ContaFinanceira;
  listContaFinanceira: ContaFinanceira[];
  listConciliacaoQuery: ConciliacaoQuery[];
  currentUser: any;
  acao: any;
  dataSource = new MatTableDataSource<ConciliacaoQuery>();
  displayedColumns: string[] = ['select', 'descricaoPagamento', 'operacaoDescricao', 'data', 'dataConciliacao', 'debito', 'credito', 'conciliado', 'usuario'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _contaFinanceiraService: ContaService,
    private _conciliacaoBancariaService: ConciliacaoBancariaService,
    private snackBar: MatSnackBar) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.acao = 1;
  }

  ngOnInit() {

    this.loadContaFinanceira();
    this.loadConciliacaoMes();
    this.contaFinanceiraFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterContasFinanceiras();
      });
  }

  dataInicio(type: string, event: MatDatepickerInputEvent<Date>, date: number) {
    if (date == 1)
      this.inicio = new Date(event.value).toISOString();
  }

  // select grid
  selection = new SelectionModel<ConciliacaoQuery>(true, []);
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

  checkboxLabel(row?: ConciliacaoQuery): string {
    this.listConciliacaoQuery = [];
    if (row) {
      row.select = this.selection.isSelected(row) ? true : false;
      var contaAreceberSelecionadas = this.dataSource.data.filter(c => c.select).length > 0 ? this.dataSource.data.filter(c => c.select) : null;
      if (contaAreceberSelecionadas != null)
        contaAreceberSelecionadas.forEach(c => {
          if (!c.conciliado) {
            const baixaPagamento = 1;
            this.acao = baixaPagamento;
          } else {
            const desativar = 2;
            this.acao = desativar;
          }
          this.listConciliacaoQuery.push(c);
        });
    }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  loadContaFinanceira(): void {
    this._contaFinanceiraService.getAllConta(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
      .subscribe(contafinanceira => {
        this.listContaFinanceira = contafinanceira;
        this.contaFinanceiraCtrl.setValue(this.listContaFinanceira);
        this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
      });
  }
  loadConciliacaoMes():void{
    this._conciliacaoBancariaService.listPagamentoParaConciliacaoOuJaConciliadoDoMes(Global.BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias/mes')
      .subscribe(conciliacaoBancaria => {
        this.dataSource.data = conciliacaoBancaria;
        // this.preencherConsultasFornecedores();
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

  obterConciliacaoBancaria(listConciliacaoQuery: ConciliacaoQuery[]): ConciliacaoBancaria[] {
    let listConciliacaoBancaria = new Array<ConciliacaoBancaria>();

    listConciliacaoQuery.forEach(c => {
      var conciliacao = new ConciliacaoBancaria();
      if (c.id != 0 || c.id == null)
        conciliacao.id = c.id;

      conciliacao.contaId = c.contaId;
      conciliacao.credito = c.credito;
      conciliacao.debito = c.debito;
      conciliacao.descricaoPagamento = c.descricaoPagamento;
      conciliacao.lancamentoId = c.lancamentoId;
      conciliacao.lancamentoObjetoId = c.objetoId;
      conciliacao.obs = c.obs;
      conciliacao.conciliado = c.conciliado;
      conciliacao.dataDoLacamentoFinanceiro = c.data;
      conciliacao.operacaoId = c.operacao;
      conciliacao.usuarioId = this.currentUser.user.id;
      listConciliacaoBancaria.push(conciliacao);
    });
    return listConciliacaoBancaria;
  }
  conciliarPagamento(): void {
    if (this.validarOpercacaoBaixaPagamento()) {
      if (this.listConciliacaoQuery == null || this.listConciliacaoQuery.length == 0)
        this.showMessage("nenhum registro selecionado");
      else {
        let listConciliacaoBancaria = this.obterConciliacaoBancaria(this.listConciliacaoQuery);
        this._conciliacaoBancariaService.baixarPagamento(Global.BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', listConciliacaoBancaria,this.currentUser.user.id)
          .subscribe(conciliacao => {
            this.Pesquisar();
            // this.preencherConsultasFornecedores();
          });
      }
    }
  }
  desfazerConciliacao(): void {
    // tem q retornar um valor para nao consultar na API quando a validacao nao for valida.
    //concultas ordenadas para nao mudar a posição.
    if (this.validarOpercacaoDesfazerConciliacao()) {
      if (this.listConciliacaoQuery == null || this.listConciliacaoQuery.length == 0)
        this.showMessage("nenhum registro selecionado");
      else {
        let listConciliacaoBancaria = this.obterConciliacaoBancaria(this.listConciliacaoQuery);
        this._conciliacaoBancariaService.desfazerConciliacao(Global.BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', listConciliacaoBancaria, this.currentUser.user.id)
          .subscribe(conciliacao => {
            this.Pesquisar();
            // this.preencherConsultasFornecedores();
          });
      }
    }

  }
  openDialogCancelar(operacao: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { mensagem: 'deseja confirmar essa operação?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'true' && operacao == 1) {
        this.conciliarPagamento();
      }
      if (result === 'true' && operacao == 2) {
        this.desfazerConciliacao();
      }
    });
  }
  validarOpercacaoBaixaPagamento(): boolean {
    if (this.listConciliacaoQuery != null || this.listConciliacaoQuery.length > 0) {
      var conta = this.dataSource.data.filter(c => c.select);
      if (conta.some(c => c.conciliado)) {
        this.showMessage("Operação inválida, um ou mais registros selecionados já estão conciliado.");
        return false;
      }
      else
        return true;
    }
  }

  validarOpercacaoDesfazerConciliacao(): boolean {
    if (this.listConciliacaoQuery != null || this.listConciliacaoQuery.length > 0) {
      var conta = this.dataSource.data.filter(c => c.select);
      if (conta.some(c => !c.conciliado)) {
        this.showMessage("Operação inválida, um ou mais registros selecionados que não foram conciliados.");
        return false;
      } else
        return true;
    }
  }

  Pesquisar(): void {
   this.inicio = this.inicio != null ? new Date(this.inicio).toISOString() : new Date();
    this._conciliacaoBancariaService.listPagamentoParaConciliacaoOuJaConciliado(Global.BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', this.contaFinaceira.id, this.inicio)
      .subscribe(conciliacaoBancaria => {
        this.dataSource.data = conciliacaoBancaria;
        // this.preencherConsultasFornecedores();
      });
  }
  limparFiltro(): void {
    this.inicio = null;
    this.contaFinaceira = null;
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
