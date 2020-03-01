import { Identifiers } from "@angular/compiler";

export class ContasApagar{

    /**
     *
     */
    constructor() {
        this.valor = 0.0;
        this.desconto =0.0;
    }
    select:boolean;
    id:number;
    tipoDoc:number;
    tipoDocDescricao:string;
    fornecedorId:number;
    nomeFornecedor:string;
    contaId:number;
    descricaoConta:string;
    titulo:string;
    notaFiscal:string;
    emissao: string;
    vencimento:string;
    data:string;
    dataAgendada:string;
    valor:number;
    desconto:number;
    status:number;
    descricaoStatus:string;
    descricaoPagamento:string;
    operacao:number;
    ativo:boolean;
    usuarioCreateId:number;
    ultimoUsuarioAtualizacaoId:number;
    dataDaUltimaAtualizacao:string;
    arquivoBase64:string;
    nomeArquivo:string;
}