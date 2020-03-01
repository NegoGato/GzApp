import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Inject } from '@angular/core';
import { UnidadeService } from '../../services/unidade.service';
import { ListUnidadeComponent } from '../../unidadeLIst/list-unidade/list-unidade.component';
import { Validators } from '@angular/forms';
import { DBOperation } from '../../shared/DBOperation';
import { Global } from '../../shared/Global';
import { Unidade } from '../../models/unidade';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/date.adapter';

@Component({
  selector: 'app-form-unidade',
  templateUrl: './form-unidade.component.html',
  styleUrls: ['./form-unidade.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }]
})
export class FormUnidadeComponent implements OnInit {

  msg: string;
  indLoading = false;
  unidadeFrm: FormGroup;
  // dbops: DBOperation;
  // modalTitle: string;
  // modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
  // contact: IContact;
  tipoDeContratos = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private fb: FormBuilder,
  private _unidadeService: UnidadeService,
  public dialogRef: MatDialogRef<ListUnidadeComponent>) { }

  ngOnInit() {

    this.unidadeFrm = this.fb.group({
       id: [''],
       os: ['', [Validators.required, Validators.minLength(2)]],
       razaoSocial: ['', [Validators.required, Validators.minLength(2)]],
       cnpj: ['', [Validators.required]],
       identificadorFiscal: [''],
       numero: ['', [Validators.required]],
       tipoContratos: ['', [Validators.required]],
       dataDoVencimento: ['', [Validators.required]]
    });

    this.tipoDeContratos = Global.GetTipoContrato();
    // subscribe on value changed event of form to show validation message
    this.unidadeFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

     if (this.data.dbops === DBOperation.create) {
      this.unidadeFrm.reset();
    } else {
      this.unidadeFrm.setValue(this.data.unidade);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);

  }

  // form value change event
  onValueChanged(data?: any) {
    if (!this.unidadeFrm) { return; }
    const form = this.unidadeFrm;
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
    'os': '',
    'razaoSocial': '',
    'cnpj': '',
    'tipoContratos': '',
    'numero': '',
    'dataDoVencimento': ''
  };

  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'os': {
      'minlength': 'Organização social deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a Organização social.'
    },
    'razaoSocial': {
      'minlength': 'Razão social deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a razão social.'
    },
    'cnpj': {
      'required': 'Informe o cnpj.'
    },
    'tipoContrato': {
      'required': 'Informe o tipo do contrato.'
    },
    'numero': {
      'required': 'Informe o Numero do Contrato.'
    },
     'dataDoVencimento': {
       'required': 'Informe data do vencimento .'
     }
  };

  onSubmit(formData: any) {
    const unidadeData = this.mapDateData(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._unidadeService.addUnidade(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData).subscribe(
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
        this._unidadeService.updateUnidade(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData.id, unidadeData).subscribe(
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
        this._unidadeService.deleteUnidade(Global.BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData.id).subscribe(
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
    isEnable ? this.unidadeFrm.enable() : this.unidadeFrm.disable();
  }

  mapDateData(unidade: Unidade): Unidade {
    unidade.dataDoVencimento = new Date(unidade.dataDoVencimento).toISOString();
    return unidade;
  }

}
