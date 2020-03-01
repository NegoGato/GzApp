import { Component, OnInit, Inject } from '@angular/core';
import { DBOperation } from 'src/app/shared/DBOperation';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioPassword } from 'src/app/models/usuarioPassword';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistrationValidator } from 'src/app/models/RegistrationValidator';
import { UsuarioListComponent } from '../usuario-list/usuario-list.component';
import { Global } from 'src/app/shared/Global';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-usuario-update-password',
  templateUrl: './usuario-update-password.component.html',
  styleUrls: ['./usuario-update-password.component.css']
})
export class UsuarioUpdatePasswordComponent implements OnInit {
  usuarioFrm: FormGroup;
  currentUser:any;
  usuario: UsuarioPassword;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string; 
  router: Router;
  constructor(private authService: AuthService,private fb: FormBuilder,public snackBar: MatSnackBar,public _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioFrm = this.fb.group({
      id: [''],
      passwordOld: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
   });   
   this.usuarioFrm.valueChanges.subscribe(data => this.onValueChanged(data));
   this.onValueChanged();
  }

     // form value change event
     onValueChanged(data?: any) {
      if (!this.usuarioFrm) { return; }     
      const form = this.usuarioFrm;
      // tslint:disable-next-line:forin
      for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        // setup custom validation message to form
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          // tslint:disable-next-line:forin
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
    onLogout() {
      this.authService.logout();
    }
    // form errors model
  // tslint:disable-next-line:member-ordering
  formErrors = {
    'passwordOld': '',
    'newPassword': '',
    'confirmPassword': ''
  };
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'passwordOld': {
      'required': 'Informe a senha antiga.'
    },
    'newPassword': {
      'required': 'Informe a nova senha.'
    },
    'confirmPassword': {
      'required': 'Confirme a senha.',
      'validate': 'Senhas não conferem.'
    }
    // 'identificadorFiscal': {
    //   'required': 'Informe o Identificador Fiscal.'
    // }
  };
 

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  onSubmit(formData: any) {  
   
         let password = this.usuarioFrm.controls.newPassword.value;
         let repeatPassword = this.usuarioFrm.controls.confirmPassword.value;
         if(password != repeatPassword){
           this.showMessage("senha e confirmação de senha não combinam.");
          return;  
         }
             
         
    const usuarioData = this.mapDateData(formData.value);
    
        this._usuarioService.updatePassword(Global.BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios/novasenha', usuarioData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.showMessage(data.message);
              this.onLogout();
            } else {
              this.showMessage(data.error);
            }
          },
          resposta => {
            let msg = 'erro inesperado. Tente novamente';
            if(resposta){
              msg = resposta;
            }
            this.showMessage(msg);
          }
        );      
    }
    
    SetControlsState(isEnable: boolean) {
      isEnable ? this.usuarioFrm.enable() : this.usuarioFrm.disable();
    }
  
    mapDateData(usuario: UsuarioPassword): UsuarioPassword {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));  
      usuario.usuarioId = currentUser.user.id;
      return usuario;
    }
}
