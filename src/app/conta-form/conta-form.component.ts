import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaService } from '../services/conta.service';
import { ContaListComponent } from '../conta-list/conta-list.component';
import { Global } from '../shared/Global';
import { DBOperation } from '../shared/DBOperation';
import { ContaFinanceira } from '../models/contaFinanceira';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})
export class ContaFormComponent implements OnInit {
  contaFormGroup:FormGroup;
  disabled: boolean;
  public tipoContaCorrente = [];
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any,
  private fb: FormBuilder,
  private _contaService: ContaService,
  public dialogRef: MatDialogRef<ContaListComponent>) { }

  ngOnInit() {
    this.disabled = false;
    this.contaFormGroup = this.fb.group({
      id:[''],
      empresa:['',[Validators.required,Validators.minLength(2)]],
      banco:['',[Validators.required, Validators.minLength(2)]],
      agencia:['',[Validators.required,Validators.minLength(3)]],
      conta:['',[Validators.required, Validators.minLength(3)]],
      saldo:['',[Validators.required, Validators.minLength(3)]],
      descricao:['',[Validators.required]],
      tipoDaConta:['',[Validators.required]],
      select:['']
    });
   this.tipoContaCorrente = Global.GetTipoContaCorrente();

   // subscribe on value changed event of form to show validation message
   this.contaFormGroup.valueChanges.subscribe(data => this.onValueChanged(data));
   this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
     this.contaFormGroup.reset();
   } else {
     this.contaFormGroup.setValue(this.data.conta);
   }
   this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  SetControlsState(isEnable: boolean) {
    isEnable ? this.contaFormGroup.enable() : this.contaFormGroup.disable();
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.contaFormGroup) { return; }
    const form = this.contaFormGroup;
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
    'empresa': '',
    'banco': '',
    'agencia': '',
    'conta': '',
    'saldo': '',
    'descricao': '',
    'tipoDaConta':''
  };
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'banco': {
      'minlength': 'Banco deve possuir no mínimo 2 caracteres.',
      'required': 'Informe banco.'
    },
    'empresa': {
      'minlength': 'Empresa deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a empresa.'
    },
    'agencia': {
      'minlength':'Agência deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a agência.'
    },
    'conta': {
      'minlength':'Conta corrente deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a conta corrente.'
    },
    'saldo': {
      'required': 'Informe o saldo da conta corrente.'
    },
     'descricao': {
       'required': 'Informe a descrição.'
     },
     'tipoDaConta': {
      'required': 'Informe o tipo da conta corrente.'
    }
  };
  onSubmit(formData: any) {
    const contaData = this.mapDateData(this.contaFormGroup.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._contaService.addContaFinanceira(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas', contaData).subscribe(
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
        this._contaService.updateConta(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas', contaData.id, contaData).subscribe(
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
        this._contaService.deleteConta(Global.BASE_USER_ENDPOINT + 'api/contaFinanceira/v1/contas', contaData.id).subscribe(
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
  mapDateData(conta: ContaFinanceira): ContaFinanceira {   
    return conta;
  }
}
