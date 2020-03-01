import { TipoContrato } from './../models/tipoContrato';
import { TipoGeneric } from '../models/tipoLicense';


export class Global {
    //  public static BASE_USER_ENDPOINT = 'http://40.114.77.37:8099/';
    public static BASE_USER_ENDPOINT = 'https://localhost:5000/';
    // public static genders = [{
    //     name: 'Male',
    //     id: 0,
    // }, {
    //     name: 'Female',
    //     id: 1
    // }];
    public static situacao = ['Ativa', 'Desativada'];
    public static GetTipoContrato(): Array<TipoContrato> {
      const tipoContrato: TipoContrato[] = new Array<TipoContrato>();
      tipoContrato.push({Id: 1, Descricao: 'Manutenção'});
      tipoContrato.push({Id: 2, Descricao: 'Suporte'});
      tipoContrato.push({Id: 3, Descricao: 'Licença'});
      return tipoContrato;
    }
    public static GetTipoLicense(): Array<TipoGeneric> {
      const tipoLicense: TipoGeneric[] = new Array<TipoGeneric>();
      tipoLicense.push({id: 1, descricao: 'Trial'});
      tipoLicense.push({id: 2, descricao: 'Produção'});
      return tipoLicense;
    }
    public static GetTipoStatusApagarReceber():Array<TipoGeneric>{
      const tipoStatus : TipoGeneric[] = new Array<TipoGeneric>();
        tipoStatus.push({id:2, descricao:'Agendada'});
        tipoStatus.push({id:1, descricao:'Cancelada'});
        tipoStatus.push({id:3, descricao:'Conciliado'});
        tipoStatus.push({id:4, descricao:'Desativado'});
        tipoStatus.push({id:5, descricao:'Recebido'});     
        return tipoStatus; 
    }
    public static GetTipoContaCorrente():Array<TipoGeneric>{
      const tipoContaCorrente: TipoGeneric[] = new Array<TipoGeneric>();
      tipoContaCorrente.push({id: 1, descricao:'Conta corrente'});
      tipoContaCorrente.push({id:2, descricao:'Conta aplicação'});
      tipoContaCorrente.push({id:3, descricao:'Caixa - (Fundo Fixo)'});
      return tipoContaCorrente;
    }
    // tslint:disable-next-line:member-ordering
    public static currentUser: any;
    public static SetCurrentUser(user:any){
      this.currentUser = user;
    }
    public static GetCurrentUser():any{
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
