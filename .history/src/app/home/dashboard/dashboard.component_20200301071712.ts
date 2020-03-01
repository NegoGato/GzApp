import { catchError } from 'rxjs/operators';
import { Dashboard } from './../../models/home.dashboard';
import { Component, OnInit } from '@angular/core';
import { Unidade } from '../../models/unidade';
import { Global } from '../../shared/Global';
import { HomeDashboardService } from '../../services/home.dashboard.service';
import { EventEmitter } from 'events';
import { Output } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormLicenseComponent } from 'src/app/licenseForm/form-license/form-license.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { License } from 'src/app/models/license';
import { LicenseService } from 'src/app/services/license.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardServices: HomeDashboardService,
              private _licenseService:LicenseService,private dialog: MatDialog,
              public snackBar: MatSnackBar) { }
    loadingState: boolean;
    unidades: Dashboard[];
    currentUser = Global.currentUser;
    license : License;

  ngOnInit() {
    this.loadingState = true;
    this.loadLicenesUnidades();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  licenseForm(id:number){
      // this._licenseService.getById(Global.BASE_USER_ENDPOINT +"api/license/getLicense",id).subscribe( result=>{
      //    this.license = result;
      //    if(this.license==null)
      //        return;
      //     this.openDialog();          
      // })
  }

  openDialog(){
    const dialogRef = this.dialog.open(FormLicenseComponent, {
      width: '500px',
      data: { dbops: DBOperation.update, modalTitle: "Alterar Licença", modalBtnTitle: "Editar", license: this.license }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;       
            this.showMessage('Licença alterada com sucesso.');  
            this.loadLicenesUnidades();       
        }
       else if (result === 'error') {
        this.showMessage('Algo de errado não está certo!');
      } 
    });
  }

  loadLicenesUnidades(): void {
    this._dashboardServices.getAllUnidadeLicense(Global.BASE_USER_ENDPOINT + 'api/home/v1/dashboard')
      .subscribe(dasboard => {
        this.loadingState = true;
        this.unidades = dasboard;
      });
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

}
