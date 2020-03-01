import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';



import { License } from '../../models/license';
import { LicenseService } from '../../services/license.service';
import { DBOperation } from '../../shared/DBOperation';
import { Global } from '../../shared/Global';
import { ListLicenseComponent } from '../../licenseList/list-license/list-license.component';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../shared/date.adapter';

@Component({
  selector: 'app-form-license',
  templateUrl: './form-license.component.html',
  styleUrls: ['./form-license.component.css'] 
  })
export class FormLicenseComponent implements OnInit {

  msg: string;
  indLoading = false;
  licenseFrm: FormGroup;
  // dbops: DBOperation;
  // modalTitle: string;
  // modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
  // contact: IContact;
  situacaos = [];
  tipoLicenses = [];
  disabled: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: any,
  private fb: FormBuilder,
  private _licenseService: LicenseService,
  public dialogRef: MatDialogRef<ListLicenseComponent>) { }

  ngOnInit() {
       this.disabled = true;
       this.licenseFrm = this.fb.group({
       id: [''],
       os: ['',  [Validators.required, Validators.minLength(2)]],
       chaveDeHardware: ['', [Validators.required]],
       identificadorFiscal: ['', [Validators.required]],
       validade: ['', [Validators.required]],
       situacao: ['', [Validators.required]],
       tipo: ['', [Validators.required]],
       contratoId: [''],
       objetoId:['']
    });
     this.situacaos = Global.situacao;
     this.tipoLicenses = Global.GetTipoLicense();
     // tslint:disable-next-line:no-trailing-whitespace

    // subscribe on value changed event of form to show validation message
    this.licenseFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

     if (this.data.dbops === DBOperation.create) {
      this.licenseFrm.setValue(this.data.license);
    } else {
      this.licenseFrm.setValue(this.data.license);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
    this.licenseFrm.get('os').disable();
    this.licenseFrm.get('identificadorFiscal').disable();
    var usercurrent = Global.GetCurrentUser();
    if(this.data.dbops === DBOperation.update && usercurrent.user.super == false){
      this.licenseFrm.get('validade').disable();
      this.licenseFrm.get('chaveDeHardware').disable();
    }
  }
  get f() { return this.licenseFrm.controls; }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.licenseFrm) { return; }
    const form = this.licenseFrm;
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
    'chaveDeHardware': '',
    'identificadorFiscal': '',
    'validade': '',
    'situacao': '',
    'tipo': ''
  };

  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'os': {
      'minlength': 'Nome da Os deve possuir no mínimo 2 caracteres.',
      'required': 'Informe a Os.'
    },
    'chaveDeHardware': {
      'required': 'Informe a chave de hardware.'
    },
    'identificadorFiscal': {
      'required': 'Informe o identificador fiscal.'
    },
    'validade': {
      'required': 'Informe a validade.'
    },
    'situacao': {
      'required': 'Informe a situação.'
    },
    'tipo': {
      'required': 'Informe a tipo.'
    }

  };

  onSubmit(formData: any) {
    const objLicense = this.CreateLicense();
    const licenseData = this.mapDateData(objLicense);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._licenseService.addLicense(Global.BASE_USER_ENDPOINT + 'api/license/add', licenseData).subscribe(
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
        this._licenseService.updateLicense(Global.BASE_USER_ENDPOINT + 'api/license/update', licenseData.id, licenseData).subscribe(
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
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));  
        this._licenseService.deleteLicense(Global.BASE_USER_ENDPOINT + 'api/license/delete', licenseData.id,currentUser.user.id).subscribe(
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
    isEnable ? this.licenseFrm.enable() : this.licenseFrm.disable();
  }
  CreateLicense(): License {
    const obj =  new License();
    obj.id = this.f.id.value;
    obj.contratoId = this.f.contratoId.value;
    obj.os = this.f.os.value;
    obj.chaveDeHardware = this.f.chaveDeHardware.value;
    obj.identificadorFiscal = this.f.identificadorFiscal.value;
    obj.situacao = this.f.situacao.value;
    obj.tipo = this.f.tipo.value;
    obj.validade = this.f.validade.value;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    obj.usuarioid = currentUser.user.id;
    return obj;
  }
  mapDateData(license: License): License {
    license.validade = new Date(license.validade).toISOString();
    return license;
  }

}
