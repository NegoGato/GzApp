export class ConciliacaoBancaria{

    id:number;
    contaId:number;
    lancamentoId:number;
    lancamentoObjetoId:number;
    objetoId:number;
    operacaoId:number;
    operacaoDescricao:string;
    debito:number;
    credito:number;
    conciliado:boolean;
    dataConciliacao:string;
    dataDoLacamentoFinanceiro:string;
    descricaoPagamento:string;
    obs:string;
    ativo:boolean;
    usuarioId:number;

}