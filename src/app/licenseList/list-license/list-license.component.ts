import { Unidade } from './../../models/unidade';
import { UnidadeService } from './../../services/unidade.service';
import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatPaginator, MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatSelect } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { License } from '../../models/license';
import { DBOperation } from '../../shared/DBOperation';
import { LicenseService } from '../../services/license.service';
import { Global } from '../../shared/Global';
import { FormLicenseComponent } from '../../licenseForm/form-license/form-license.component';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { AuthService } from '../../services/authService';
import { Details } from 'src/app/models/details';
import { FormControl } from '@angular/forms';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-list-license',
  templateUrl: './list-license.component.html',
  styleUrls: ['./list-license.component.css']
})
export class ListLicenseComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  public unidadeFilterCtrl: FormControl = new FormControl();
  public unidadeCtrl: FormControl = new FormControl();
  public filteredUnidade: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  unidades: any[];
  unidade:Unidade;
  selectedTipo:any;
  licenses: License[];
  details: Details;
  license: License;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

 // set columns that will need to show in listing table
 displayedColumns = ['os', 'chaveDeHardware', 'validade', 'situacao', 'action'];
 // setting up datasource for material table
 dataSource = new MatTableDataSource<License>();
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild('singleSelect') singleSelect: MatSelect; 
  constructor(public snackBar: MatSnackBar,private bottomSheet: MatBottomSheet,
               private _licenseServices: LicenseService,
               private _unidadeService: UnidadeService , private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadLicenes();
    this.loadUnidade();
    this.loadDetalheUnidade();  

    this.unidadeFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUnidade();
    });   
    this.dataSource.paginator = this.paginator;
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
    const dialogRef = this.dialog.open(FormLicenseComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.license }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadLicenes();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Licença cadastrada com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Licença alterada com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Licença removida com sucesso.');
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

  GetLincenseUnidades(): void {
    if (this.selectedTipo !== undefined) {
      this._unidadeService.getAllLicenseUnidadesById(Global.BASE_USER_ENDPOINT + 'api/license/getLecensesbyunidadeid'
      , this.selectedTipo.identificadorFiscal)
        .subscribe(licenses => {
        this.loadingState = false;
        this.dataSource.data = licenses;
        });
    } else {
      this.loadingState = true;
       this.loadLicenes();
    }
  }

  loadUnidade(): void {
    this._unidadeService.getAllUnidades(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
      .subscribe(unidade => {
        this.loadingState = false;
        this.unidades = unidade;
      });
  }
  loadLicenes(): void {
    if(this.selectedTipo !== undefined)
    {
      this.GetLincenseUnidades();
    }else
    {
      this._licenseServices.getAllLicenses(Global.BASE_USER_ENDPOINT + 'api/license/getAll')
      .subscribe(licenses => {
        this.loadingState = false;
        this.dataSource.data = licenses;
      });
    }    
  }
  // loadLicenes(): void {
  //   this._licenseServices.getAllLicenses(Global.BASE_USER_ENDPOINT + 'api/license/getAll')
  //     .subscribe(licenses => {
  //       this.loadingState = false;
  //       this.dataSource.data = licenses;
  //     });
  // }

  addLicense() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Adicionar nova licença';
    this.modalBtnTitle = 'Adicionar';
    this.license = new License();
    this.license.os = this.selectedTipo.os;
    this.license.identificadorFiscal = this.selectedTipo.identificadorFiscal;
    this.license.id = null;
    this.license.chaveDeHardware = '';
    this.license.contratoId = this.selectedTipo.id;
    this.license.situacao = '';
    this.license.tipo = null;
    this.license.validade = '';
    this.license.objetoId = 0;
    this.openDialog();
  }
  editLicense(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Editar licença';
    this.modalBtnTitle = 'Editar';
    this.license = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteLicense(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Deseja deletar essa licença ?';
    this.modalBtnTitle = 'Remover';
    this.license = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }

  getDetails(id:number): void{   
    if(this.selectedTipo == undefined){
      this.showMessage("Por favor, selecione uma unidade");
    }         
    this._licenseServices.getDetails(Global.BASE_USER_ENDPOINT + 'api/detalhe/v1/detalhes', this.selectedTipo.id,id)
    .subscribe(details => {
      this.details = details;        
      this.bottomSheet.open(BottomSheetOverviewExampleSheet,{data: {details:this.details},});
    });

    // const dialogRef = this.dialog.open(FormLicenseComponent, {
    //   width: '500px',
    //   data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.license }
    // });
 
}


  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }


}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template:' passed in {{data.details}}',
  templateUrl: 'list-license.component.detalhe.html',
})
export class BottomSheetOverviewExampleSheet {
  _details:Details;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
        this._details = data.details;
   }

  // openLink(event: MouseEvent): void {
  //   this.bottomSheetRef.dismiss();
  //   event.preventDefault();
  // }
}

