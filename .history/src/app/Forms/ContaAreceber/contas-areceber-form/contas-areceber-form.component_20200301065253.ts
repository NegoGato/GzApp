import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { ContaFinanceira } from 'src/app/models/contaFinanceira';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Operacao } from 'src/app/models/operacao';
import { TipoDoc } from 'src/app/models/tipoDoc';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContasAreceberService } from 'src/app/services/contas-areceber.service';
import { ContaService } from 'src/app/services/conta.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { OperacaoService } from 'src/app/services/operacao.service';
import { TipoDocService } from 'src/app/services/tipo-doc.service';
import { ContasAreceberListComponent } from '../contas-areceber-list/contas-areceber-list.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { takeUntil } from 'rxjs/operators';
import { Global } from 'src/app/shared/Global';
import { ContasAReceber } from 'src/app/models/contasAreceber';
import { ContasApagar } from 'src/app/models/contasApagar';

@Component({
  selector: 'app-contas-areceber-form',
  templateUrl: './contas-areceber-form.component.html',
  styleUrls: ['./contas-areceber-form.component.css']
})
export class ContasAreceberFormComponent implements OnInit {

  // consulta fornecedores
  public fornecedoresFilterCtrl: FormControl = new FormControl();
  public fornecedorCtrl: FormControl = new FormControl();
  public filteredFornecedor: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  private _onDestroy = new Subject<void>();
  // consulta contas financeiras
  public contaFinanceiraFilterCtrl: FormControl = new FormControl();
  public contaFinanceiraCtrl: FormControl = new FormControl();
  public filteredContaFinanceira: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  arquivo:any;
  contaFinaceira:ContaFinanceira;
  listContaFinanceira : ContaFinanceira[];
  fornecedor:Fornecedor;
  listFornecedor:Fornecedor[];
  contasAReceberFrm:FormGroup;
  isHidden:boolean;
  fileName:string;
  file:any;
  contaApagarTeste = new  ContasAReceber;
  // selectedTipoFornecedor:any;
  // selectedTipoContaFinanceira:any;
  // selectedTipoTipoDoc:any;

  listOperacoes:Operacao[];
  listTipoDoc:TipoDoc[];
  currentUser:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                       private fb:FormBuilder,
                                       private _contasAreceberService: ContasAreceberService,
                                       private _contaFinanceiraService:ContaService,
                                       private _fornecedorService:FornecedorService,
                                       private _operacaoService:OperacaoService,
                                       private _tipoDocService:TipoDocService,
                                      public dialogRef: MatDialogRef<ContasAreceberListComponent> ) { 
                                        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                                      }

  ngOnInit() {

    this.contasAReceberFrm = this.fb.group({
      id:[''],
      select:[''],
      tipoDoc:['', [Validators.required]],
      fornecedorId:['', [Validators.required]],
      contaId:['', [Validators.required]],
      titulo:[''],
      notaFiscal:[''],
      emissao:[''],
      vencimento:[''],
      data:[''],
      mesReferencia:[''],
      valor:['',[Validators.required]],
      status:[''],
      operacao:['',[Validators.required]],
      descricaoPagamento:[''],
      tipoDocDescricao:[''],
      nomeFornecedor:[''],
      descricaoConta:[''],
      descricaoStatus:[''],
      ativo:[''],
      usuarioCreateId:[''],
      ultimoUsuarioAtualizacaoId:[''],
      dataDaUltimaAtualizacao:[''],
      objetoId:[''],
      nomeArquivo:[''],
      arquivoBase64:['']
  });
  this.data.fornecedor.nomeArquivo != null?this.isHidden = true:this.isHidden = false;
  this.fileName = this.data.fornecedor.nomeArquivo;
  this.arquivo = this.data.fornecedor.arquivoBase64;
  this.contasAReceberFrm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
    if(this.data.dbops == DBOperation.create){
      this.contasAReceberFrm.reset();
    }else{
      this.contasAReceberFrm.setValue(this.data.fornecedor);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete?false:true)   
    this.loadContaFinanceira();
    this.loadFornecedores();
    this.loadOperacoes();
    this.loadTipoDoc();
    this.fornecedoresFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterFornecedores();
    });

    this.contaFinanceiraFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(()=>{
       this.filterContasFinanceiras();
    });
  }
  private filterFornecedores() {
    if (!this.listFornecedor) {
      return;
    }
    // get the search keyword
    let search = this.fornecedoresFilterCtrl.value;
    if (!search) {
      this.filteredFornecedor.next(this.listFornecedor.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the fornecedores
    this.filteredFornecedor.next(
      this.listFornecedor.filter(c=> c.nome.toLowerCase().indexOf(search) > -1 || c.cnpj.indexOf(search)>-1)
    );
  }
  private filterContasFinanceiras() {
    if (!this.listContaFinanceira) {
      return;
    }
    // get the search keyword
    let search = this.contaFinanceiraFilterCtrl.value;
    if (!search) {
      this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the fornecedores
    this.filteredContaFinanceira.next(
      this.listContaFinanceira.filter(c=> c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search)>-1)
    );
  }
  SetControlsState(isEnable: boolean){
    isEnable ? this.contasAReceberFrm.enable():this.contasAReceberFrm.disable();
  }
  // setValorDescricaoNome():void{
  //    const c = this.selectedTipoFornecedor;
  // }
  loadFornecedores():void{
    this._fornecedorService.getAll(Global.BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores',true)
    .subscribe(fornecedor => {    
      this.listFornecedor = fornecedor;  
      this.fornecedorCtrl.setValue(this.listFornecedor);
      this.filteredFornecedor.next(this.listFornecedor.slice());
    });
  }
  loadContaFinanceira():void{
    this._contaFinanceiraService.getAllConta(Global.BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
    .subscribe(contafinanceira => {   
      this.listContaFinanceira = contafinanceira;   
      this.contaFinanceiraCtrl.setValue(this.listContaFinanceira);
      this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
    });
  }
  loadOperacoes():void{
  this._operacaoService.getAllCredito(Global.BASE_USER_ENDPOINT + 'api/operacao/v1/operacaocredito')
    .subscribe(contafinanceira => {   
      this.listOperacoes = contafinanceira;        
    });
  }
  loadTipoDoc():void{
    this._tipoDocService.getAll(Global.BASE_USER_ENDPOINT + 'api/tipodoc/v1/tipodoc')
    .subscribe(tipoDoc => {
          this.listTipoDoc = tipoDoc;
    });
  }
  formErrors = {
    'tipoDoc':'',
    'fornecedorId':'',
    'contaId':'',
    'operacao':'',
    'valor':''
    };
    
 validationMessages = {
   'tipoDoc': {
     'required':'Tipo documento não informado.'
   },
   'fornecedorId':{
     'required':'Cliente não informado.'
   },
   'contaId':{
     'required':'Conta financeira não informada'
   },
   'operacao':{
      'required':'Operação não informada.'
   },
   'valor':{
     'required': 'Valor não informado.'
   }
 }

  onValueChanged(data?: any){
    if(!this.contasAReceberFrm){return;}
    const form = this.contasAReceberFrm;
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

  getFiles(event) {    
    this.file = event.target.files;
    if(this.file[0] == undefined)
    return;
    this.fileName = this.file[0].name;
    this.isHidden = true;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.file[0]);
   }

_handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.arquivo = window.btoa(binaryString);  // Converting binary string data.
    this.isHidden = true;
}

  carregarAnexo(){

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
    
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
    
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
        
      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }

        const contentType = 'application/pdf';
        const b64Data = this.arquivo;

        const blob = b64toBlob(b64Data, contentType);
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl);

  }

  limparFiltro(): void {
    // this.fim = null;
    // this.inicio = null;
    // this.status = null;
    this.isHidden = false;
    this.fileName = null;
    this.file = null;
    this.arquivo = null;
  }

  onSubmit(formData: any) {
    if(formData.status == 'INVALID')
       return;
    const contasAReceberData = this.mapDateData(this.contasAReceberFrm.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._contasAreceberService.add(Global.BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData,this.currentUser.user.id).subscribe(
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
        this._contasAreceberService.update(Global.BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData.id, contasAReceberData,this.currentUser.user.id).subscribe(
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
        this._contasAreceberService.delete(Global.BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData.id,this.currentUser.user.id).subscribe(
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

  mapDateData(contasAReceber: ContasAReceber): ContasAReceber {
    
    if(this.data.dbops == DBOperation.create){
      contasAReceber.ativo = true;
      contasAReceber.usuarioCreateId = this.currentUser.user.id;
    }else{
      contasAReceber.ultimoUsuarioAtualizacaoId = this.currentUser.user.id;      
    }
    contasAReceber.emissao = new Date(contasAReceber.emissao).toISOString();
    contasAReceber.vencimento = new Date(contasAReceber.vencimento).toISOString();
    contasAReceber.data = new Date(contasAReceber.data).toISOString();
    contasAReceber.mesReferencia = new Date(contasAReceber.mesReferencia).toISOString();
    // contasApagar.tipoDoc = this.selectedTipoTipoDoc.id;
    contasAReceber.tipoDocDescricao = contasAReceber.tipoDoc != null? this.listTipoDoc.filter(x=>x.id === contasAReceber.tipoDoc)[0].descricao:null;
    // contasApagar.contaId = this.selectedTipoContaFinanceira.id;
    contasAReceber.descricaoConta = contasAReceber.contaId !=null?this.listContaFinanceira.filter(x=>x.id === contasAReceber.contaId)[0].descricao:null;
    // contasApagar.fornecedorId = this.selectedTipoFornecedor.id;
    contasAReceber.nomeFornecedor = contasAReceber.fornecedorId != null?this.listFornecedor.filter(x=> x.id === contasAReceber.fornecedorId)[0].nome:null;
    contasAReceber.arquivoBase64 = this.arquivo;
    contasAReceber.nomeArquivo = this.fileName;
    return contasAReceber;
  }

}
