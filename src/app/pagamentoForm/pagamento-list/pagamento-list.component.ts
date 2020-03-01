import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';
import { DBOperation } from 'src/app/shared/DBOperation';
import { Unidade } from 'src/app/models/unidade';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog, MatSelect } from '@angular/material';
import { UnidadeService } from 'src/app/services/unidade.service';
import { PagamentoFormComponent } from '../pagamento-form/pagamento-form.component';
import { Global } from 'src/app/shared/Global';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { Subject, ReplaySubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { takeUntil, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.css']
})
export class PagamentoListComponent implements OnInit {

  private _onDestroy = new Subject<void>();
  public unidadeFilterCtrl: FormControl = new FormControl();
  public unidadeCtrl: FormControl = new FormControl();
  public filteredUnidade: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  unidades: any[];
  selectedTipo:any;
  pagamentos: Pagamento[];
  pagamento: Pagamento;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  currentUser:any;  
  total:number;  
 // set columns that will need to show in listing table
 displayedColumns = ['razaoSocial', 'os', 'competencia', 'numeroDaNota', 'dataPagamento','valor','action'];
 // setting up datasource for material table
 dataSource = new MatTableDataSource<Pagamento>(); 
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild('singleSelect') singleSelect: MatSelect;
  constructor(public router: Router,public snackBar: MatSnackBar,
    private _pagamentoServices: PagamentoService,
    private _unidadeService: UnidadeService , private dialog: MatDialog) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser.user.super){
      this.loadingState = true;
      this.loadPagamento();
      this.loadUnidade();
      this.loadDetalheUnidade();  
  
      this.unidadeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterUnidade();
      }); 
      this.dataSource.paginator = this.paginator;
    }else{
      this.showMessage('Usuário não tem permissão para realizar essa operação.');
      this.router.navigate(['/', '']);
    }    
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  private setInitialValue() {
    this.filteredUnidade
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {          
        // setting the compareWith property to a comparison function 
        // triggers initializing the selection according to the initial value of 
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially 
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a.id === b.id;
      });
  }

  private filterUnidade() {
    if (!this.unidades) {
      return;
    }
    // get the search keyword
    let search = this.unidadeFilterCtrl.value;
    if (!search) {
      this.filteredUnidade.next(this.unidades.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the unidade
    this.filteredUnidade.next(
      this.unidades.filter(c=> c.razaoSocial.toLowerCase().indexOf(search) > -1)
    );
  }  
  loadDetalheUnidade(){
    this._unidadeService.getDetalheUnidade(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/propriedadeunidades').subscribe(
      resultado => { 
             this.unidades = resultado;
             this.unidadeCtrl.setValue(this.unidades);  
             this.filteredUnidade.next(this.unidades.slice());   
                      
      }      
     );    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PagamentoFormComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.pagamento }
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if (result === 'success') {
      this.loadingState = true;
      this.loadPagamento();
      switch (this.dbops) {
        case DBOperation.create:
          this.showMessage('Pagamento cadastrada com sucesso.');
          break;
        case DBOperation.update:
          this.showMessage('Pagamento alterada com sucesso.');
          break;
        case DBOperation.delete:
          this.showMessage('Pagamento removida com sucesso.');
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

GetPagamentoUnidades(): void {
  if (this.selectedTipo !== undefined) {
    this._unidadeService.getAllPagamentoUnidadesById(Global.BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentosbyunidade'
    , this.selectedTipo.identificadorFiscal)
      .subscribe(pagamentos => {
      this.loadingState = false;
      this.dataSource.data = pagamentos;
      this.valorTotal(pagamentos);
      });
  } else {
    this.loadingState = true;
     this.loadPagamento();
  }
}

loadUnidade(): void {
  this._unidadeService.getAllUnidades(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
    .subscribe(unidade => {
      this.loadingState = false;
      this.unidades = unidade;
    });
}

loadPagamento(): void {
  if(this.selectedTipo !== undefined)
  {
    this.GetPagamentoUnidades();
  }else
  {
    this._pagamentoServices.getAllPagamento(Global.BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos')
    .subscribe(licenses => {
      this.loadingState = false;
      this.dataSource.data = licenses;
      this.valorTotal(licenses);
    });
  }    
}
valorTotal(pagamento:Pagamento[]){
  let valorAntigo = 0;
  if(pagamento.length == 0){
    this.total = 0;
    return;
  }  
  pagamento.forEach((valor)=>{    
      this.total = this.sum(valor.valor, valorAntigo);  
      valorAntigo = this.total;  
    }); 

}
sum(num1:number,num2:number){
    return num1+num2;
}
addPagamento() {
  this.dbops = DBOperation.create;
  this.modalTitle = 'Adicionar novo pagamento';
  this.modalBtnTitle = 'Adicionar';
  this.pagamento = new Pagamento();
  this.pagamento.os = this.selectedTipo.os;
  this.pagamento.identificadorFiscal = this.selectedTipo.identificadorFiscal;
  this.pagamento.id = null;
  this.pagamento.competencia = 0;
  this.pagamento.unidadeId = this.selectedTipo.id;
  this.pagamento.obs = '';
  this.pagamento.razaoSocial = this.selectedTipo.razaoSocial;
  this.pagamento.dataPagamento = '';
  this.pagamento.numeroDaNota = '';
  this.pagamento.valor = 0.0;
  this.pagamento.usuarioId = 0;
  this.openDialog();
}
editPagamento(id: number) {
  this.dbops = DBOperation.update;
  this.modalTitle = 'Editar pagamento';
  this.modalBtnTitle = 'Editar';
  this.pagamento = this.dataSource.data.filter(x => x.id === id)[0];
  this.openDialog();
}
deletePagamento(id: number) {
  this.dbops = DBOperation.delete;
  this.modalTitle = 'Deseja deletar essa pagamento ?';
  this.modalBtnTitle = 'Remover';
  this.pagamento = this.dataSource.data.filter(x => x.id === id)[0];
  this.openDialog();
}


showMessage(msg: string) {
  this.snackBar.open(msg, '', {
    duration: 3000
  });
}

}
