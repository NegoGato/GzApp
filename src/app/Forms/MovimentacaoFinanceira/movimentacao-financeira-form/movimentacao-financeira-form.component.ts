import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { ContaFinanceira } from 'src/app/models/contaFinanceira';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaService } from 'src/app/services/conta.service';
import { MovimentacaoFinanceiraListComponent } from '../movimentacao-financeira-list/movimentacao-financeira-list.component';
import { TipoMovServiceService } from 'src/app/services/tipo-mov-service.service';
import { Global } from 'src/app/shared/Global';
import { TipoMov } from 'src/app/models/tipoMov';
import { DBOperation } from 'src/app/shared/DBOperation';
import { takeUntil } from 'rxjs/operators';
import { MovimentacaoFinanceiraServicoService } from 'src/app/services/movimentacao-financeira-servico.service';
import { MovimentacaoFinanceira } from 'src/app/models/movimentacaoFinanceira';

@Component({
  selector: 'app-movimentacao-financeira-form',
  templateUrl: './movimentacao-financeira-form.component.html',
  styleUrls: ['./movimentacao-financeira-form.component.css']
})
export class MovimentacaoFinanceiraFormComponent implements OnInit {
 // conta financeira
 private _onDestroy = new Subject<void>();
  public contaFinanceiraFilterCtrl: FormControl = new FormControl();
  public contaFinanceiraCtrl: FormControl = new FormControl();
  public filteredContaFinanceira: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  contaFinaceira:ContaFinanceira;
  listContaFinanceira : ContaFinanceira[];
  movimentacaoFinanceiraFrm:FormGroup;
  listTipoMov:TipoMov[];
  disableSelect = new FormControl(true);
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                       private fb:FormBuilder,      
                                       private _tipoMovService:TipoMovServiceService,                                 
                                       private _contaFinanceiraService:ContaService,  
                                       private _movimentacaoFinanceiraServico:MovimentacaoFinanceiraServicoService,                                     
                                       public dialogRef: MatDialogRef<MovimentacaoFinanceiraListComponent>) { }

  ngOnInit() {
    this.movimentacaoFinanceiraFrm = this.fb.group({
      id:[''],
      contaOrigemId:['',[Validators.required]],
      contaDestinoId:['',[Validators.required]],
      credito:[''],
      debito:['',[Validators.required]],
      tipoMov:['',[Validators.required]],
      ativo:[''],
      objetoId:[''],
      contraPartida:[''],
      data:[''],
      dataMovimentacao:['' ,[Validators.required]],
      usuarioId:[''],
      geradoPeloSistema:[''],
      identificador:['']
    });

    this.loadTipoMov();
    this.movimentacaoFinanceiraFrm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
    // if(this.data.dbops == DBOperation.create){
    //   this.movimentacaoFinanceiraFrm.reset();
    // }else{
      this.movimentacaoFinanceiraFrm.setValue(this.data.data);
      // this.movimentacaoFinanceiraFrm.get('contaOrigemId').disable();
      
    // }
    this.loadContaFinanceira();   
    this.contaFinanceiraFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(()=>{
       this.filterContasFinanceiras();
    });
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
  loadTipoMov():void{
    this._tipoMovService.getAll(Global.BASE_USER_ENDPOINT + 'api/MovimentacaoBancaria/v1/TipoMov')
      .subscribe(tipomov => {   
        this.listTipoMov = tipomov;        
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

    formErrors = {
      'contaOrigemId':'',
      'contaDestinoId':'',
      'debito':'',
      'tipoMov':'',
      'datamovimentacao':''
      };
      
   validationMessages = {
     'contaOrigemId': {
       'required':'Conta de origem não informada.'
     },
     'contaDestinoId':{
       'required':'Conta de destino não informado.'
     },
     'debito':{
       'required':'Valor não informado.'
     },
     'tipoMov':{
        'required':'Tipo movimentação não informada.'
     },
     'datamovimentacao':{
       'required':'Data movimentação não informada.'
     }
   }


   onSubmit(formData: any) {
    const movimentacaoFinanceiraData = this.movimentacaoFinanceiraFrm.value;    
        this._movimentacaoFinanceiraServico.adicionar(Global.BASE_USER_ENDPOINT + 'api/MovimentacaoBancaria/v1/MovimentacaoBancaria', movimentacaoFinanceiraData).subscribe(
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
  }

    onValueChanged(data?: any){
      if(!this.movimentacaoFinanceiraFrm){return;}
      const form = this.movimentacaoFinanceiraFrm;
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
  
}
