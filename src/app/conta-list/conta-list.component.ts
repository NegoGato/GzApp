import { Component, OnInit, ViewChild } from '@angular/core';
import { ContaFinanceira } from '../models/contaFinanceira';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { Global } from '../shared/Global';
import { ContaService } from '../services/conta.service';
import { DBOperation } from '../shared/DBOperation';
import { ContaFormComponent } from '../conta-form/conta-form.component';
import { SelectionModel } from '@angular/cdk/collections';
import { PeriodicElement } from '../unidadeLIst/list-unidade/list-unidade.component';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {  
  dbops:DBOperation;
  modalTitle:string;
  modalBtnTitle:string;
  loadingState: boolean;
  conta:ContaFinanceira;
  listConta:ContaFinanceira[];
  total:number;
  displayedColumns:string[] = ['select','empresa', 'banco', 'descricao','agencia', 'conta', 'saldo','action'];
  dataSource = new MatTableDataSource<ContaFinanceira>(); 
 @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private _contaServices:ContaService) { }

  ngOnInit() {
      this.loadingState = true;
      this.loadContas();
  }
  // select grid
  selection = new SelectionModel<ContaFinanceira>(true, []);
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

  checkboxLabel(row?: ContaFinanceira): string {
    if(row){
      row.select = this.selection.isSelected(row)? true:false;
      var contasSelecionadas = this.dataSource.data.filter(c=> c.select).length>0?this.dataSource.data.filter(c=> c.select):this.dataSource.data;
      this.valorTotal(contasSelecionadas);
    }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContaFormComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, conta: this.conta }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadContas();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Conta financeira cadastrada com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Conta financeira alterada com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Conta financeira removida com sucesso.');
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
  loadContas(): void {
    
      this._contaServices.getAllConta(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
      .subscribe(contas => {
        this.loadingState = false;
        this.dataSource.data = contas;
        this.valorTotal(contas);
      });
    }

    addContaFinanceira() {
      this.dbops = DBOperation.create;
      this.modalTitle = 'Adicionar nova conta';
      this.modalBtnTitle = 'Adicionar';
      this.conta = new ContaFinanceira();
      this.conta.empresa = ''; 
      this.conta.agencia = '';
      this.conta.banco = '';
      this.conta.conta = '';
      this.conta.descricao = '';
      this.conta.id = null;
      this.conta.saldo = 0.0;
      this.conta.tipoDaConta = 0;        
      this.openDialog();
    }
    editContaFinanceira(id: number) {
      this.dbops = DBOperation.update;
      this.modalTitle = 'Editar conta';
      this.modalBtnTitle = 'Editar';
      this.conta = this.dataSource.data.filter(x => x.id === id)[0];
      this.openDialog();
    }
    deleteContaFinanceira(id: number) {
      this.dbops = DBOperation.delete;
      this.modalTitle = 'Deseja deletar essa conta ?';
      this.modalBtnTitle = 'Remover';
      this.conta = this.dataSource.data.filter(x => x.id === id)[0];
      this.openDialog();
    }
    
    
    showMessage(msg: string) {
      this.snackBar.open(msg, '', {
        duration: 3000
      });
    }
    
    valorTotal(contas:ContaFinanceira[]){
      let valorAntigo = 0;     
      contas.forEach((valor)=>{    
          this.total = this.sum(valor.saldo, valorAntigo);  
          valorAntigo = this.total;  
        });     
    }
    sum(num1:number,num2:number){
        return num1+num2;
    }    
  }
