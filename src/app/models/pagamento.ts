export class  Pagamento
{

    /**
     *
     */
    constructor() {     
               var data = new Date();   
               this.competencia = data.getMonth();
    }

    id: number;
    razaoSocial: string;
    os: string
    obs: string;
    valor: number;
    numeroDaNota: string;
    dataPagamento: string;
    unidadeId: number;
    identificadorFiscal: string;
    competencia: number;    
    usuarioId: number;
}