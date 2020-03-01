import { Component, OnInit, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/date.adapter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { PagamentoListComponent } from '../pagamento-list/pagamento-list.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { Pagamento } from 'src/app/models/pagamento';
import { Global } from 'src/app/shared/Global';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']  
})
export class PagamentoFormComponent implements OnInit {
  msg: string;
  indLoading = false;
  pagamentoFrm: FormGroup;
  listFilter: string;
  selectedOption: string;
  disabled: boolean;
  mesatual:number;
  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: any,
  private fb: FormBuilder,
  private _pagamentoService: PagamentoService,
  public dialogRef: MatDialogRef<PagamentoListComponent>) { }

  ngOnInit() {
    this.disabled = true;
    this.pagamentoFrm = this.fb.group({
    id: [''],
    os: ['',  [Validators.required, Validators.minLength(2)]],
    razaoSocial: ['', [Validators.required]],
    identificadorFiscal: ['', [Validators.required]],
    competencia: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    dataPagamento: ['', [Validators.required]],
    unidadeId:['', [Validators.required]],
    numeroDaNota:['', [Validators.required]],
    obs:[''],
    usuarioId:[]
 });
      // subscribe on value changed event of form to show validation message
    this.pagamentoFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

     if (this.data.dbops === DBOperation.create) {
      this.pagamentoFrm.setValue(this.data.license);
    } else {
      this.pagamentoFrm.setValue(this.data.license);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
    this.pagamentoFrm.get('os').disable();
    this.pagamentoFrm.get('razaoSocial').disable();
    this.pagamentoFrm.get('identificadorFiscal').disable();
  }
  get f() { return this.pagamentoFrm.controls; }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.pagamentoFrm) { return; }
    const form = this.pagamentoFrm;
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
    'identificadorFiscal': '',
    'competencia': '',
    'valor': '',
    'dataPagamento': '',
    'numeroDaNota': ''
  };

  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'os': {
      'minlength': 'Nome da Os deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a Os.'
    },
    'razaoSocial': {
      'required': 'Informe a chave de razão social.'
    },
    'identificadorFiscal': {
      'required': 'Informe o identificador fiscal.'
    },
    'dataPagamento': {
      'required': 'Informe a data pagamento.'
    },
    'valor': {
      'required': 'Informe a valor.'
    },
    'competencia': {
      'required': 'Informe a competencia.'
    },
    'numeroDaNota': {
      'required': 'Informe o Nº da nota'
    }

  };
  onSubmit(formData: any) {        
    const objPagamento = this.CreatePagamento();
    if (this.data.dbops === DBOperation.create)
    {
      if(new Date(objPagamento.dataPagamento).getDate()>new Date().getDate()){     
        this.pagamentoFrm.controls.dataPagamento.setValue("");     
        return;     
      }
    }            
    const pagamentoData = this.mapDateData(objPagamento);
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    pagamentoData.usuarioId = currentUser.user.id; 
    switch (this.data.dbops) {
      case DBOperation.create:
        this._pagamentoService.addPagamento(Global.BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData).subscribe(
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
        this._pagamentoService.updatePagamento(Global.BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData.id, pagamentoData).subscribe(
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
        this._pagamentoService.deletePagamento(Global.BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData.id,currentUser.user.id).subscribe(
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
    isEnable ? this.pagamentoFrm.enable() : this.pagamentoFrm.disable();
  }
  CreatePagamento(): Pagamento {
    const obj =  new Pagamento();
    obj.competencia = this.f.competencia.value;
    obj.id = this.f.id.value;
    obj.unidadeId = this.f.unidadeId.value;
    obj.os = this.f.os.value;
    obj.razaoSocial = this.f.razaoSocial.value;
    obj.identificadorFiscal = this.f.identificadorFiscal.value;
    obj.valor = this.f.valor.value;
    obj.obs = this.f.obs.value;
    obj.numeroDaNota = this.f.numeroDaNota.value;
    obj.dataPagamento = this.f.dataPagamento.value;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    obj.usuarioId = currentUser.user.id;
    return obj;
  }
  mapDateData(pagamento: Pagamento): Pagamento {
    pagamento.dataPagamento = new Date(pagamento.dataPagamento).toISOString();
    return pagamento;
  }

}
