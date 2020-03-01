import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { FornecedorListComponent } from '../fornecedor-list/fornecedor-list.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Global } from 'src/app/shared/Global';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {

 fornecedoresForm:FormGroup;
 disabled:boolean;
 pessoaFisical:boolean;
 constructor(@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder,private _fornecedorService: FornecedorService, public dialogRef: MatDialogRef<FornecedorListComponent> ) { }

  ngOnInit() {
    this.disabled = false;
    this.fornecedoresForm = this.fb.group({
        id:[''],
        nome:['',[Validators.required, Validators.minLength(2)]],
        cnpj:['',[Validators.required]],
        telefone:[''],
        objetoId:['']
    });
    if(this.data.fornecedor.cnpj == null)
    {
      this.pessoaFisical = false;
    }else{
      this.pessoaFisical = this.data.fornecedor.cnpj.length == 11?true:false;           
    }         
    
    this.fornecedoresForm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
    if(this.data.dbops == DBOperation.create){
      this.fornecedoresForm.reset();
    }else{
      this.fornecedoresForm.setValue(this.data.fornecedor);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete?false:true)    
  }
  SetControlsState(isEnable: boolean){
    isEnable ? this.fornecedoresForm.enable():this.fornecedoresForm.disable();
  }
  changeStatus(){
      this.pessoaFisical = !this.pessoaFisical?true:false;
  }
  formErrors = {
    'nome':'',
    'cnpj':''
  };

  onValueChanged(data?: any){
    if(!this.fornecedoresForm){return;}
    const form = this.fornecedoresForm;
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field]+=messages[key]+' ';
        }
      }
    }
  }

  validationMessages = {
     'nome':{
        'minlength':'Razão social deve possuir no mínimo 2 caracteres.',
        'required':'Informe razão social.'
      },
      'cnpj':{
         'required':'Informe cnpj ou cpf'
      }
  };

  onSubmit(formData: any) {
    const fornecedorData = this.mapData(this.fornecedoresForm.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._fornecedorService.add(Global.BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData).subscribe(
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
        this._fornecedorService.update(Global.BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData.id, fornecedorData).subscribe(
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
        this._fornecedorService.delete(Global.BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData.id).subscribe(
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

  mapData(fornecedor:Fornecedor): Fornecedor{
      return fornecedor;
  }
}
