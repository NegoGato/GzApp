import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DBOperation } from 'src/app/shared/DBOperation';
import { Fornecedor } from 'src/app/models/fornecedor';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar, MatSelect } from '@angular/material';
import { FornecedorFormComponent } from '../fornecedor-form/fornecedor-form.component';
import { Global } from 'src/app/shared/Global';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {
  // consulta 
  public fornecedoresFilterCtrl: FormControl = new FormControl();
  public fornecedorCtrl: FormControl = new FormControl();
  public filteredFornecedor: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  private _onDestroy = new Subject<void>();
  //
  private page: number=0;
  private convencios:Array<any>;
  private pages:Array<number>;
  selectedTipo:any;
  dbops: DBOperation;
  modalTitle:string;
  modalBtnTitle:string;
  loadingState: boolean;
  fornecedor:Fornecedor;
  listFornecedor:Fornecedor[];
  displayedColumns:string[] = ['nome','matricula','ans'];
  dataSource = new MatTableDataSource<Fornecedor>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('singleSelect') singleSelect: MatSelect;
  constructor(private dialog:MatDialog, private snackBar:MatSnackBar, private _fornecedorService:FornecedorService) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadFornecedores();    
    this.dataSource.paginator = this.paginator; 
    this.fornecedoresFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterFornecedores();
    });
  }
  preencherConsultasFornecedores(){
    this.listFornecedor = this.dataSource.data;
    this.fornecedorCtrl.setValue(this.listFornecedor);
    this.filteredFornecedor.next(this.listFornecedor.slice());
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  private setInitialValue() {
    this.filteredFornecedor
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

  private filterFornecedores() {
    if (!this.listFornecedor) {
      return;
    }
    // get the search keyword
    let search = this.fornecedoresFilterCtrl.value;
    if (!search) {
      this.filteredFornecedor.next(this.listFornecedor.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the fornecedores
    this.filteredFornecedor.next(
      this.listFornecedor.filter(c=> c.nome.toLowerCase().indexOf(search) > -1 || c.cnpj.indexOf(search)>-1)
    );
  }  

  openDialog(): void {
    const dialogRef = this.dialog.open(FornecedorFormComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, fornecedor: this.fornecedor }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadFornecedores();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Fornecedor cadastrado com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Fornecedor alterado com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Fornecedor removido com sucesso.');
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
    // Operacoes
    loadFornecedores():void{
      this._fornecedorService.getAll(Global.BASE_USER_ENDPOINT)
      .subscribe(fornecedor => {
        this.loadingState = false;
        this.dataSource.data = fornecedor['content'];
        this.pages = new Array(fornecedor['totalPages']);
        this.preencherConsultasFornecedores();
      });
  }

  getFornecedores(){
    if(this.selectedTipo == undefined)
       this.loadFornecedores();    
    else
    {
      this._fornecedorService.getById(Global.BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores',this.selectedTipo.id).subscribe( fornecedores => {
        this.loadingState = false;            
        this.dataSource.data = fornecedores;
      });
    }    
  }
  addFornecedor() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Adicionar novo fornecedor';
    this.modalBtnTitle = 'Adicionar';
    this.fornecedor = new Fornecedor();
    this.fornecedor.nome = ''; 
    this.fornecedor.cnpj = '';
    this.fornecedor.telefone = '';  
    this.fornecedor.objetoId = 0;        
    this.openDialog();
  }
  editFornecedor(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Editar fornecedor';
    this.modalBtnTitle = 'Editar';
    this.fornecedor = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteFornecedor(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Deseja deletar esse fornecedor ?';
    this.modalBtnTitle = 'Remover';
    this.fornecedor = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }

}
