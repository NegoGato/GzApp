import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { DBOperation } from 'src/app/shared/DBOperation';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog } from '@angular/material';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { Global } from 'src/app/shared/Global';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  currentUser:any;
  usuarios: UsuarioModel[];
  usuario: UsuarioModel;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string; 
  router: Router;
 // set columns that will need to show in listing table
 displayedColumns = ['login', 'email', 'action'];
 // setting up datasource for material table
 dataSource = new MatTableDataSource<UsuarioModel>();

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(router: Router,public snackBar: MatSnackBar, private _usuarioService: UsuarioService, private dialog: MatDialog) { this.router = router; }


  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser.user.super){
      this.loadingState = true;
      this.loadUsuario();
      this.dataSource.paginator = this.paginator;
    }else{
      this.showMessage('Usuário não tem permissão para realizar essa operação.');
      this.router.navigate(['/', '']);
    }   
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, unidade: this.usuario }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadUsuario();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Usuário cadastrado com sucesso.');
            break;
          case DBOperation.update:
            this.showMessage('Usuário alterado com sucesso.');
            break;
          case DBOperation.delete:
            this.showMessage('Usuário removido com sucesso.');
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

  loadUsuario(): void {
    this._usuarioService.getAllUsuarios(Global.BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios')
      .subscribe(unidades => {
        this.loadingState = false;
        this.dataSource.data = unidades;
      });
    }

      addUsuario() {
        this.dbops = DBOperation.create;
        this.modalTitle = 'Adicionar novo usuário';
        this.modalBtnTitle = 'Adicionar';
        this.openDialog();
      }
      editUsuario(id: number) {
        this.dbops = DBOperation.update;
        this.modalTitle = 'Editar usuário';
        this.modalBtnTitle = 'Editar';
        this.usuario = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
      }
      deleteUsuario(id: number) {
        this.dbops = DBOperation.delete;
        this.modalTitle = 'Deseja deletar essa usuário ?';
        this.modalBtnTitle = 'Remover';
        this.usuario = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
      }
    
    
      showMessage(msg: string) {
        this.snackBar.open(msg, '', {
          duration: 3000
        });
      }
}
