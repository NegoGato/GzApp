import { Unidade } from './../../models/unidade';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DBOperation } from '../../shared/DBOperation';
import { MatTableDataSource, MatSnackBar, MatDialog, MatPaginator, MatSelect } from '@angular/material';
import { UnidadeService } from '../../services/unidade.service';
import { Global } from '../../shared/Global';
import { FormUnidadeComponent } from '../../unidadeForm/form-unidade/form-unidade.component';
import { ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil, take } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-list-unidade',
  templateUrl: './list-unidade.component.html',
  styleUrls: ['./list-unidade.component.css']
})
export class ListUnidadeComponent implements OnInit, AfterViewInit, OnDestroy {
  
  public unidadeFilterCtrl: FormControl = new FormControl();
  public unidadeCtrl: FormControl = new FormControl();
  public filteredUnidade: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  unidades: any[];
  selectedTipo:any;
  unidade: Unidade;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
 // set columns that will need to show in listing table
 displayedColumns = ['os', 'razaoSocial', 'cnpj', 'identificadorFiscal', 'action'];
 // setting up datasource for material table
 dataSource = new MatTableDataSource<Unidade>();
 private _onDestroy = new Subject<void>();
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild('singleSelect') singleSelect: MatSelect; 
  constructor(public snackBar: MatSnackBar, private _unidadeService: UnidadeService, private dialog: MatDialog) { 
     
   }

  ngOnInit() {
    this.loadingState = true;
    this.loadUnidades();
    this.loadDetalheUnidade();     
    this.dataSource.paginator = this.paginator;           
    this.unidadeFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUnidade();
    });
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
    const dialogRef = this.dialog.open(FormUnidadeComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, unidade: this.unidade }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadUnidades();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Unidade cadastrada com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Unidade alterada com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Unidade removida com sucesso.');
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



  loadUnidades(): void {
    this._unidadeService.getAllUnidades(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
      .subscribe(unidades => {
        this.loadingState = false;
        this.dataSource.data = unidades;       
      });
  }
  getUnidade(){
    if(this.selectedTipo == undefined)
       this.loadUnidades();    
    else
    {
      this._unidadeService.getUnidade(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades',this.selectedTipo.id).subscribe( unidades => {
        this.loadingState = false;            
        this.dataSource.data = unidades;
      });
    }    
  }
  addUnidade() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Adicionar nova unidade';
    this.modalBtnTitle = 'Adicionar';
    this.openDialog();
  }
  editUnidade(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Editar unidade';
    this.modalBtnTitle = 'Editar';
    this.unidade = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteUnidade(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Deseja deletar essa unidade ?';
    this.modalBtnTitle = 'Remover';
    this.unidade = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }


  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  } 

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
