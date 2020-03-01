export class ConciliacaoQuery{
    id:number;
    contaId:number;
    lancamentoId:number;
    objetoId:number;
    operacao:number;
    operacaoDescricao:string;
    debito:number;
    credito:number;
    conciliado:boolean;
    data:string;
    dataConciliacao:string;
    descricaoPagamento:string;
    obs:string;
    select:boolean;
    usuario:string;
}