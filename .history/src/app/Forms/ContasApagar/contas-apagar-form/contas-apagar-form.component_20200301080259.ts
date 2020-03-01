import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { ContaFinanceira } from 'src/app/models/contaFinanceira';
import { Fornecedor } from 'src/app/models/fornecedor';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContasAPagarService } from 'src/app/services/contas-apagar.service';
import { ContasApagarListComponent } from '../contas-apagar-list/contas-apagar-list.component';
import { DBOperation } from 'src/app/shared/DBOperation';
import { ContasApagar } from 'src/app/models/contasApagar';
import { Global } from 'src/app/shared/Global';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { FornecedorFormComponent } from '../../Fornecedor/fornecedor-form/fornecedor-form.component';
import { takeUntil } from 'rxjs/operators';
import { ContaService } from 'src/app/services/conta.service';
import { OperacaoService } from 'src/app/services/operacao.service';
import { Operacao } from 'src/app/models/operacao';
import { TipoDocService } from 'src/app/services/tipo-doc.service';
import { TipoDoc } from 'src/app/models/tipoDoc';

@Component({
  selector: 'app-contas-apagar-form',
  templateUrl: './contas-apagar-form.component.html',
  styleUrls: ['./contas-apagar-form.component.css']
})
export class ContasApagarFormComponent implements OnInit {

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
  contasAPagarFrm:FormGroup;

  // selectedTipoFornecedor:any;
  // selectedTipoContaFinanceira:any;
  // selectedTipoTipoDoc:any;

  listOperacoes:Operacao[];
  listTipoDoc:TipoDoc[];
  currentUser:any;

  isHidden:boolean;
  fileName:string;
  file:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                       private fb:FormBuilder,
                                       private _contasAPagarService: ContasAPagarService,
                                       private _contaFinanceiraService:ContaService,
                                       private _fornecedorService:FornecedorService,
                                       private _operacaoService:OperacaoService,
                                       private _tipoDocService:TipoDocService,
                                      public dialogRef: MatDialogRef<ContasApagarListComponent> ) { 
                                        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                                      }

  ngOnInit() {

    this.contasAPagarFrm = this.fb.group({
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
      dataAgendada:[''],
      valor:['',[Validators.required]],
      desconto:[''],
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
  this.contasAPagarFrm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
    if(this.data.dbops == DBOperation.create){
      this.contasAPagarFrm.reset();
    }else{
      this.contasAPagarFrm.setValue(this.data.fornecedor);
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
      this.listFornecedor.filter(c=> c.nome.toLowerCase().indexOf(search) > -1 || c.matricula.indexOf(search) >-1)
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
    isEnable ? this.contasAPagarFrm.enable():this.contasAPagarFrm.disable();
  }
  // setValorDescricaoNome():void{
  //    const c = this.selectedTipoFornecedor;
  // }
  loadFornecedores():void{
    this._fornecedorService.getAll(Global.BASE_USER_ENDPOINT)
    .subscribe(fornecedor => {    
      
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
  this._operacaoService.getAllDebito(Global.BASE_USER_ENDPOINT + 'api/operacao/v1/operacaodebito')
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
     'required':'Fornecedor não informado.'
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
    if(!this.contasAPagarFrm){return;}
    const form = this.contasAPagarFrm;
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
    const contasAPagarData = this.mapDateData(this.contasAPagarFrm.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._contasAPagarService.add(Global.BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData,this.currentUser.user.id).subscribe(
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
        this._contasAPagarService.update(Global.BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData.id, contasAPagarData,this.currentUser.user.id).subscribe(
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
        this._contasAPagarService.delete(Global.BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData.id,this.currentUser.user.id).subscribe(
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

  mapDateData(contasApagar: ContasApagar): ContasApagar {
    
    if(this.data.dbops == DBOperation.create){
      contasApagar.ativo = true;
      contasApagar.usuarioCreateId = this.currentUser.user.id;
    }else{
      contasApagar.ultimoUsuarioAtualizacaoId = this.currentUser.user.id;
    }
    contasApagar.emissao = new Date(contasApagar.emissao).toISOString();
    contasApagar.vencimento = new Date(contasApagar.vencimento).toISOString();
    contasApagar.data = new Date(contasApagar.data).toISOString();
    contasApagar.dataAgendada = new Date(contasApagar.dataAgendada).toISOString();
    // contasApagar.tipoDoc = this.selectedTipoTipoDoc.id;
    contasApagar.tipoDocDescricao = contasApagar.tipoDoc != null? this.listTipoDoc.filter(x=>x.id === contasApagar.tipoDoc)[0].descricao:null;
    // contasApagar.contaId = this.selectedTipoContaFinanceira.id;
    contasApagar.descricaoConta = contasApagar.contaId !=null?this.listContaFinanceira.filter(x=>x.id === contasApagar.contaId)[0].descricao:null;
    // contasApagar.fornecedorId = this.selectedTipoFornecedor.id;
    contasApagar.nomeFornecedor = contasApagar.fornecedorId != null?this.listFornecedor.filter(x=> x.id === contasApagar.fornecedorId)[0].nome:null;
    
    contasApagar.arquivoBase64 = this.arquivo;
    contasApagar.nomeArquivo = this.fileName;
    return contasApagar;
  }

}
