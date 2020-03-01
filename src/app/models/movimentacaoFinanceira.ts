export class MovimentacaoFinanceira{
    id:number;
    contaOrigemId:number;
    contaDestinoId:number;
    credito:number;
    debito:number;
    tipoMov:number;
    ativo:boolean;
    objetoId:number;
    contraPartida:number;
    data:string;
    usuarioId:number;
    geradoPeloSistema:boolean;
    identificador:string;
    dataMovimentacao:string;
}