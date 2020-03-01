import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioListComponent } from '../usuario-list/usuario-list.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { Global } from 'src/app/shared/Global';
import { RegistrationValidator } from 'src/app/models/RegistrationValidator';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {


  msg: string;
  indLoading = false;
  usuarioFrm: FormGroup;
  editsave:boolean;
  listFilter: string;
  selectedOption: string;  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private fb: FormBuilder,
  private _usuarioService: UsuarioService,
  public dialogRef: MatDialogRef<UsuarioListComponent>) { }


  ngOnInit() {
    this.usuarioFrm = this.fb.group({
      id: [''],
      login: ['', [Validators.required, Validators.minLength(2)]],
      nomeCompleto: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      super: [''],
   });   
   this.usuarioFrm.valueChanges.subscribe(data => this.onValueChanged(data));
   this.onValueChanged();

   if (this.data.dbops === DBOperation.create) {
    this.usuarioFrm.reset();
    this.editsave = true;
  } else {
    this.usuarioFrm.setValue(this.data.unidade);
    this.editsave = false;
   
  }
  this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
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
// form errors model
  // tslint:disable-next-line:member-ordering
  formErrors = {
    'login': '',
    'nomeCompleto': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  };
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'login': {
      'minlength': 'Login deve possuir no mínimo 2 caracteres.',
      'required': 'Informe o login.'
    },
    'nomeCompleto': {
      'minlength': 'Nome completo deve possuir no mínimo 2 caracteres.',
      'required': 'Informe o nome completo.'
    },
    'email': {
      'required': 'Informe o e-mail.'
    },
    'password': {
      'required': 'Informe o senha.'
    },
    'confirmPassword': {
      'required': 'Confirme a senha.',
      'validate': 'Senhas não conferem.'
    }
    // 'identificadorFiscal': {
    //   'required': 'Informe o Identificador Fiscal.'
    // }
  };

  onSubmit(formData: any) {  
    if (this.data.dbops === DBOperation.create)
    {
      if(RegistrationValidator.validate(this.usuarioFrm)){     
        this.usuarioFrm.controls.confirmPassword.setValue("");     
        return;     
    }    
  }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));  
    const usuarioData = this.mapDateData(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._usuarioService.addUsuario(Global.BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData,currentUser.user.id).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.update:
        this._usuarioService.updateUsuario(Global.BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData.id, usuarioData,currentUser.user.id).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.delete:
        this._usuarioService.deleteUsuario(Global.BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData.id,currentUser.user.id).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
    }
  }

  SetControlsState(isEnable: boolean) {
    isEnable ? this.usuarioFrm.enable() : this.usuarioFrm.disable();
  }

  mapDateData(usuario: UsuarioModel): UsuarioModel {
    return usuario;
  }
}
