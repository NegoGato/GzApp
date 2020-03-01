(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clearFitler{\r\n    cursor: pointer;\r\n }\r\n   mat-card button{\r\n     float: right;\r\n     margin-top: -17px;\r\n   }\r\n   h1{\r\n       text-align: center;\r\n   }\r\n   mat-form-field{\r\n       float: left;\r\n   }\r\n   button\r\n   {\r\n       /* float: right; */\r\n       margin-right: 1%;\r\n   }\r\n   mat-form-field {\r\n     margin-right: 12px;\r\n   }\r\n   p{\r\n       float: left;\r\n       position: absolute;\r\n   }\r\n   \r\n "

/***/ }),

/***/ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Conciliação bancária</h1>\n    <table style=\"margin-bottom: 4%; margin-left: auto; margin-right: auto; overflow: auto; border: 1px solid #555; width: 54%;\">\n      <tr tr class=\"table-info\"> \n        \n          <td colspan=\"3\">\n              <mat-form-field style=\"width: 100%; \">\n                  <mat-label>Conta bancária</mat-label>\n                  <mat-select placeholder=\"Conta financeira\"  [(value)]=\"contaFinaceira\" #singleSelect>\n                      <mat-option>\n                          <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                      </mat-option>                 \n                      <mat-option>-- None --</mat-option>\n                    <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira\">\n                      {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>        \n          </td>  \n\n            <td colspan=\"0\">\n                <mat-form-field style=\"width: 100%;\" >\n                    <mat-label>Data</mat-label>\n                    <input matInput [matDatepicker]=\"picker1\" [(value)]=\"inicio\" (dateChange)=\"dataInicio('input',$event,1)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                  </mat-form-field>\n            </td>       \n            \n       \n            <td colspan=\"0\">\n                <button style=\"width: 100%;\"  mat-raised-button (click)=\"Pesquisar()\">Pesquisar</button>\n            </td> \n      \n      </tr>\n    </table>       \n<mat-card>      \n  <button *ngIf=\"acao == 2\" title=\"Desfazer conciliacao\" mat-stroked-button color=\"warn\" (click)=\"openDialogCancelar(2)\">Desfazer conciliação</button>\n  <button *ngIf=\"acao == 1\" title=\"Baixa pagamento\" mat-stroked-button color=\"primary\" (click)=\"openDialogCancelar(1)\">Baixa Pagamento</button>\n</mat-card>\n \n<mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Id Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container> -->\n\n  <ng-container matColumnDef=\"select\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n      <!-- <mat-footer-cell *matFooterCellDef> </mat-footer-cell> -->\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>   \n  </ng-container>\n\n  <!-- Razao social Column -->\n  <ng-container matColumnDef=\"descricaoPagamento\">\n      <mat-header-cell *matHeaderCellDef> Pagamento </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.descricaoPagamento}} </mat-cell>\n    </ng-container>    \n\n    <!-- Razao social Column -->\n    <ng-container matColumnDef=\"operacaoDescricao\">\n      <mat-header-cell *matHeaderCellDef> Operação </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.operacaoDescricao}} </mat-cell>\n    </ng-container>\n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"data\">\n        <mat-header-cell *matHeaderCellDef> Data do lançamento </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.data | date: 'dd/MM/yyyy' }} </mat-cell>\n      </ng-container>\n\n\n      <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"dataConciliacao\">\n        <mat-header-cell *matHeaderCellDef> Data da conciliação </mat-header-cell>\n        <mat-cell  *matCellDef=\"let element\" > \n          <span *ngIf=\"!element.conciliado\" style=\"color:orange;\"> {{element.dataConciliacao | date: 'dd/MM/yyyy' }}</span> \n          <span *ngIf=\"element.conciliado\" style=\"color: rgb(13, 13, 14);\"> {{element.dataConciliacao | date: 'dd/MM/yyyy' }}</span>\n        </mat-cell>\n      </ng-container>\n\n\n     <!-- cnpj  Column -->\n     <ng-container matColumnDef=\"debito\">\n      <mat-header-cell *matHeaderCellDef> Débito </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> \n        <span *ngIf=\"element.debito>0\" style=\"color: red;\">{{element.debito | currency:'R$'}}</span>\n        <span *ngIf=\"element.debito==0\"> {{element.debito | currency:'R$'}} </span>\n      </mat-cell>\n    </ng-container>  \n    \n     <!-- cnpj  Column -->\n     <ng-container matColumnDef=\"credito\">\n      <mat-header-cell *matHeaderCellDef> Crédito </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> \n       <span *ngIf=\"element.credito>0\" style=\"color: green;\">{{element.credito | currency:'R$'}}</span>\n        <span *ngIf=\"element.credito ==0\"> {{element.credito | currency:'R$'}} </span>\n      </mat-cell>\n      </ng-container>\n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"conciliado\">\n        <mat-header-cell *matHeaderCellDef> Conciliado </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">            \n            <mat-checkbox  color=\"primary\" [checked]=\"element.conciliado\" onclick=\"return false;\">              \n            </mat-checkbox>\n           </mat-cell>\n      </ng-container>  \n      \n       <!-- Razao social Column -->\n    <ng-container matColumnDef=\"usuario\">\n      <mat-header-cell *matHeaderCellDef> Usuário </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.usuario}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>"

/***/ }),

/***/ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ConciliacaoBancariaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciliacaoBancariaFormComponent", function() { return ConciliacaoBancariaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_conciliacao_bancaria_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/conciliacao-bancaria.service */ "./src/app/services/conciliacao-bancaria.service.ts");
/* harmony import */ var _Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Confirmacao/confirmacao */ "./src/app/Forms/Confirmacao/confirmacao.ts");
/* harmony import */ var src_app_models_conciliacaoBancaria__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/conciliacaoBancaria */ "./src/app/models/conciliacaoBancaria.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConciliacaoBancariaFormComponent = /** @class */ (function () {
    function ConciliacaoBancariaFormComponent(dialog, _contaFinanceiraService, _conciliacaoBancariaService, snackBar) {
        this.dialog = dialog;
        this._contaFinanceiraService = _contaFinanceiraService;
        this._conciliacaoBancariaService = _conciliacaoBancariaService;
        this.snackBar = snackBar;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // consulta contas financeiras
        this.contaFinanceiraFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.contaFinanceiraCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredContaFinanceira = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.displayedColumns = ['select', 'descricaoPagamento', 'operacaoDescricao', 'data', 'dataConciliacao', 'debito', 'credito', 'conciliado', 'usuario'];
        // select grid
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.acao = 1;
    }
    ConciliacaoBancariaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadContaFinanceira();
        this.loadConciliacaoMes();
        this.contaFinanceiraFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterContasFinanceiras();
        });
    };
    ConciliacaoBancariaFormComponent.prototype.dataInicio = function (type, event, date) {
        if (date == 1)
            this.inicio = new Date(event.value).toISOString();
    };
    ConciliacaoBancariaFormComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ConciliacaoBancariaFormComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ConciliacaoBancariaFormComponent.prototype.checkboxLabel = function (row) {
        var _this = this;
        this.listConciliacaoQuery = [];
        if (row) {
            row.select = this.selection.isSelected(row) ? true : false;
            var contaAreceberSelecionadas = this.dataSource.data.filter(function (c) { return c.select; }).length > 0 ? this.dataSource.data.filter(function (c) { return c.select; }) : null;
            if (contaAreceberSelecionadas != null)
                contaAreceberSelecionadas.forEach(function (c) {
                    if (!c.conciliado) {
                        var baixaPagamento = 1;
                        _this.acao = baixaPagamento;
                    }
                    else {
                        var desativar = 2;
                        _this.acao = desativar;
                    }
                    _this.listConciliacaoQuery.push(c);
                });
        }
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.id + 1);
    };
    ConciliacaoBancariaFormComponent.prototype.loadContaFinanceira = function () {
        var _this = this;
        this._contaFinanceiraService.getAllConta(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contafinanceira) {
            _this.listContaFinanceira = contafinanceira;
            _this.contaFinanceiraCtrl.setValue(_this.listContaFinanceira);
            _this.filteredContaFinanceira.next(_this.listContaFinanceira.slice());
        });
    };
    ConciliacaoBancariaFormComponent.prototype.loadConciliacaoMes = function () {
        var _this = this;
        this._conciliacaoBancariaService.listPagamentoParaConciliacaoOuJaConciliadoDoMes(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias/mes')
            .subscribe(function (conciliacaoBancaria) {
            _this.dataSource.data = conciliacaoBancaria;
            // this.preencherConsultasFornecedores();
        });
    };
    ConciliacaoBancariaFormComponent.prototype.filterContasFinanceiras = function () {
        if (!this.listContaFinanceira) {
            return;
        }
        // get the search keyword
        var search = this.contaFinanceiraFilterCtrl.value;
        if (!search) {
            this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredContaFinanceira.next(this.listContaFinanceira.filter(function (c) { return c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1; }));
    };
    ConciliacaoBancariaFormComponent.prototype.obterConciliacaoBancaria = function (listConciliacaoQuery) {
        var _this = this;
        var listConciliacaoBancaria = new Array();
        listConciliacaoQuery.forEach(function (c) {
            var conciliacao = new src_app_models_conciliacaoBancaria__WEBPACK_IMPORTED_MODULE_10__["ConciliacaoBancaria"]();
            if (c.id != 0 || c.id == null)
                conciliacao.id = c.id;
            conciliacao.contaId = c.contaId;
            conciliacao.credito = c.credito;
            conciliacao.debito = c.debito;
            conciliacao.descricaoPagamento = c.descricaoPagamento;
            conciliacao.lancamentoId = c.lancamentoId;
            conciliacao.lancamentoObjetoId = c.objetoId;
            conciliacao.obs = c.obs;
            conciliacao.conciliado = c.conciliado;
            conciliacao.dataDoLacamentoFinanceiro = c.data;
            conciliacao.operacaoId = c.operacao;
            conciliacao.usuarioId = _this.currentUser.user.id;
            listConciliacaoBancaria.push(conciliacao);
        });
        return listConciliacaoBancaria;
    };
    ConciliacaoBancariaFormComponent.prototype.conciliarPagamento = function () {
        var _this = this;
        if (this.validarOpercacaoBaixaPagamento()) {
            if (this.listConciliacaoQuery == null || this.listConciliacaoQuery.length == 0)
                this.showMessage("nenhum registro selecionado");
            else {
                var listConciliacaoBancaria = this.obterConciliacaoBancaria(this.listConciliacaoQuery);
                this._conciliacaoBancariaService.baixarPagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', listConciliacaoBancaria, this.currentUser.user.id)
                    .subscribe(function (conciliacao) {
                    _this.Pesquisar();
                    // this.preencherConsultasFornecedores();
                });
            }
        }
    };
    ConciliacaoBancariaFormComponent.prototype.desfazerConciliacao = function () {
        var _this = this;
        // tem q retornar um valor para nao consultar na API quando a validacao nao for valida.
        //concultas ordenadas para nao mudar a posição.
        if (this.validarOpercacaoDesfazerConciliacao()) {
            if (this.listConciliacaoQuery == null || this.listConciliacaoQuery.length == 0)
                this.showMessage("nenhum registro selecionado");
            else {
                var listConciliacaoBancaria = this.obterConciliacaoBancaria(this.listConciliacaoQuery);
                this._conciliacaoBancariaService.desfazerConciliacao(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', listConciliacaoBancaria, this.currentUser.user.id)
                    .subscribe(function (conciliacao) {
                    _this.Pesquisar();
                    // this.preencherConsultasFornecedores();
                });
            }
        }
    };
    ConciliacaoBancariaFormComponent.prototype.openDialogCancelar = function (operacao) {
        var _this = this;
        var dialogRef = this.dialog.open(_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialog"], {
            width: '250px',
            data: { mensagem: 'deseja confirmar essa operação?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'true' && operacao == 1) {
                _this.conciliarPagamento();
            }
            if (result === 'true' && operacao == 2) {
                _this.desfazerConciliacao();
            }
        });
    };
    ConciliacaoBancariaFormComponent.prototype.validarOpercacaoBaixaPagamento = function () {
        if (this.listConciliacaoQuery != null || this.listConciliacaoQuery.length > 0) {
            var conta = this.dataSource.data.filter(function (c) { return c.select; });
            if (conta.some(function (c) { return c.conciliado; })) {
                this.showMessage("Operação inválida, um ou mais registros selecionados já estão conciliado.");
                return false;
            }
            else
                return true;
        }
    };
    ConciliacaoBancariaFormComponent.prototype.validarOpercacaoDesfazerConciliacao = function () {
        if (this.listConciliacaoQuery != null || this.listConciliacaoQuery.length > 0) {
            var conta = this.dataSource.data.filter(function (c) { return c.select; });
            if (conta.some(function (c) { return !c.conciliado; })) {
                this.showMessage("Operação inválida, um ou mais registros selecionados que não foram conciliados.");
                return false;
            }
            else
                return true;
        }
    };
    ConciliacaoBancariaFormComponent.prototype.Pesquisar = function () {
        var _this = this;
        this.inicio = this.inicio != null ? new Date(this.inicio).toISOString() : new Date();
        this._conciliacaoBancariaService.listPagamentoParaConciliacaoOuJaConciliado(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/conciliacaobancaria/v1/conciliacaobancarias', this.contaFinaceira.id, this.inicio)
            .subscribe(function (conciliacaoBancaria) {
            _this.dataSource.data = conciliacaoBancaria;
            // this.preencherConsultasFornecedores();
        });
    };
    ConciliacaoBancariaFormComponent.prototype.limparFiltro = function () {
        this.inicio = null;
        this.contaFinaceira = null;
    };
    ConciliacaoBancariaFormComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], ConciliacaoBancariaFormComponent.prototype, "paginator", void 0);
    ConciliacaoBancariaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conciliacao-bancaria-form',
            template: __webpack_require__(/*! ./conciliacao-bancaria-form.component.html */ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.html"),
            styles: [__webpack_require__(/*! ./conciliacao-bancaria-form.component.css */ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_3__["ContaService"],
            src_app_services_conciliacao_bancaria_service__WEBPACK_IMPORTED_MODULE_8__["ConciliacaoBancariaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], ConciliacaoBancariaFormComponent);
    return ConciliacaoBancariaFormComponent;
}());



/***/ }),

/***/ "./src/app/Forms/Confirmacao/confirmacao.ts":
/*!**************************************************!*\
  !*** ./src/app/Forms/Confirmacao/confirmacao.ts ***!
  \**************************************************/
/*! exports provided: DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.msg = data.mensagem;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close("false");
    };
    DialogOverviewExampleDialog.prototype.onOk = function () {
        this.dialogRef.close("true");
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/Forms/Confirmacao/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/Forms/Confirmacao/dialog-overview-example-dialog.html":
/*!***********************************************************************!*\
  !*** ./src/app/Forms/Confirmacao/dialog-overview-example-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{msg}}</h1>\r\n<div mat-dialog-content>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Não</button>\r\n  <button mat-button (click)=\"onOk()\" cdkFocusInitial>Sim</button>\r\n</div>"

/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n    width: 100%;\r\n    height: 10%;\r\n    margin: 12px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: 1px solid #555;\r\n  }\r\n\r\n  .docs-example-viewer-wrapper{\r\n    border:1px solid rgba(0, 0, 0, .03);\r\n    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);\r\n    margin: 4px;\r\n  }\r\n\r\n  div {\r\n    display: block;\r\n    padding: 30px;\r\n}\r\n\r\n  #clearFitler{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content style=\"overflow: auto;\">        \n  <form  (ngSubmit)=\"onSubmit(contasAReceberFrm)\"  [formGroup]=\"contasAReceberFrm\">\n     <h2 style=\"text-align: center\">{{data.modalTitle}}</h2>\n  <!-- <mat-drawer-container class=\"example-container\">  -->\n                    <table style=\"margin-left: auto; margin-right: auto;\" class=\"docs-example-viewer-wrapper\">\n                      <tr>\n                        <td colspan=\"3\">\n\n                            <mat-form-field style=\"width:100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-select placeholder=\"Tipo documento\" formControlName=\"tipoDoc\" >\n                                  <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let tipoDoc  of listTipoDoc\" [value]=\"tipoDoc.id\">\n                                    {{ tipoDoc.descricao }}\n                                  </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"formErrors.tipoDoc \">\n                                  {{ formErrors.tipoDoc }}\n                                </mat-error>\n                              </mat-form-field>   \n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Conta financeira</mat-label>\n                                <mat-select placeholder=\"Conta financeira\" style=\"width: 100%\" formControlName=\"contaId\"   #singleSelect>\n                                    <mat-option>\n                                        <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                                    </mat-option>                 \n                                    <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira.id\">\n                                    {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>    \n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Fornecedor</mat-label>  \n                              <mat-select style=\"width: 100%\" placeholder=\"Fornecedor\" formControlName=\"fornecedorId\"  #singleSelect>\n                                    <mat-option>\n                                        <ngx-mat-select-search [formControl]=\"fornecedoresFilterCtrl\"></ngx-mat-select-search>\n                                    </mat-option>                 \n                                    <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let fornecedor of filteredFornecedor | async\" [value]=\"fornecedor.id\">\n                                    {{fornecedor.nome}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>   \n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" >\n                            <mat-form-field style=\"width:100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-select placeholder=\"Operação\" formControlName=\"operacao\">\n                                  <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let operacoes  of listOperacoes\" [value]=\"operacoes.id\">\n                                    {{ operacoes.descricao }} - [{{operacoes.natureza}}]\n                                  </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"formErrors.operacao \">\n                                  {{ formErrors.operacao }}\n                                </mat-error>\n                              </mat-form-field>                             \n                        </td>\n                        <td>\n                            <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <input matInput [matDatepicker]=\"picker2\" placeholder=\"Data\"  formControlName=\"data\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker2></mat-datepicker>                        \n                              <mat-error *ngIf=\"formErrors.data \">\n                                {{ formErrors.data }}\n                              </mat-error>\n                              </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\"appearance=\"outline\">\n                                <mat-label>Título</mat-label>\n                                <input matInput placeholder=\"Título\" formControlName=\"titulo\">\n                                <mat-error *ngIf=\"formErrors.titulo\">\n                                  {{ formErrors.titulo }}\n                                </mat-error>\n                              </mat-form-field>\n                        </td>\n                          <td>\n                              <mat-form-field style=\"margin-bottom: -1.25em;\"  appearance=\"outline\">\n                                  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Mês de referência\"  formControlName=\"mesReferencia\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker3></mat-datepicker>                        \n                                <mat-error *ngIf=\"formErrors.mesReferencia \">\n                                  {{ formErrors.mesReferencia }}\n                                </mat-error>\n                                </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                        <td>\n                            <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Nr Nota Fiscal</mat-label>\n                                <input matInput placeholder=\"Nr fiscal\" formControlName=\"notaFiscal\">\n                                <mat-error *ngIf=\"formErrors.notaFiscal\">\n                                  {{ formErrors.notaFiscal }}\n                                </mat-error>\n                              </mat-form-field>      \n                        </td>\n                        <td>\n                            <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <input matInput [matDatepicker]=\"picker\" placeholder=\"Emissão\"  formControlName=\"emissao\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>                        \n                              <mat-error *ngIf=\"formErrors.emissao \">\n                                {{ formErrors.emissao }}\n                              </mat-error>\n                              </mat-form-field>   \n                        </td>\n                        <td>\n                            <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Vencimento\"  formControlName=\"vencimento\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>                              \n                              <mat-error *ngIf=\"formErrors.vencimento \">\n                                {{ formErrors.vencimento }}\n                              </mat-error>\n                              </mat-form-field>                          \n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"4\">\n                            <mat-form-field style=\"width: 100% ; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Valor</mat-label>\n                                <input currencyMask matInput formControlName=\"valor\">\n                                <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n                                <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                <!-- <mat-hint>Hint</mat-hint> -->\n                                <mat-error *ngIf=\"formErrors.valor\">\n                                  {{ formErrors.valor }}\n                                </mat-error>\n                              </mat-form-field>\n                        </td>                        \n                      </tr>\n                      <td colspan=\"3\">\n                          <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                              <mat-label>Descrição</mat-label>\n                              <textarea  matInput placeholder=\"Descrição\" formControlName=\"descricaoPagamento\"></textarea>\n                              <mat-error *ngIf=\"formErrors.descricaoPagamento\">\n                                {{ formErrors.descricaoPagamento }}\n                              </mat-error>\n                            </mat-form-field> \n                      </td>\n\n                      <tr>\n                          <td colspan=\"3\">\n                              <input #fileInput hidden=\"true\" type=\"file\" (change)=\"getFiles($event)\" accept=\"application/pdf\" />\n                              <button type=\"button\"  (click)=\"fileInput.click()\" mat-flat-button color=\"primary\" >Selecione um arquivo...</button>\n                              <span (click)=\"carregarAnexo()\" style=\"margin-left: 1%; cursor: pointer;\">{{fileName}}\n                                  </span><i id=\"clearFitler\" (click)=\"limparFiltro()\"  *ngIf=\"isHidden;\" alt=\"limpar filtro\" class=\"material-icons\"> close\n                                    </i>\n                          </td>                          \n                      </tr>\n    \n                      <tr>\n                          <td>\n                              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n                              <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contasAReceberFrm.invalid\">{{data.modalBtnTitle}}</button>\n                          </td>\n                      </tr>\n                     \n                    </table>                                           \n            </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ContasAreceberFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAreceberFormComponent", function() { return ContasAreceberFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/contas-areceber.service */ "./src/app/services/contas-areceber.service.ts");
/* harmony import */ var src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fornecedor.service */ "./src/app/services/fornecedor.service.ts");
/* harmony import */ var src_app_services_operacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/operacao.service */ "./src/app/services/operacao.service.ts");
/* harmony import */ var src_app_services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tipo-doc.service */ "./src/app/services/tipo-doc.service.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_models_contasAreceber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/contasAreceber */ "./src/app/models/contasAreceber.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var ContasAreceberFormComponent = /** @class */ (function () {
    function ContasAreceberFormComponent(data, fb, _contasAreceberService, _contaFinanceiraService, _fornecedorService, _operacaoService, _tipoDocService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contasAreceberService = _contasAreceberService;
        this._contaFinanceiraService = _contaFinanceiraService;
        this._fornecedorService = _fornecedorService;
        this._operacaoService = _operacaoService;
        this._tipoDocService = _tipoDocService;
        this.dialogRef = dialogRef;
        // consulta fornecedores
        this.fornecedoresFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.fornecedorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredFornecedor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // consulta contas financeiras
        this.contaFinanceiraFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.contaFinanceiraCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredContaFinanceira = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.contaApagarTeste = new src_app_models_contasAreceber__WEBPACK_IMPORTED_MODULE_12__["ContasAReceber"];
        this.formErrors = {
            'tipoDoc': '',
            'fornecedorId': '',
            'contaId': '',
            'operacao': '',
            'valor': ''
        };
        this.validationMessages = {
            'tipoDoc': {
                'required': 'Tipo documento não informado.'
            },
            'fornecedorId': {
                'required': 'Cliente não informado.'
            },
            'contaId': {
                'required': 'Conta financeira não informada'
            },
            'operacao': {
                'required': 'Operação não informada.'
            },
            'valor': {
                'required': 'Valor não informado.'
            }
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ContasAreceberFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contasAReceberFrm = this.fb.group({
            id: [''],
            select: [''],
            tipoDoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fornecedorId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contaId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            titulo: [''],
            notaFiscal: [''],
            emissao: [''],
            vencimento: [''],
            data: [''],
            mesReferencia: [''],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: [''],
            operacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            descricaoPagamento: [''],
            tipoDocDescricao: [''],
            nomeFornecedor: [''],
            descricaoConta: [''],
            descricaoStatus: [''],
            ativo: [''],
            usuarioCreateId: [''],
            ultimoUsuarioAtualizacaoId: [''],
            dataDaUltimaAtualizacao: [''],
            objetoId: [''],
            nomeArquivo: [''],
            arquivoBase64: ['']
        });
        this.data.fornecedor.nomeArquivo != null ? this.isHidden = true : this.isHidden = false;
        this.fileName = this.data.fornecedor.nomeArquivo;
        this.arquivo = this.data.fornecedor.arquivoBase64;
        this.contasAReceberFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].create) {
            this.contasAReceberFrm.reset();
        }
        else {
            this.contasAReceberFrm.setValue(this.data.fornecedor);
        }
        this.SetControlsState(this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].delete ? false : true);
        this.loadContaFinanceira();
        this.loadFornecedores();
        this.loadOperacoes();
        this.loadTipoDoc();
        this.fornecedoresFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterFornecedores();
        });
        this.contaFinanceiraFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterContasFinanceiras();
        });
    };
    ContasAreceberFormComponent.prototype.filterFornecedores = function () {
        if (!this.listFornecedor) {
            return;
        }
        // get the search keyword
        var search = this.fornecedoresFilterCtrl.value;
        if (!search) {
            this.filteredFornecedor.next(this.listFornecedor.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredFornecedor.next(this.listFornecedor.filter(function (c) { return c.nome.toLowerCase().indexOf(search) > -1 || c.cnpj.indexOf(search) > -1; }));
    };
    ContasAreceberFormComponent.prototype.filterContasFinanceiras = function () {
        if (!this.listContaFinanceira) {
            return;
        }
        // get the search keyword
        var search = this.contaFinanceiraFilterCtrl.value;
        if (!search) {
            this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredContaFinanceira.next(this.listContaFinanceira.filter(function (c) { return c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1; }));
    };
    ContasAreceberFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contasAReceberFrm.enable() : this.contasAReceberFrm.disable();
    };
    // setValorDescricaoNome():void{
    //    const c = this.selectedTipoFornecedor;
    // }
    ContasAreceberFormComponent.prototype.loadFornecedores = function () {
        var _this = this;
        this._fornecedorService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', true)
            .subscribe(function (fornecedor) {
            _this.listFornecedor = fornecedor;
            _this.fornecedorCtrl.setValue(_this.listFornecedor);
            _this.filteredFornecedor.next(_this.listFornecedor.slice());
        });
    };
    ContasAreceberFormComponent.prototype.loadContaFinanceira = function () {
        var _this = this;
        this._contaFinanceiraService.getAllConta(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contafinanceira) {
            _this.listContaFinanceira = contafinanceira;
            _this.contaFinanceiraCtrl.setValue(_this.listContaFinanceira);
            _this.filteredContaFinanceira.next(_this.listContaFinanceira.slice());
        });
    };
    ContasAreceberFormComponent.prototype.loadOperacoes = function () {
        var _this = this;
        this._operacaoService.getAllCredito(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/operacao/v1/operacaocredito')
            .subscribe(function (contafinanceira) {
            _this.listOperacoes = contafinanceira;
        });
    };
    ContasAreceberFormComponent.prototype.loadTipoDoc = function () {
        var _this = this;
        this._tipoDocService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/tipodoc/v1/tipodoc')
            .subscribe(function (tipoDoc) {
            _this.listTipoDoc = tipoDoc;
        });
    };
    ContasAreceberFormComponent.prototype.onValueChanged = function (data) {
        if (!this.contasAReceberFrm) {
            return;
        }
        var form = this.contasAReceberFrm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContasAreceberFormComponent.prototype.getFiles = function (event) {
        this.file = event.target.files;
        if (this.file[0] == undefined)
            return;
        this.fileName = this.file[0].name;
        this.isHidden = true;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.file[0]);
    };
    ContasAreceberFormComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.arquivo = window.btoa(binaryString); // Converting binary string data.
        this.isHidden = true;
    };
    ContasAreceberFormComponent.prototype.carregarAnexo = function () {
        var b64toBlob = function (b64Data, contentType, sliceSize) {
            if (contentType === void 0) { contentType = ''; }
            if (sliceSize === void 0) { sliceSize = 512; }
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
        var contentType = 'application/pdf';
        var b64Data = this.arquivo;
        var blob = b64toBlob(b64Data, contentType);
        var blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl);
    };
    ContasAreceberFormComponent.prototype.limparFiltro = function () {
        // this.fim = null;
        // this.inicio = null;
        // this.status = null;
        this.isHidden = false;
        this.fileName = null;
        this.file = null;
        this.arquivo = null;
    };
    ContasAreceberFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.status == 'INVALID')
            return;
        var contasAReceberData = this.mapDateData(this.contasAReceberFrm.value);
        switch (this.data.dbops) {
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].create:
                this._contasAreceberService.add(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].update:
                this._contasAreceberService.update(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData.id, contasAReceberData, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].delete:
                this._contasAreceberService.delete(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_11__["Global"].BASE_USER_ENDPOINT + 'api/contasAreceber/v1/contasAreceber', contasAReceberData.id, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContasAreceberFormComponent.prototype.mapDateData = function (contasAReceber) {
        if (this.data.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_9__["DBOperation"].create) {
            contasAReceber.ativo = true;
            contasAReceber.usuarioCreateId = this.currentUser.user.id;
        }
        else {
            contasAReceber.ultimoUsuarioAtualizacaoId = this.currentUser.user.id;
        }
        contasAReceber.emissao = new Date(contasAReceber.emissao).toISOString();
        contasAReceber.vencimento = new Date(contasAReceber.vencimento).toISOString();
        contasAReceber.data = new Date(contasAReceber.data).toISOString();
        contasAReceber.mesReferencia = new Date(contasAReceber.mesReferencia).toISOString();
        // contasApagar.tipoDoc = this.selectedTipoTipoDoc.id;
        contasAReceber.tipoDocDescricao = contasAReceber.tipoDoc != null ? this.listTipoDoc.filter(function (x) { return x.id === contasAReceber.tipoDoc; })[0].descricao : null;
        // contasApagar.contaId = this.selectedTipoContaFinanceira.id;
        contasAReceber.descricaoConta = contasAReceber.contaId != null ? this.listContaFinanceira.filter(function (x) { return x.id === contasAReceber.contaId; })[0].descricao : null;
        // contasApagar.fornecedorId = this.selectedTipoFornecedor.id;
        contasAReceber.nomeFornecedor = contasAReceber.fornecedorId != null ? this.listFornecedor.filter(function (x) { return x.id === contasAReceber.fornecedorId; })[0].nome : null;
        contasAReceber.arquivoBase64 = this.arquivo;
        contasAReceber.nomeArquivo = this.fileName;
        return contasAReceber;
    };
    ContasAreceberFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contas-areceber-form',
            template: __webpack_require__(/*! ./contas-areceber-form.component.html */ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.html"),
            styles: [__webpack_require__(/*! ./contas-areceber-form.component.css */ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_4__["ContasAreceberService"],
            src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_5__["ContaService"],
            src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_6__["FornecedorService"],
            src_app_services_operacao_service__WEBPACK_IMPORTED_MODULE_7__["OperacaoService"],
            src_app_services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_8__["TipoDocService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ContasAreceberFormComponent);
    return ContasAreceberFormComponent;
}());



/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clearFitler{\r\n    cursor: pointer;\r\n }\r\n   mat-card button{\r\n     float: right;\r\n     margin-top: -17px;\r\n   }\r\n   h1{\r\n       text-align: center;\r\n   }\r\n   mat-form-field{\r\n       float: left;\r\n   }\r\n   button\r\n   {\r\n       /* float: right; */\r\n       margin-right: 1%;\r\n   }\r\n   mat-form-field {\r\n     margin-right: 12px;\r\n   }\r\n   p{\r\n       float: left;\r\n       position: absolute;\r\n   }\r\n "

/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contas a receber</h1>\n    <table style=\"margin-bottom: 4%; margin-left: auto; margin-right: auto; overflow: auto; border: 1px solid #555\">\n      <tr tr class=\"table-info\">\n        <td>\n            <mat-form-field>\n                <mat-label>Mostrar</mat-label>\n                <mat-select [(value)]=\"status\">\n                  <mat-option>Selecione...</mat-option>\n                  <mat-option *ngFor=\"let status  of listStatus\" [value]=\"status.id\">\n                    {{ status.descricao }}\n                  </mat-option>                  \n                </mat-select>\n              </mat-form-field>\n        </td>\n\n       \n            <td>\n                <mat-form-field color=\"accent\">\n                    <mat-label>Data início</mat-label>\n                    <input matInput [matDatepicker]=\"picker1\" [(value)]=\"inicio\" (dateChange)=\"dataInicio('input',$event,1)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                  </mat-form-field>\n            </td>\n        \n            <td>\n                <mat-form-field color=\"accent\">\n                    <mat-label>Data fim</mat-label>\n                    <input matInput [matDatepicker]=\"picker2\" [(value)]=\"fim\" (dateChange)=\"dataInicio('input',$event,2)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                  </mat-form-field>     \n            </td>  \n       \n            <td>\n                <button mat-raised-button (click)=\"Pesquisar()\">Pesquisar</button>\n            </td> \n      \n      </tr>\n      <tr tr class=\"table-info\">\n        <td>\n            <p style=\"font-weight: bold\">Período:{{inicio | date: 'dd/MM/yyyy'}} a {{fim | date: 'dd/MM/yyyy'}}<span><i id=\"clearFitler\" (click)=\"limparFiltro()\"  *ngIf=\"isHidden;\" alt=\"limpar filtro\" class=\"material-icons\">\n              close\n              </i></span></p> \n        </td>\n      </tr>\n    </table>       \n<mat-card> \n  <button title=\"Adicionar\" style=\"float: left\" mat-raised-button\tcolor=\"accent\" (click)=\"addContasAreceber()\">Adicionar</button>\n  <button title=\"Cancelar pagamento\" mat-stroked-button color=\"warn\"\t (click)=\"openDialogCancelar()\">Cancelar Pagamento</button>\n</mat-card>\n \n<mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Id Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container> -->\n\n  <ng-container matColumnDef=\"select\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n      <!-- <mat-footer-cell *matFooterCellDef> </mat-footer-cell> -->\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>   \n  </ng-container>\n\n  <!-- Razao social Column -->\n  <ng-container matColumnDef=\"conta\">\n      <mat-header-cell *matHeaderCellDef> Conta </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.descricaoConta}} </mat-cell>\n    </ng-container>\n\n    <!-- Razao social Column -->\n    <ng-container matColumnDef=\"nomeFornecedor\">\n      <mat-header-cell *matHeaderCellDef> Cliente </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.nomeFornecedor}} </mat-cell>\n    </ng-container>\n\n    <!-- Razao social Column -->\n    <ng-container matColumnDef=\"titulo\">\n        <mat-header-cell *matHeaderCellDef> Obs </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.titulo}} </mat-cell>\n      </ng-container>\n\n     <!-- cnpj  Column -->\n     <ng-container matColumnDef=\"tipoDocDescricao\">\n      <mat-header-cell *matHeaderCellDef> Tipo Cobrança </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.tipoDocDescricao}}</mat-cell>\n    </ng-container>  \n    \n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"data\">\n        <mat-header-cell *matHeaderCellDef> Data </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.data | date: 'dd/MM/yyyy' }} </mat-cell>\n      </ng-container>\n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"valor\">\n        <mat-header-cell *matHeaderCellDef> Valor </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.valor | currency:'R$'}} </mat-cell>\n      </ng-container>\n\n      <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"descricaoStatus\">\n        <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.descricaoStatus}} </mat-cell>\n      </ng-container>  \n\n      <ng-container matColumnDef=\"action\">\n          <mat-header-cell class=\"center\" *matHeaderCellDef> Operação </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-button title=\"Editar\" mat-raised-button color=\"primary\" [disabled]=\"element.status != 2\" (click)=\"editContasAReceber(element.id)\">Editar</button>&nbsp;\n            <button mat-button title=\"Remover\" mat-raised-button color=\"warn\" [disabled]=\"element.status != 2\" (click)=\"deleteContasAReceber(element.id)\">Remover</button>\n          </mat-cell>\n        </ng-container>\n\n\n    <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n  <mat-card> \n      <button title=\"Cancelar pagamento\" mat-raised-button\tcolor=\"primary\" (click)=\"addFornecedor()\">Imprimir</button>\n  </mat-card>"

/***/ }),

/***/ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ContasAreceberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAreceberListComponent", function() { return ContasAreceberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_models_contasAreceber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/contasAreceber */ "./src/app/models/contasAreceber.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _contas_areceber_form_contas_areceber_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contas-areceber-form/contas-areceber-form.component */ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.ts");
/* harmony import */ var src_app_models_contasApagarSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/contasApagarSearch */ "./src/app/models/contasApagarSearch.ts");
/* harmony import */ var src_app_services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/contas-areceber.service */ "./src/app/services/contas-areceber.service.ts");
/* harmony import */ var _Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Confirmacao/confirmacao */ "./src/app/Forms/Confirmacao/confirmacao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContasAreceberListComponent = /** @class */ (function () {
    function ContasAreceberListComponent(dialog, snackBar, _contaAReceberService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._contaAReceberService = _contaAReceberService;
        this.panelOpenState = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['select', 'conta', 'nomeFornecedor', 'titulo', 'tipoDocDescricao', 'data', 'valor', 'descricaoStatus', 'action'];
        // select grid
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ContasAreceberListComponent.prototype.ngOnInit = function () {
        this.loginState = false;
        this.loadContasAReceber();
        this.dataSource.paginator = this.paginator;
        this.isHidden = false;
        this.listStatus = src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].GetTipoStatusApagarReceber();
    };
    ContasAreceberListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ContasAreceberListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ContasAreceberListComponent.prototype.checkboxLabel = function (row) {
        var _this = this;
        this.listContasAReceberId = [];
        if (row) {
            row.select = this.selection.isSelected(row) ? true : false;
            var contaAreceberSelecionadas = this.dataSource.data.filter(function (c) { return c.select; }).length > 0 ? this.dataSource.data.filter(function (c) { return c.select; }) : null;
            if (contaAreceberSelecionadas != null)
                contaAreceberSelecionadas.forEach(function (c) {
                    _this.listContasAReceberId.push(c.id);
                });
        }
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.id + 1);
    };
    ContasAreceberListComponent.prototype.cancelarPagamento = function () {
        var _this = this;
        if (this.validarStatus()) {
            if (this.listContasAReceberId == null || this.listContasAReceberId.length == 0)
                this.showMessage("nenhum registro selecionado");
            else {
                this._contaAReceberService.getCancelarPagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber/cancelarPagamento', this.listContasAReceberId, this.currentUser.user.id)
                    .subscribe(function (contasAReceber) {
                    _this.loginState = false;
                    _this.loadContasAReceber();
                    // this.preencherConsultasFornecedores();
                });
            }
        }
    };
    ContasAreceberListComponent.prototype.openDialogCancelar = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialog"], {
            width: '250px',
            data: { mensagem: 'deseja confirmar essa operação?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'true') {
                _this.cancelarPagamento();
            }
        });
    };
    ContasAreceberListComponent.prototype.validarStatus = function () {
        if (this.listContasAReceberId != null || this.listContasAReceberId.length > 0) {
            var conta = this.dataSource.data.filter(function (c) { return c.select; });
            if (conta.some(function (c) { return c.status == 1 || c.status == 3; })) {
                this.showMessage("Operação inválida, um ou mais registros selecionados estão com o status cancelado ou conciliado.");
                return false;
            }
            else
                return true;
        }
    };
    ContasAreceberListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contas_areceber_form_contas_areceber_form_component__WEBPACK_IMPORTED_MODULE_6__["ContasAreceberFormComponent"], {
            width: '800px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, fornecedor: this.contaAreceber }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loginState = true;
                _this.loadContasAReceber();
                switch (_this.dbops) {
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create:
                        _this.showMessage('Operação realizada com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update:
                        _this.showMessage('Operação com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete:
                        _this.showMessage('Operação realizada com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    ContasAreceberListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContasAreceberListComponent.prototype.loadContasAReceber = function () {
        var _this = this;
        this._contaAReceberService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber')
            .subscribe(function (contasAReceber) {
            _this.loginState = false;
            _this.dataSource.data = contasAReceber;
            // this.preencherConsultasFornecedores();
        });
    };
    ContasAreceberListComponent.prototype.addContasAreceber = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create;
        this.modalTitle = 'Adicionar contas a receber';
        this.modalBtnTitle = 'Adicionar';
        this.contaAreceber = new src_app_models_contasAreceber__WEBPACK_IMPORTED_MODULE_2__["ContasAReceber"]();
        this.contaAreceber.valor = 0, 0;
        this.openDialog();
    };
    ContasAreceberListComponent.prototype.editContasAReceber = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update;
        this.modalTitle = 'Editar contas a receber';
        this.modalBtnTitle = 'Editar';
        this.contaAreceber = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContasAreceberListComponent.prototype.deleteContasAReceber = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar esse conta a receber?';
        this.modalBtnTitle = 'Remover';
        this.contaAreceber = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContasAreceberListComponent.prototype.dataInicio = function (type, event, date) {
        if (date == 1)
            this.inicio = new Date(event.value).toISOString();
        else
            this.fim = new Date(event.value).toISOString();
        this.isHidden = true;
    };
    ContasAreceberListComponent.prototype.Pesquisar = function () {
        var _this = this;
        var search = new src_app_models_contasApagarSearch__WEBPACK_IMPORTED_MODULE_7__["ContasApagarSearch"]();
        search.dataFim = this.fim != null ? new Date(this.fim).toISOString() : null;
        search.dataInicio = this.inicio != null ? new Date(this.inicio).toISOString() : null;
        search.statusId = this.status;
        this._contaAReceberService.getAdvanced(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAReceber/v1/contasAReceber/Search', search)
            .subscribe(function (contasAReceber) {
            _this.loginState = false;
            _this.dataSource.data = contasAReceber;
            // this.preencherConsultasFornecedores();
        });
    };
    ContasAreceberListComponent.prototype.limparFiltro = function () {
        this.fim = null;
        this.inicio = null;
        this.status = null;
        this.isHidden = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ContasAreceberListComponent.prototype, "paginator", void 0);
    ContasAreceberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contas-areceber-list',
            template: __webpack_require__(/*! ./contas-areceber-list.component.html */ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.html"),
            styles: [__webpack_require__(/*! ./contas-areceber-list.component.css */ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], src_app_services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_8__["ContasAreceberService"]])
    ], ContasAreceberListComponent);
    return ContasAreceberListComponent;
}());



/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n    width: 100%;\r\n    height: 10%;\r\n    margin: 12px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: 1px solid #555;\r\n  }\r\n\r\n  .docs-example-viewer-wrapper{\r\n    border:1px solid rgba(0, 0, 0, .03);\r\n    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);\r\n    margin: 4px;\r\n  }\r\n\r\n  div {\r\n    display: block;\r\n    padding: 30px;\r\n}\r\n\r\n  #clearFitler{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content style=\"overflow: auto;\">        \n    <form  (ngSubmit)=\"onSubmit(contasAPagarFrm)\"  [formGroup]=\"contasAPagarFrm\">\n       <h2 style=\"text-align: center\">{{data.modalTitle}}</h2>\n    <!-- <mat-drawer-container class=\"example-container\">  -->\n                      <table style=\"margin-left: auto; margin-right: auto;\" class=\"docs-example-viewer-wrapper\">\n                        <tr>\n                          <td colspan=\"3\">\n\n                              <mat-form-field style=\"width:100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-select placeholder=\"Tipo documento\" formControlName=\"tipoDoc\" >\n                                    <mat-option>-- None --</mat-option>\n                                    <mat-option *ngFor=\"let tipoDoc  of listTipoDoc\" [value]=\"tipoDoc.id\">\n                                      {{ tipoDoc.descricao }}\n                                    </mat-option>\n                                  </mat-select>\n                                  <mat-error *ngIf=\"formErrors.tipoDoc \">\n                                    {{ formErrors.tipoDoc }}\n                                  </mat-error>\n                                </mat-form-field>   \n                          </td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\">\n                              <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-label>Conta financeira</mat-label>\n                                  <mat-select placeholder=\"Conta financeira\" style=\"width: 100%\" formControlName=\"contaId\"   #singleSelect>\n                                      <mat-option>\n                                          <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                                      </mat-option>                 \n                                      <mat-option>-- None --</mat-option>\n                                    <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira.id\">\n                                      {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                                    </mat-option>\n                                  </mat-select>\n                                </mat-form-field>    \n                          </td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\">\n                              <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-label>Fornecedor</mat-label>  \n                                <mat-select style=\"width: 100%\" placeholder=\"Fornecedor\" formControlName=\"fornecedorId\"  #singleSelect>\n                                      <mat-option>\n                                          <ngx-mat-select-search [formControl]=\"fornecedoresFilterCtrl\"></ngx-mat-select-search>\n                                      </mat-option>                 \n                                      <mat-option>-- None --</mat-option>\n                                    <mat-option *ngFor=\"let fornecedor of filteredFornecedor | async\" [value]=\"fornecedor.id\">\n                                      {{fornecedor.nome}}\n                                    </mat-option>\n                                  </mat-select>\n                                </mat-form-field>   \n                          </td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"2\" >\n                              <mat-form-field style=\"width:100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-select placeholder=\"Operação\" formControlName=\"operacao\">\n                                    <mat-option>-- None --</mat-option>\n                                    <mat-option *ngFor=\"let operacoes  of listOperacoes\" [value]=\"operacoes.id\">\n                                      {{ operacoes.descricao }} - [{{operacoes.natureza}}]\n                                    </mat-option>\n                                  </mat-select>\n                                  <mat-error *ngIf=\"formErrors.operacao \">\n                                    {{ formErrors.operacao }}\n                                  </mat-error>\n                                </mat-form-field>                             \n                          </td>\n                          <td>\n                              <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Data\"  formControlName=\"data\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker2></mat-datepicker>                        \n                                <mat-error *ngIf=\"formErrors.data \">\n                                  {{ formErrors.data }}\n                                </mat-error>\n                                </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"2\">\n                              <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\"appearance=\"outline\">\n                                  <mat-label>Título</mat-label>\n                                  <input matInput placeholder=\"Título\" formControlName=\"titulo\">\n                                  <mat-error *ngIf=\"formErrors.titulo\">\n                                    {{ formErrors.titulo }}\n                                  </mat-error>\n                                </mat-form-field>\n                          </td>\n                            <td>\n                                <mat-form-field style=\"margin-bottom: -1.25em;\"  appearance=\"outline\">\n                                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Agendada\"  formControlName=\"dataAgendada\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker3></mat-datepicker>                        \n                                  <mat-error *ngIf=\"formErrors.dataAgendada \">\n                                    {{ formErrors.dataAgendada }}\n                                  </mat-error>\n                                  </mat-form-field>\n                            </td>\n                          </tr>\n                          <tr>\n                          <td>\n                              <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-label>Nr Nota Fiscal</mat-label>\n                                  <input matInput placeholder=\"Identificador fiscal\" formControlName=\"notaFiscal\">\n                                  <mat-error *ngIf=\"formErrors.notaFiscal\">\n                                    {{ formErrors.notaFiscal }}\n                                  </mat-error>\n                                </mat-form-field>      \n                          </td>\n                          <td>\n                              <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Emissão\"  formControlName=\"emissao\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker></mat-datepicker>                        \n                                <mat-error *ngIf=\"formErrors.emissao \">\n                                  {{ formErrors.emissao }}\n                                </mat-error>\n                                </mat-form-field>   \n                          </td>\n                          <td>\n                              <mat-form-field style=\"margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Vencimento\"  formControlName=\"vencimento\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker1></mat-datepicker>                              \n                                <mat-error *ngIf=\"formErrors.vencimento \">\n                                  {{ formErrors.vencimento }}\n                                </mat-error>\n                                </mat-form-field>                          \n                          </td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"2\">\n                              <mat-form-field style=\"width: 100% ; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-label>Valor</mat-label>\n                                  <input currencyMask matInput formControlName=\"valor\">\n                                  <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n                                  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                  <!-- <mat-hint>Hint</mat-hint> -->\n                                  <mat-error *ngIf=\"formErrors.valor\">\n                                    {{ formErrors.valor }}\n                                  </mat-error>\n                                </mat-form-field>\n                          </td>\n                          <td>\n                              <mat-form-field style=\"width: 100% ; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                  <mat-label>Desconto</mat-label>\n                                  <input currencyMask matInput formControlName=\"desconto\">\n                                  <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n                                  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                  <!-- <mat-hint>Hint</mat-hint> -->\n                                  <mat-error *ngIf=\"formErrors.desconto\">\n                                    {{ formErrors.desconto }}\n                                  </mat-error>\n                                </mat-form-field>\n                          </td>\n                        </tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Descrição</mat-label>\n                                <textarea  matInput placeholder=\"Descrição\" formControlName=\"descricaoPagamento\"></textarea>\n                                <mat-error *ngIf=\"formErrors.descricaoPagamento\">\n                                  {{ formErrors.descricaoPagamento }}\n                                </mat-error>\n                              </mat-form-field> \n                        </td>\n\n                        <tr>\n                          <td colspan=\"3\">\n                              <input #fileInput hidden=\"true\" type=\"file\" (change)=\"getFiles($event)\" accept=\"application/pdf\" />\n                              <button type=\"button\"  (click)=\"fileInput.click()\" mat-flat-button color=\"primary\" >Selecione um arquivo...</button>\n                              <span (click)=\"carregarAnexo()\" style=\"margin-left: 1%; cursor: pointer;\">{{fileName}}\n                                  </span><i id=\"clearFitler\" (click)=\"limparFiltro()\"  *ngIf=\"isHidden;\" alt=\"limpar filtro\" class=\"material-icons\"> close\n                                    </i>\n                          </td>                          \n                      </tr>\n                      \n                        <tr>\n                            <td>\n                                <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n                                <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contasAPagarFrm.invalid\">{{data.modalBtnTitle}}</button>\n                            </td>\n                        </tr>\n                       \n                      </table>                                           \n              </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContasApagarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasApagarFormComponent", function() { return ContasApagarFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/contas-apagar.service */ "./src/app/services/contas-apagar.service.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fornecedor.service */ "./src/app/services/fornecedor.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var src_app_services_operacao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/operacao.service */ "./src/app/services/operacao.service.ts");
/* harmony import */ var src_app_services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/tipo-doc.service */ "./src/app/services/tipo-doc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ContasApagarFormComponent = /** @class */ (function () {
    function ContasApagarFormComponent(data, fb, _contasAPagarService, _contaFinanceiraService, _fornecedorService, _operacaoService, _tipoDocService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contasAPagarService = _contasAPagarService;
        this._contaFinanceiraService = _contaFinanceiraService;
        this._fornecedorService = _fornecedorService;
        this._operacaoService = _operacaoService;
        this._tipoDocService = _tipoDocService;
        this.dialogRef = dialogRef;
        // consulta fornecedores
        this.fornecedoresFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.fornecedorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredFornecedor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // consulta contas financeiras
        this.contaFinanceiraFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.contaFinanceiraCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredContaFinanceira = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.formErrors = {
            'tipoDoc': '',
            'fornecedorId': '',
            'contaId': '',
            'operacao': '',
            'valor': ''
        };
        this.validationMessages = {
            'tipoDoc': {
                'required': 'Tipo documento não informado.'
            },
            'fornecedorId': {
                'required': 'Fornecedor não informado.'
            },
            'contaId': {
                'required': 'Conta financeira não informada'
            },
            'operacao': {
                'required': 'Operação não informada.'
            },
            'valor': {
                'required': 'Valor não informado.'
            }
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ContasApagarFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contasAPagarFrm = this.fb.group({
            id: [''],
            select: [''],
            tipoDoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fornecedorId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contaId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            titulo: [''],
            notaFiscal: [''],
            emissao: [''],
            vencimento: [''],
            data: [''],
            dataAgendada: [''],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desconto: [''],
            status: [''],
            operacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            descricaoPagamento: [''],
            tipoDocDescricao: [''],
            nomeFornecedor: [''],
            descricaoConta: [''],
            descricaoStatus: [''],
            ativo: [''],
            usuarioCreateId: [''],
            ultimoUsuarioAtualizacaoId: [''],
            dataDaUltimaAtualizacao: [''],
            objetoId: [''],
            nomeArquivo: [''],
            arquivoBase64: ['']
        });
        this.data.fornecedor.nomeArquivo != null ? this.isHidden = true : this.isHidden = false;
        this.fileName = this.data.fornecedor.nomeArquivo;
        this.arquivo = this.data.fornecedor.arquivoBase64;
        this.contasAPagarFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.contasAPagarFrm.reset();
        }
        else {
            this.contasAPagarFrm.setValue(this.data.fornecedor);
        }
        this.SetControlsState(this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
        this.loadContaFinanceira();
        this.loadFornecedores();
        this.loadOperacoes();
        this.loadTipoDoc();
        this.fornecedoresFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterFornecedores();
        });
        this.contaFinanceiraFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterContasFinanceiras();
        });
    };
    ContasApagarFormComponent.prototype.filterFornecedores = function () {
        if (!this.listFornecedor) {
            return;
        }
        // get the search keyword
        var search = this.fornecedoresFilterCtrl.value;
        if (!search) {
            this.filteredFornecedor.next(this.listFornecedor.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredFornecedor.next(this.listFornecedor.filter(function (c) { return c.nome.toLowerCase().indexOf(search) > -1 || c.cnpj.indexOf(search) > -1; }));
    };
    ContasApagarFormComponent.prototype.filterContasFinanceiras = function () {
        if (!this.listContaFinanceira) {
            return;
        }
        // get the search keyword
        var search = this.contaFinanceiraFilterCtrl.value;
        if (!search) {
            this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredContaFinanceira.next(this.listContaFinanceira.filter(function (c) { return c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1; }));
    };
    ContasApagarFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contasAPagarFrm.enable() : this.contasAPagarFrm.disable();
    };
    // setValorDescricaoNome():void{
    //    const c = this.selectedTipoFornecedor;
    // }
    ContasApagarFormComponent.prototype.loadFornecedores = function () {
        var _this = this;
        this._fornecedorService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', false)
            .subscribe(function (fornecedor) {
            _this.listFornecedor = fornecedor;
            _this.fornecedorCtrl.setValue(_this.listFornecedor);
            _this.filteredFornecedor.next(_this.listFornecedor.slice());
        });
    };
    ContasApagarFormComponent.prototype.loadContaFinanceira = function () {
        var _this = this;
        this._contaFinanceiraService.getAllConta(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contafinanceira) {
            _this.listContaFinanceira = contafinanceira;
            _this.contaFinanceiraCtrl.setValue(_this.listContaFinanceira);
            _this.filteredContaFinanceira.next(_this.listContaFinanceira.slice());
        });
    };
    ContasApagarFormComponent.prototype.loadOperacoes = function () {
        var _this = this;
        this._operacaoService.getAllDebito(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/operacao/v1/operacaodebito')
            .subscribe(function (contafinanceira) {
            _this.listOperacoes = contafinanceira;
        });
    };
    ContasApagarFormComponent.prototype.loadTipoDoc = function () {
        var _this = this;
        this._tipoDocService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/tipodoc/v1/tipodoc')
            .subscribe(function (tipoDoc) {
            _this.listTipoDoc = tipoDoc;
        });
    };
    ContasApagarFormComponent.prototype.onValueChanged = function (data) {
        if (!this.contasAPagarFrm) {
            return;
        }
        var form = this.contasAPagarFrm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContasApagarFormComponent.prototype.getFiles = function (event) {
        this.file = event.target.files;
        if (this.file[0] == undefined)
            return;
        this.fileName = this.file[0].name;
        this.isHidden = true;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.file[0]);
    };
    ContasApagarFormComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.arquivo = window.btoa(binaryString); // Converting binary string data.
        this.isHidden = true;
    };
    ContasApagarFormComponent.prototype.carregarAnexo = function () {
        var b64toBlob = function (b64Data, contentType, sliceSize) {
            if (contentType === void 0) { contentType = ''; }
            if (sliceSize === void 0) { sliceSize = 512; }
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
        var contentType = 'application/pdf';
        var b64Data = this.arquivo;
        var blob = b64toBlob(b64Data, contentType);
        var blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl);
    };
    ContasApagarFormComponent.prototype.limparFiltro = function () {
        // this.fim = null;
        // this.inicio = null;
        // this.status = null;
        this.isHidden = false;
        this.fileName = null;
        this.file = null;
        this.arquivo = null;
    };
    ContasApagarFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.status == 'INVALID')
            return;
        var contasAPagarData = this.mapDateData(this.contasAPagarFrm.value);
        switch (this.data.dbops) {
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._contasAPagarService.add(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._contasAPagarService.update(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData.id, contasAPagarData, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._contasAPagarService.delete(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/contasApagar/v1/contasApagar', contasAPagarData.id, this.currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContasApagarFormComponent.prototype.mapDateData = function (contasApagar) {
        if (this.data.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            contasApagar.ativo = true;
            contasApagar.usuarioCreateId = this.currentUser.user.id;
        }
        else {
            contasApagar.ultimoUsuarioAtualizacaoId = this.currentUser.user.id;
        }
        contasApagar.emissao = new Date(contasApagar.emissao).toISOString();
        contasApagar.vencimento = new Date(contasApagar.vencimento).toISOString();
        contasApagar.data = new Date(contasApagar.data).toISOString();
        contasApagar.dataAgendada = new Date(contasApagar.dataAgendada).toISOString();
        // contasApagar.tipoDoc = this.selectedTipoTipoDoc.id;
        contasApagar.tipoDocDescricao = contasApagar.tipoDoc != null ? this.listTipoDoc.filter(function (x) { return x.id === contasApagar.tipoDoc; })[0].descricao : null;
        // contasApagar.contaId = this.selectedTipoContaFinanceira.id;
        contasApagar.descricaoConta = contasApagar.contaId != null ? this.listContaFinanceira.filter(function (x) { return x.id === contasApagar.contaId; })[0].descricao : null;
        // contasApagar.fornecedorId = this.selectedTipoFornecedor.id;
        contasApagar.nomeFornecedor = contasApagar.fornecedorId != null ? this.listFornecedor.filter(function (x) { return x.id === contasApagar.fornecedorId; })[0].nome : null;
        contasApagar.arquivoBase64 = this.arquivo;
        contasApagar.nomeArquivo = this.fileName;
        return contasApagar;
    };
    ContasApagarFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contas-apagar-form',
            template: __webpack_require__(/*! ./contas-apagar-form.component.html */ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.html"),
            styles: [__webpack_require__(/*! ./contas-apagar-form.component.css */ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_4__["ContasAPagarService"],
            src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_9__["ContaService"],
            src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_7__["FornecedorService"],
            src_app_services_operacao_service__WEBPACK_IMPORTED_MODULE_10__["OperacaoService"],
            src_app_services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_11__["TipoDocService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ContasApagarFormComponent);
    return ContasApagarFormComponent;
}());



/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clearFitler{\r\n   cursor: pointer;\r\n}\r\n  mat-card button{\r\n    float: right;\r\n    margin-top: -17px;\r\n  }\r\n  h1{\r\n      text-align: center;\r\n  }\r\n  mat-form-field{\r\n      float: left;\r\n  }\r\n  button\r\n  {\r\n      /* float: right; */\r\n      margin-right: 1%;\r\n  }\r\n  mat-form-field {\r\n    margin-right: 12px;\r\n  }\r\n  p{\r\n      float: left;\r\n      position: absolute;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contas a pagar</h1>\n    <table style=\"margin-bottom: 4%; margin-left: auto; margin-right: auto; overflow: auto; border: 1px solid #555\">\n      <tr tr class=\"table-info\">\n        <td>\n            <mat-form-field>\n                <mat-label>Mostrar</mat-label>\n                <mat-select [(value)]=\"status\">\n                  <mat-option>Selecione...</mat-option>\n                  <mat-option *ngFor=\"let status  of listStatus\" [value]=\"status.id\">\n                    {{ status.descricao }}\n                  </mat-option>                  \n                </mat-select>\n              </mat-form-field>\n        </td>\n\n       \n            <td>\n                <mat-form-field color=\"accent\">\n                    <mat-label>Data início</mat-label>\n                    <input matInput [matDatepicker]=\"picker1\" [(value)]=\"inicio\" (dateChange)=\"dataInicio('input',$event,1)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                  </mat-form-field>\n            </td>\n        \n            <td>\n                <mat-form-field color=\"accent\">\n                    <mat-label>Data fim</mat-label>\n                    <input matInput [matDatepicker]=\"picker2\" [(value)]=\"fim\" (dateChange)=\"dataInicio('input',$event,2)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                  </mat-form-field>     \n            </td>  \n       \n            <td>\n                <button mat-raised-button (click)=\"Pesquisar()\">Pesquisar</button>\n            </td> \n      \n      </tr>\n      <tr tr class=\"table-info\">\n        <td>\n            <p style=\"font-weight: bold\">Período:{{inicio | date: 'dd/MM/yyyy'}} a {{fim | date: 'dd/MM/yyyy'}}<span><i id=\"clearFitler\" (click)=\"limparFiltro()\"  *ngIf=\"isHidden;\" alt=\"limpar filtro\" class=\"material-icons\">\n              close\n              </i></span></p> \n        </td>\n      </tr>\n    </table>       \n<mat-card> \n  <button title=\"Adicionar\" style=\"float: left\" mat-raised-button\tcolor=\"accent\" (click)=\"addContasApagar()\">Adicionar</button>\n  <button title=\"Cancelar pagamento\" mat-stroked-button color=\"warn\" (click)=\"openDialogCancelar()\">Cancelar Pagamento</button>\n</mat-card>\n \n<mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Id Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container> -->\n\n  <ng-container matColumnDef=\"select\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n      <!-- <mat-footer-cell *matFooterCellDef> </mat-footer-cell> -->\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>   \n  </ng-container>\n\n  <!-- Razao social Column -->\n  <ng-container matColumnDef=\"conta\">\n      <mat-header-cell *matHeaderCellDef> Conta </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.descricaoConta}} </mat-cell>\n    </ng-container>\n\n    <!-- Razao social Column -->\n    <ng-container matColumnDef=\"nomeFornecedor\">\n      <mat-header-cell *matHeaderCellDef> Fornecedor </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.nomeFornecedor}} </mat-cell>\n    </ng-container>\n\n     <!-- Razao social Column -->\n     <ng-container matColumnDef=\"titulo\">\n        <mat-header-cell *matHeaderCellDef> Título </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.titulo}} </mat-cell>\n      </ng-container>\n\n     <!-- cnpj  Column -->\n     <ng-container matColumnDef=\"tipoDocDescricao\">\n      <mat-header-cell *matHeaderCellDef> Tipo Cobrança </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.tipoDocDescricao}}</mat-cell>\n    </ng-container>  \n    \n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"dataAgendada\">\n        <mat-header-cell *matHeaderCellDef> Data </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.dataAgendada | date: 'dd/MM/yyyy' }} </mat-cell>\n      </ng-container>\n\n    <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"valor\">\n        <mat-header-cell *matHeaderCellDef> Valor </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.valor | currency:'R$'}} </mat-cell>\n      </ng-container>\n\n      <!-- cnpj  Identificador Fiscal -->\n    <ng-container matColumnDef=\"descricaoStatus\">\n        <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.descricaoStatus}} </mat-cell>\n      </ng-container>  \n\n      <ng-container matColumnDef=\"action\">\n          <mat-header-cell class=\"center\" *matHeaderCellDef> Operação </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-button title=\"Editar\" mat-raised-button color=\"primary\" [disabled]=\"element.status != 2\" (click)=\"editContasAPagar(element.id)\">Editar</button>&nbsp;\n            <button mat-button title=\"Remover\" mat-raised-button color=\"warn\" [disabled]=\"element.status != 2\" (click)=\"deleteContasAPagar(element.id)\">Remover</button>\n          </mat-cell>\n        </ng-container>\n\n\n    <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n  <mat-card> \n      <button title=\"Cancelar pagamento\" mat-raised-button\tcolor=\"primary\" (click)=\"addFornecedor()\">Imprimir</button>\n  </mat-card>"

/***/ }),

/***/ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContasApagarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasApagarListComponent", function() { return ContasApagarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_models_contasApagar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/contasApagar */ "./src/app/models/contasApagar.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/contas-apagar.service */ "./src/app/services/contas-apagar.service.ts");
/* harmony import */ var _contas_apagar_form_contas_apagar_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contas-apagar-form/contas-apagar-form.component */ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var src_app_models_contasApagarSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/contasApagarSearch */ "./src/app/models/contasApagarSearch.ts");
/* harmony import */ var _Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Confirmacao/confirmacao */ "./src/app/Forms/Confirmacao/confirmacao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContasApagarListComponent = /** @class */ (function () {
    function ContasApagarListComponent(dialog, snackBar, _contaAPagarService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._contaAPagarService = _contaAPagarService;
        this.panelOpenState = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['select', 'conta', 'nomeFornecedor', 'titulo', 'tipoDocDescricao', 'dataAgendada', 'valor', 'descricaoStatus', 'action'];
        // select grid
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
    }
    ContasApagarListComponent.prototype.ngOnInit = function () {
        this.loginState = false;
        this.loadContasAPagar();
        this.dataSource.paginator = this.paginator;
        this.isHidden = false;
        this.listStatus = src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].GetTipoStatusApagarReceber();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    ContasApagarListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ContasApagarListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ContasApagarListComponent.prototype.checkboxLabel = function (row) {
        var _this = this;
        this.listContasApagarId = [];
        if (row) {
            row.select = this.selection.isSelected(row) ? true : false;
            var contaApagarSelecionadas = this.dataSource.data.filter(function (c) { return c.select; }).length > 0 ? this.dataSource.data.filter(function (c) { return c.select; }) : null;
            if (contaApagarSelecionadas != null)
                contaApagarSelecionadas.forEach(function (c) {
                    _this.listContasApagarId.push(c.id);
                });
        }
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.id + 1);
    };
    ContasApagarListComponent.prototype.cancelarPagamento = function () {
        var _this = this;
        if (this.validarStatus()) {
            if (this.listContasApagarId == null || this.listContasApagarId.length == 0)
                this.showMessage("nenhum registro selecionado");
            else {
                this._contaAPagarService.getCancelarPagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar/cancelarPagamento', this.listContasApagarId, this.currentUser.user.id)
                    .subscribe(function (contasAPagar) {
                    _this.loginState = false;
                    _this.loadContasAPagar();
                    // this.preencherConsultasFornecedores();
                });
            }
        }
    };
    ContasApagarListComponent.prototype.openDialogCancelar = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialog"], {
            width: '250px',
            data: { mensagem: 'deseja confirmar essa operação?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'true') {
                _this.cancelarPagamento();
            }
        });
    };
    ContasApagarListComponent.prototype.validarStatus = function () {
        if (this.listContasApagarId != null || this.listContasApagarId.length > 0) {
            var conta = this.dataSource.data.filter(function (c) { return c.select; });
            if (conta.some(function (c) { return c.status == 1 || c.status == 3; })) {
                this.showMessage("Operação inválida, um ou mais registros selecionados estão com o status cancelado.");
                return false;
            }
            else
                return true;
        }
    };
    ContasApagarListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contas_apagar_form_contas_apagar_form_component__WEBPACK_IMPORTED_MODULE_6__["ContasApagarFormComponent"], {
            width: '800px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, fornecedor: this.contaApagar }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loginState = true;
                _this.loadContasAPagar();
                switch (_this.dbops) {
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].create:
                        _this.showMessage('Operação realizada com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].update:
                        _this.showMessage('Operação com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].delete:
                        _this.showMessage('Operação realizada com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    ContasApagarListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContasApagarListComponent.prototype.loadContasAPagar = function () {
        var _this = this;
        this._contaAPagarService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar')
            .subscribe(function (contasAPagar) {
            _this.loginState = false;
            _this.dataSource.data = contasAPagar;
            // this.preencherConsultasFornecedores();
        });
    };
    ContasApagarListComponent.prototype.addContasApagar = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].create;
        this.modalTitle = 'Adicionar contas a pagar';
        this.modalBtnTitle = 'Adicionar';
        this.contaApagar = new src_app_models_contasApagar__WEBPACK_IMPORTED_MODULE_3__["ContasApagar"]();
        this.contaApagar.valor = 0, 0;
        this.contaApagar.desconto = 0, 0;
        this.openDialog();
    };
    ContasApagarListComponent.prototype.editContasAPagar = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].update;
        this.modalTitle = 'Editar contas a pagar';
        this.modalBtnTitle = 'Editar';
        this.contaApagar = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContasApagarListComponent.prototype.deleteContasAPagar = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar esse conta a pagar?';
        this.modalBtnTitle = 'Remover';
        this.contaApagar = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContasApagarListComponent.prototype.dataInicio = function (type, event, date) {
        if (date == 1)
            this.inicio = new Date(event.value).toISOString();
        else
            this.fim = new Date(event.value).toISOString();
        this.isHidden = true;
    };
    ContasApagarListComponent.prototype.Pesquisar = function () {
        var _this = this;
        var search = new src_app_models_contasApagarSearch__WEBPACK_IMPORTED_MODULE_8__["ContasApagarSearch"]();
        search.dataFim = this.fim != null ? new Date(this.fim).toISOString() : null;
        search.dataInicio = this.inicio != null ? new Date(this.inicio).toISOString() : null;
        search.statusId = this.status;
        this._contaAPagarService.getAdvanced(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contasAPagar/v1/contasAPagar/Search', search)
            .subscribe(function (contasAPagar) {
            _this.loginState = false;
            _this.dataSource.data = contasAPagar;
            // this.preencherConsultasFornecedores();
        });
    };
    ContasApagarListComponent.prototype.limparFiltro = function () {
        this.fim = null;
        this.inicio = null;
        this.status = null;
        this.isHidden = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContasApagarListComponent.prototype, "paginator", void 0);
    ContasApagarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contas-apagar-list',
            template: __webpack_require__(/*! ./contas-apagar-list.component.html */ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.html"),
            styles: [__webpack_require__(/*! ./contas-apagar-list.component.css */ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_5__["ContasAPagarService"]])
    ], ContasApagarListComponent);
    return ContasApagarListComponent;
}());



/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n    <form class=\"my-form\"  (ngSubmit)=\"onSubmit(fornecedoresForm)\"  [formGroup]=\"fornecedoresForm\">\n      <h2>{{data.modalTitle}}</h2>\n      <div class=\"checkbox\" style=\"margin-bottom: 3px;\">\n        <mat-checkbox  (change)=\"changeStatus($event)\" [checked] = \"pessoaFisical\">Pessoa Física</mat-checkbox>\n      </div>\n      <div>\n          <mat-form-field appearance=\"outline\">\n          <mat-label>Razão social</mat-label>\n          <input matInput placeholder=\"Razão social\" formControlName=\"nome\" id=\"nome\">\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n          <!-- <mat-hint>Hint</mat-hint> -->\n          <mat-error *ngIf=\"formErrors.nome\">\n            {{ formErrors.nome }}\n          </mat-error>\n        </mat-form-field>\n      </div>\n     \n      <div *ngIf=\"pessoaFisical\">\n          <mat-form-field appearance=\"outline\">\n          <mat-label>CPF</mat-label>\n          <input matInput placeholder=\"Cpf\" formControlName=\"cnpj\"  mask='000.000.000-00'>\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n          <!-- <mat-hint>Hint</mat-hint> -->\n          <mat-error *ngIf=\"formErrors.cnpj\">\n            {{ formErrors.cnpj }}\n          </mat-error>\n        </mat-form-field>\n        </div>\n\n        <div *ngIf=\"!pessoaFisical\">\n          <mat-form-field appearance=\"outline\">\n          <mat-label>CNPJ</mat-label>\n          <input matInput placeholder=\"Cnpj\" formControlName=\"cnpj\"  mask='00.000.000/0000-00'>\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n          <!-- <mat-hint>Hint</mat-hint> -->\n          <mat-error *ngIf=\"formErrors.cnpj\">\n            {{ formErrors.cnpj }}\n          </mat-error>\n        </mat-form-field>\n        </div>\n    \n        <div>\n            <mat-form-field appearance=\"outline\">\n            <mat-label>Telefone</mat-label>\n            <input matInput placeholder=\"Telefone\" formControlName=\"telefone\" mask ='(00) 00000-0000' >\n            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n            <!-- <mat-hint>Hint</mat-hint> -->\n            <mat-error *ngIf=\"formErrors.telefone\">\n              {{ formErrors.telefone }}\n            </mat-error>\n          </mat-form-field>\n        </div>\n   \n      <div>\n        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"fornecedoresForm.invalid\">{{data.modalBtnTitle}}</button>\n      </div>    \n      </form>\n    \n  </mat-card-content>"

/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FornecedorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorFormComponent", function() { return FornecedorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fornecedor.service */ "./src/app/services/fornecedor.service.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FornecedorFormComponent = /** @class */ (function () {
    function FornecedorFormComponent(data, fb, _fornecedorService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._fornecedorService = _fornecedorService;
        this.dialogRef = dialogRef;
        this.formErrors = {
            'nome': '',
            'cnpj': ''
        };
        this.validationMessages = {
            'nome': {
                'minlength': 'Razão social deve possuir no mínimo 2 caracteres.',
                'required': 'Informe razão social.'
            },
            'cnpj': {
                'required': 'Informe cnpj ou cpf'
            }
        };
    }
    FornecedorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disabled = false;
        this.fornecedoresForm = this.fb.group({
            id: [''],
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            cnpj: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            telefone: [''],
            objetoId: ['']
        });
        if (this.data.fornecedor.cnpj == null) {
            this.pessoaFisical = false;
        }
        else {
            this.pessoaFisical = this.data.fornecedor.cnpj.length == 11 ? true : false;
        }
        this.fornecedoresForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.fornecedoresForm.reset();
        }
        else {
            this.fornecedoresForm.setValue(this.data.fornecedor);
        }
        this.SetControlsState(this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    FornecedorFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.fornecedoresForm.enable() : this.fornecedoresForm.disable();
    };
    FornecedorFormComponent.prototype.changeStatus = function () {
        this.pessoaFisical = !this.pessoaFisical ? true : false;
    };
    FornecedorFormComponent.prototype.onValueChanged = function (data) {
        if (!this.fornecedoresForm) {
            return;
        }
        var form = this.fornecedoresForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    FornecedorFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var fornecedorData = this.mapData(this.fornecedoresForm.value);
        switch (this.data.dbops) {
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._fornecedorService.add(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._fornecedorService.update(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData.id, fornecedorData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._fornecedorService.delete(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', fornecedorData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    FornecedorFormComponent.prototype.mapData = function (fornecedor) {
        return fornecedor;
    };
    FornecedorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor-form',
            template: __webpack_require__(/*! ./fornecedor-form.component.html */ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-form.component.css */ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_3__["FornecedorService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], FornecedorFormComponent);
    return FornecedorFormComponent;
}());



/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n  .unidadelist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 100%;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  .center{\r\n      text-align: center;\r\n  } */\r\n\r\n\r\n\r\n  body {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n  }\r\n\r\n\r\n\r\n  @media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n    /*  Enable this to hide header\r\n    .mat-table .mat-header-cell {\r\n      \r\n      border: 10px solid;\r\n      clip: rect(0 0 0 0);\r\n      height: 1px;\r\n      margin: -1px;\r\n      padding: 0;\r\n      position: absolute;\r\n      width: 1px;\r\n    }\r\n    */\r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      font-weight: bold;\r\n      height:30px;\r\n      margin-bottom: 4%;\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"spinner\" *ngIf=\"loadingState; else listFornecedores\">\n      <mat-spinner></mat-spinner>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <h2 style=\"text-align: center;\">Fornecedores</h2>\n    <div class=\"unidadelist-container mat-elevation-z8\">\n        <mat-form-field style=\"width: 100%\">\n            <mat-select style=\"width: 100%\" placeholder=\"Razão social/Cnpj\"  [formControl]=\"fornecedorCtrl\" [(value)]=\"selectedTipo\"  (valueChange)=\"getFornecedores()\" #singleSelect>\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"fornecedoresFilterCtrl\"></ngx-mat-select-search>\n                </mat-option>                 \n                <mat-option>-- None --</mat-option>\n              <mat-option *ngFor=\"let fornecedor of filteredFornecedor | async\" [value]=\"fornecedor\">\n                {{fornecedor.nome}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addFornecedor()\">Adicionar</button></div>\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <!-- Id Column -->\n        <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> Id </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container> -->\n\n        <!-- Razao social Column -->\n        <ng-container matColumnDef=\"nome\">\n          <mat-header-cell *matHeaderCellDef> Razao Social </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.nome}} </mat-cell>\n        </ng-container>\n\n         <!-- cnpj  Column -->\n         <ng-container matColumnDef=\"cnpj\">\n          <mat-header-cell *matHeaderCellDef> Cnpj </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.cnpj}}</mat-cell>\n        </ng-container>\n\n        <!-- cnpj  Identificador Fiscal -->\n        <ng-container matColumnDef=\"telefone\">\n          <mat-header-cell *matHeaderCellDef> Telefone </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.telefone}} </mat-cell>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"action\">\n          <mat-header-cell class=\"center\" *matHeaderCellDef> Operação </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-button title=\"Editar\" mat-raised-button color=\"primary\" (click)=\"editFornecedor(element.id)\">Editar</button>&nbsp;\n            <button mat-button title=\"Remover\" mat-raised-button color=\"warn\" (click)=\"deleteFornecedor(element.id)\">Remover</button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n  <!-- </ng-template> -->\n\n \n"

/***/ }),

/***/ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FornecedorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorListComponent", function() { return FornecedorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_models_fornecedor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/fornecedor */ "./src/app/models/fornecedor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fornecedor-form/fornecedor-form.component */ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/fornecedor.service */ "./src/app/services/fornecedor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FornecedorListComponent = /** @class */ (function () {
    function FornecedorListComponent(dialog, snackBar, _fornecedorService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._fornecedorService = _fornecedorService;
        // consulta 
        this.fornecedoresFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.fornecedorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.filteredFornecedor = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.displayedColumns = ['nome', 'cnpj', 'telefone', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    FornecedorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingState = true;
        this.loadFornecedores();
        this.dataSource.paginator = this.paginator;
        this.fornecedoresFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterFornecedores();
        });
    };
    FornecedorListComponent.prototype.preencherConsultasFornecedores = function () {
        this.listFornecedor = this.dataSource.data;
        this.fornecedorCtrl.setValue(this.listFornecedor);
        this.filteredFornecedor.next(this.listFornecedor.slice());
    };
    FornecedorListComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    FornecedorListComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    FornecedorListComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredFornecedor
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // setting the compareWith property to a comparison function 
            // triggers initializing the selection according to the initial value of 
            // the form control (i.e. _initializeSelection())
            // this needs to be done after the filteredBanks are loaded initially 
            // and after the mat-option elements are available
            _this.singleSelect.compareWith = function (a, b) { return a && b && a.id === b.id; };
        });
    };
    FornecedorListComponent.prototype.filterFornecedores = function () {
        if (!this.listFornecedor) {
            return;
        }
        // get the search keyword
        var search = this.fornecedoresFilterCtrl.value;
        if (!search) {
            this.filteredFornecedor.next(this.listFornecedor.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredFornecedor.next(this.listFornecedor.filter(function (c) { return c.nome.toLowerCase().indexOf(search) > -1 || c.cnpj.indexOf(search) > -1; }));
    };
    FornecedorListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_4__["FornecedorFormComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, fornecedor: this.fornecedor }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadFornecedores();
                switch (_this.dbops) {
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create:
                        _this.showMessage('Fornecedor cadastrado com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update:
                        _this.showMessage('Fornecedor alterado com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete:
                        _this.showMessage('Fornecedor removido com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    FornecedorListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    // Operacoes
    FornecedorListComponent.prototype.loadFornecedores = function () {
        var _this = this;
        this._fornecedorService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', false)
            .subscribe(function (fornecedor) {
            _this.loadingState = false;
            _this.dataSource.data = fornecedor;
            _this.preencherConsultasFornecedores();
        });
    };
    FornecedorListComponent.prototype.getFornecedores = function () {
        var _this = this;
        if (this.selectedTipo == undefined)
            this.loadFornecedores();
        else {
            this._fornecedorService.getById(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/fornecedor/v1/fornecedores', this.selectedTipo.id).subscribe(function (fornecedores) {
                _this.loadingState = false;
                _this.dataSource.data = fornecedores;
            });
        }
    };
    FornecedorListComponent.prototype.addFornecedor = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create;
        this.modalTitle = 'Adicionar novo fornecedor';
        this.modalBtnTitle = 'Adicionar';
        this.fornecedor = new src_app_models_fornecedor__WEBPACK_IMPORTED_MODULE_2__["Fornecedor"]();
        this.fornecedor.nome = '';
        this.fornecedor.cnpj = '';
        this.fornecedor.telefone = '';
        this.fornecedor.objetoId = 0;
        this.openDialog();
    };
    FornecedorListComponent.prototype.editFornecedor = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update;
        this.modalTitle = 'Editar fornecedor';
        this.modalBtnTitle = 'Editar';
        this.fornecedor = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    FornecedorListComponent.prototype.deleteFornecedor = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar esse fornecedor ?';
        this.modalBtnTitle = 'Remover';
        this.fornecedor = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FornecedorListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], FornecedorListComponent.prototype, "singleSelect", void 0);
    FornecedorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor-list',
            template: __webpack_require__(/*! ./fornecedor-list.component.html */ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-list.component.css */ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], src_app_services_fornecedor_service__WEBPACK_IMPORTED_MODULE_9__["FornecedorService"]])
    ], FornecedorListComponent);
    return FornecedorListComponent;
}());



/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content style=\"overflow: auto;\">        \n  <form  (ngSubmit)=\"onSubmit(movimentacaoFinanceiraFrm)\"  [formGroup]=\"movimentacaoFinanceiraFrm\">\n     <h2 style=\"text-align: center\">{{data.modalTitle}}</h2>\n  <!-- <mat-drawer-container class=\"example-container\">  -->\n                    <table style=\"margin-left: auto; margin-right: auto; width: 100%;\" class=\"docs-example-viewer-wrapper\">                    \n                      <tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Conta origem</mat-label>\n                                <mat-select [disabled]=\"disableSelect.value\" placeholder=\"Conta origem\" style=\"width: 100%\" formControlName=\"contaOrigemId\"   #singleSelect>\n                                    <mat-option>\n                                        <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                                    </mat-option>                 \n                                    <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira.id\">\n                                    {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>    \n                        </td>\n                      </tr>            \n                      <tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Conta destino</mat-label>\n                                <mat-select placeholder=\"Conta detisno\" style=\"width: 100%\" formControlName=\"contaDestinoId\"   #singleSelect>\n                                    <mat-option>\n                                        <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                                    </mat-option>                 \n                                    <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira.id\">\n                                    {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>    \n                        </td>\n                      </tr>\n                      \n                      <tr>\n                        <td colspan=\"3\" >\n                            <mat-form-field style=\"width:100%; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-select placeholder=\"Tipo movimentação\" formControlName=\"tipoMov\">\n                                  <mat-option>-- None --</mat-option>\n                                  <mat-option *ngFor=\"let tipoMov  of listTipoMov\" [value]=\"tipoMov.id\">\n                                    {{ tipoMov.descricao }}\n                                  </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"formErrors.tipoMov \">\n                                  {{ formErrors.tipoMov }}\n                                </mat-error>\n                              </mat-form-field>                             \n                        </td>                       \n                      </tr>                     \n                      <tr>\n                        <td colspan=\"3\">\n                            <mat-form-field style=\"width: 100% ; margin-bottom: -1.25em;\" appearance=\"outline\">\n                                <mat-label>Valor</mat-label>\n                                <input currencyMask matInput formControlName=\"debito\">\n                                <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n                                <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                <!-- <mat-hint>Hint</mat-hint> -->\n                                <mat-error *ngIf=\"formErrors.debito\">\n                                  {{ formErrors.debito }}\n                                </mat-error>\n                              </mat-form-field>\n                        </td>                       \n                      </tr>                      \n                      <tr>\n                          <td>\n                              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n                              <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"movimentacaoFinanceiraFrm.invalid\">{{data.modalBtnTitle}}</button>\n                          </td>\n                      </tr>\n                     \n                    </table>                                           \n            </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MovimentacaoFinanceiraFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoFinanceiraFormComponent", function() { return MovimentacaoFinanceiraFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var src_app_services_tipo_mov_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tipo-mov-service.service */ "./src/app/services/tipo-mov-service.service.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_movimentacao_financeira_servico_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/movimentacao-financeira-servico.service */ "./src/app/services/movimentacao-financeira-servico.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var MovimentacaoFinanceiraFormComponent = /** @class */ (function () {
    function MovimentacaoFinanceiraFormComponent(data, fb, _tipoMovService, _contaFinanceiraService, _movimentacaoFinanceiraServico, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._tipoMovService = _tipoMovService;
        this._contaFinanceiraService = _contaFinanceiraService;
        this._movimentacaoFinanceiraServico = _movimentacaoFinanceiraServico;
        this.dialogRef = dialogRef;
        // conta financeira
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.contaFinanceiraFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.contaFinanceiraCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredContaFinanceira = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.formErrors = {
            'contaOrigemId': '',
            'contaDestinoId': '',
            'debito': '',
            'tipoMov': ''
        };
        this.validationMessages = {
            'contaOrigemId': {
                'required': 'Conta de origem não informada.'
            },
            'contaDestinoId': {
                'required': 'Conta de destino não informado.'
            },
            'debito': {
                'required': 'Valor não informado.'
            },
            'tipoMov': {
                'required': 'Tipo movimentação não informada.'
            }
        };
    }
    MovimentacaoFinanceiraFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movimentacaoFinanceiraFrm = this.fb.group({
            id: [''],
            contaOrigemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contaDestinoId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            credito: [''],
            debito: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tipoMov: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ativo: [''],
            objetoId: [''],
            contraPartida: [''],
            data: [''],
            usuarioId: [''],
            geradoPeloSistema: [''],
            identificador: ['']
        });
        this.loadTipoMov();
        this.movimentacaoFinanceiraFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        // if(this.data.dbops == DBOperation.create){
        //   this.movimentacaoFinanceiraFrm.reset();
        // }else{
        this.movimentacaoFinanceiraFrm.setValue(this.data.data);
        // this.movimentacaoFinanceiraFrm.get('contaOrigemId').disable();
        // }
        this.loadContaFinanceira();
        this.contaFinanceiraFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterContasFinanceiras();
        });
    };
    MovimentacaoFinanceiraFormComponent.prototype.filterContasFinanceiras = function () {
        if (!this.listContaFinanceira) {
            return;
        }
        // get the search keyword
        var search = this.contaFinanceiraFilterCtrl.value;
        if (!search) {
            this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredContaFinanceira.next(this.listContaFinanceira.filter(function (c) { return c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1; }));
    };
    MovimentacaoFinanceiraFormComponent.prototype.loadTipoMov = function () {
        var _this = this;
        this._tipoMovService.getAll(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/MovimentacaoBancaria/v1/TipoMov')
            .subscribe(function (tipomov) {
            _this.listTipoMov = tipomov;
        });
    };
    MovimentacaoFinanceiraFormComponent.prototype.loadContaFinanceira = function () {
        var _this = this;
        this._contaFinanceiraService.getAllConta(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contafinanceira) {
            _this.listContaFinanceira = contafinanceira;
            _this.contaFinanceiraCtrl.setValue(_this.listContaFinanceira);
            _this.filteredContaFinanceira.next(_this.listContaFinanceira.slice());
        });
    };
    MovimentacaoFinanceiraFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var movimentacaoFinanceiraData = this.movimentacaoFinanceiraFrm.value;
        this._movimentacaoFinanceiraServico.adicionar(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/MovimentacaoBancaria/v1/MovimentacaoBancaria', movimentacaoFinanceiraData).subscribe(function (data) {
            // Success
            if (data.message) {
                _this.dialogRef.close('success');
            }
            else {
                _this.dialogRef.close('error');
            }
        }, function (error) {
            _this.dialogRef.close('error');
        });
    };
    MovimentacaoFinanceiraFormComponent.prototype.onValueChanged = function (data) {
        if (!this.movimentacaoFinanceiraFrm) {
            return;
        }
        var form = this.movimentacaoFinanceiraFrm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    MovimentacaoFinanceiraFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movimentacao-financeira-form',
            template: __webpack_require__(/*! ./movimentacao-financeira-form.component.html */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.html"),
            styles: [__webpack_require__(/*! ./movimentacao-financeira-form.component.css */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_tipo_mov_service_service__WEBPACK_IMPORTED_MODULE_5__["TipoMovServiceService"],
            src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_4__["ContaService"],
            src_app_services_movimentacao_financeira_servico_service__WEBPACK_IMPORTED_MODULE_8__["MovimentacaoFinanceiraServicoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], MovimentacaoFinanceiraFormComponent);
    return MovimentacaoFinanceiraFormComponent;
}());



/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clearFitler{\r\n    cursor: pointer;\r\n }\r\n   mat-card button{\r\n     float: right;\r\n     margin-top: -17px;\r\n   }\r\n   h1{\r\n       text-align: center;\r\n   }\r\n   mat-form-field{\r\n       float: left;\r\n   }\r\n   button\r\n   {\r\n       /* float: right; */\r\n       margin-right: 1%;\r\n   }\r\n   mat-form-field {\r\n     margin-right: 12px;\r\n   }\r\n   p{\r\n       float: left;\r\n       position: absolute;\r\n   }\r\n   \r\n "

/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Movimentação entre contas</h1>\n    <table style=\"margin-bottom: 4%; margin-left: auto; margin-right: auto; overflow: auto; border: 1px solid #555; width: 54%;\">\n      <tr tr class=\"table-info\"> \n        \n          <td colspan=\"3\">\n              <mat-form-field style=\"width: 100%; \">\n                  <mat-label>Conta bancária</mat-label>\n                  <mat-select placeholder=\"Conta financeira\"  [(value)]=\"contaFinaceira\" #singleSelect>\n                      <mat-option>\n                          <ngx-mat-select-search [formControl]=\"contaFinanceiraFilterCtrl\"></ngx-mat-select-search>\n                      </mat-option>                 \n                      <mat-option>-- None --</mat-option>\n                    <mat-option *ngFor=\"let contaFinanceira of filteredContaFinanceira | async\" [value]=\"contaFinanceira\">\n                      {{contaFinanceira.conta}} | {{contaFinanceira.descricao}} - {{contaFinanceira.empresa}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>        \n          </td>  \n\n            <td colspan=\"0\">\n                <mat-form-field style=\"width: 100%;\" >\n                    <mat-label>Data</mat-label>\n                    <input matInput [matDatepicker]=\"picker1\" [(value)]=\"inicio\" (dateChange)=\"dataInicio('input',$event,1)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                  </mat-form-field>\n            </td>       \n            \n       \n            <td colspan=\"0\">\n                <button [disabled]='contaFinaceira==null' style=\"width: 100%;\"  mat-raised-button (click)=\"pesquisar()\">Pesquisar</button>\n            </td> \n      \n      </tr>\n    </table>       \n<mat-card>      \n  <button title=\"Adicionar\" style=\"float: left\" [disabled]=\"contaFinaceira==null\" mat-raised-button\tcolor=\"accent\" (click)=\"addMovimentacaoBancaria()\">Adicionar</button>\n</mat-card>\n\n<mat-table #table [dataSource]=\"dataSource\">\n\n  <!-- Id Column -->\n  <!-- <ng-container matColumnDef=\"id\">\n  <th mat-header-cell *matHeaderCellDef> Id </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n</ng-container> -->\n<!-- Conta origem -->\n\n<ng-container matColumnDef=\"contaOrigem\">\n  <mat-header-cell *matHeaderCellDef> Origem </mat-header-cell>\n  <mat-cell *matCellDef=\"let element\"> {{element.contaOrigem}} </mat-cell>\n</ng-container>   \n<!-- Conta destino -->\n<ng-container matColumnDef=\"contaDestino\">\n    <mat-header-cell *matHeaderCellDef> Destino </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.contaDestino}} </mat-cell>\n  </ng-container>    \n  \n<!-- TipoMov -->\n  <ng-container matColumnDef=\"tipoMov\">\n    <mat-header-cell *matHeaderCellDef> Descrição </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.tipoMov}} </mat-cell>\n  </ng-container> \n\n  <!-- cnpj  Identificador Fiscal -->\n  <ng-container matColumnDef=\"data\">\n      <mat-header-cell *matHeaderCellDef> Data do lançamento </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.data | date: 'dd/MM/yyyy' }} </mat-cell>\n    </ng-container>\n  \n   <!-- cnpj  Column -->\n   <ng-container matColumnDef=\"debito\">\n    <mat-header-cell *matHeaderCellDef> Débito </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> \n      <span *ngIf=\"element.debito>0\" style=\"color: red;\">{{element.debito | currency:'R$'}}</span>\n      <span *ngIf=\"element.debito==0\"> {{element.debito | currency:'R$'}} </span>\n    </mat-cell>\n  </ng-container>  \n  \n   <!-- cnpj  Column -->\n   <ng-container matColumnDef=\"credito\">\n    <mat-header-cell *matHeaderCellDef> Crédito </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> \n     <span *ngIf=\"element.credito>0\" style=\"color: green;\">{{element.credito | currency:'R$'}}</span>\n      <span *ngIf=\"element.credito ==0\"> {{element.credito | currency:'R$'}} </span>\n    </mat-cell>\n    </ng-container>\n\n  <!-- cnpj  Identificador Fiscal -->\n  <ng-container matColumnDef=\"desfazer\">\n      <mat-header-cell *matHeaderCellDef> Desfazer </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">            \n          <mat-checkbox  color=\"primary\" [checked]=\"element.desfazer\" (click)=\"openDialogDesfazer(element.id)\">              \n          </mat-checkbox>\n         </mat-cell>\n    </ng-container>  \n    \n     <!-- Razao social Column -->\n  <ng-container matColumnDef=\"usuario\">\n    <mat-header-cell *matHeaderCellDef> Usuário </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.usuario}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n"

/***/ }),

/***/ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MovimentacaoFinanceiraListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoFinanceiraListComponent", function() { return MovimentacaoFinanceiraListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _movimentacao_financeira_form_movimentacao_financeira_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movimentacao-financeira-form/movimentacao-financeira-form.component */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_models_movimentacaoFinanceira__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/movimentacaoFinanceira */ "./src/app/models/movimentacaoFinanceira.ts");
/* harmony import */ var src_app_services_movimentacao_financeira_servico_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/movimentacao-financeira-servico.service */ "./src/app/services/movimentacao-financeira-servico.service.ts");
/* harmony import */ var _Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Confirmacao/confirmacao */ "./src/app/Forms/Confirmacao/confirmacao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MovimentacaoFinanceiraListComponent = /** @class */ (function () {
    function MovimentacaoFinanceiraListComponent(dialog, _contaFinanceiraService, snackBar, _movimentacaoFinanceiraServico) {
        this.dialog = dialog;
        this._contaFinanceiraService = _contaFinanceiraService;
        this.snackBar = snackBar;
        this._movimentacaoFinanceiraServico = _movimentacaoFinanceiraServico;
        // consulta contas financeiras
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contaFinanceiraFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.contaFinanceiraCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredContaFinanceira = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['contaOrigem', 'contaDestino', 'credito', 'debito', 'tipoMov', 'data', 'usuario', 'desfazer'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MovimentacaoFinanceiraListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadContaFinanceira();
        this.dataSource.paginator = this.paginator;
        this.contaFinanceiraFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterContasFinanceiras();
        });
    };
    MovimentacaoFinanceiraListComponent.prototype.filterContasFinanceiras = function () {
        if (!this.listContaFinanceira) {
            return;
        }
        // get the search keyword
        var search = this.contaFinanceiraFilterCtrl.value;
        if (!search) {
            this.filteredContaFinanceira.next(this.listContaFinanceira.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the fornecedores
        this.filteredContaFinanceira.next(this.listContaFinanceira.filter(function (c) { return c.descricao.toLowerCase().indexOf(search) > -1 || c.conta.indexOf(search) > -1; }));
    };
    MovimentacaoFinanceiraListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_movimentacao_financeira_form_movimentacao_financeira_form_component__WEBPACK_IMPORTED_MODULE_7__["MovimentacaoFinanceiraFormComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, data: this.movimentavao }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadMovimentacaoFinanceira();
                if (_this.dbops == src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create) {
                    _this.showMessage('Movimentação registrada com sucesso.');
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    MovimentacaoFinanceiraListComponent.prototype.loadMovimentacaoFinanceira = function () {
        var _this = this;
        this.inicio = this.inicio != null ? new Date(this.inicio).toISOString() : null;
        this._movimentacaoFinanceiraServico.getAllById(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/movimentacaoBancaria/v1/MovimentacaoBancariaPorConta', this.contaFinaceira.id, this.inicio)
            .subscribe(function (movimentacao) {
            _this.loadingState = false;
            _this.dataSource.data = movimentacao;
        });
    };
    MovimentacaoFinanceiraListComponent.prototype.loadContaFinanceira = function () {
        var _this = this;
        this._contaFinanceiraService.getAllConta(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contafinanceira) {
            _this.listContaFinanceira = contafinanceira;
            _this.contaFinanceiraCtrl.setValue(_this.listContaFinanceira);
            _this.filteredContaFinanceira.next(_this.listContaFinanceira.slice());
        });
    };
    MovimentacaoFinanceiraListComponent.prototype.desfazer = function (id) {
        var _this = this;
        this._movimentacaoFinanceiraServico.desativar(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/movimentacaoBancaria/v1/MovimentacaoBancaria/desativar', id, this.currentUser.user.id)
            .subscribe(function (movimentacao) {
            _this.loadMovimentacaoFinanceira();
        });
    };
    MovimentacaoFinanceiraListComponent.prototype.openDialogDesfazer = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"], {
            width: '250px',
            data: { mensagem: 'Deseja desfazer essa movimentação?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'true') {
                _this.desfazer(id);
                return true;
            }
            else
                return false;
        });
        return false;
    };
    MovimentacaoFinanceiraListComponent.prototype.pesquisar = function () {
        this.loadMovimentacaoFinanceira();
    };
    MovimentacaoFinanceiraListComponent.prototype.dataInicio = function (type, event, date) {
        if (date == 1)
            this.inicio = new Date(event.value).toISOString();
    };
    MovimentacaoFinanceiraListComponent.prototype.addMovimentacaoBancaria = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create;
        this.modalTitle = 'Registrar movimentação';
        this.modalBtnTitle = 'Adicionar';
        this.movimentavao = new src_app_models_movimentacaoFinanceira__WEBPACK_IMPORTED_MODULE_9__["MovimentacaoFinanceira"]();
        this.movimentavao.id = 0;
        this.movimentavao.contaOrigemId = this.contaFinaceira.id;
        this.movimentavao.usuarioId = this.currentUser.user.id;
        this.movimentavao.ativo = true;
        this.movimentavao.contaDestinoId = 0;
        this.movimentavao.contraPartida = 0;
        this.movimentavao.credito = 0.0;
        this.movimentavao.data = new Date().toISOString();
        this.movimentavao.debito = 0.0;
        this.movimentavao.geradoPeloSistema = false;
        this.movimentavao.identificador = '';
        this.movimentavao.objetoId = 0;
        this.movimentavao.tipoMov = 0;
        this.openDialog();
    };
    MovimentacaoFinanceiraListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MovimentacaoFinanceiraListComponent.prototype, "paginator", void 0);
    MovimentacaoFinanceiraListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movimentacao-financeira-list',
            template: __webpack_require__(/*! ./movimentacao-financeira-list.component.html */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.html"),
            styles: [__webpack_require__(/*! ./movimentacao-financeira-list.component.css */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_services_conta_service__WEBPACK_IMPORTED_MODULE_4__["ContaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_movimentacao_financeira_servico_service__WEBPACK_IMPORTED_MODULE_10__["MovimentacaoFinanceiraServicoService"]])
    ], MovimentacaoFinanceiraListComponent);
    return MovimentacaoFinanceiraListComponent;
}());



/***/ }),

/***/ "./src/app/Helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/Helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/authService */ "./src/app/services/authService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authService__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/Helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/Helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--The content below is only a placeholder and can be replaced<app-formlogin\n\n<app-navegador></app-navegador>\n<app-footer></app-footer> \n<br>\n<br> -->\n<app-navegador></app-navegador>\n<app-footer></app-footer> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
        this.title = 'License-App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./licenseList/list-license/list-license.component */ "./src/app/licenseList/list-license/list-license.component.ts");
/* harmony import */ var _licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./licenseForm/form-license/form-license.component */ "./src/app/licenseForm/form-license/form-license.component.ts");
/* harmony import */ var _unidadeLIst_list_unidade_list_unidade_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unidadeLIst/list-unidade/list-unidade.component */ "./src/app/unidadeLIst/list-unidade/list-unidade.component.ts");
/* harmony import */ var _unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./unidadeForm/form-unidade/form-unidade.component */ "./src/app/unidadeForm/form-unidade/form-unidade.component.ts");
/* harmony import */ var _home_navegador_navegador_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/navegador/navegador.component */ "./src/app/home/navegador/navegador.component.ts");
/* harmony import */ var _services_license_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/license.service */ "./src/app/services/license.service.ts");
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _login_formlogin_formlogin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/formlogin/formlogin.component */ "./src/app/login/formlogin/formlogin.component.ts");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/authService */ "./src/app/services/authService.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _Helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Helpers/jwt.interceptor */ "./src/app/Helpers/jwt.interceptor.ts");
/* harmony import */ var _Helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Helpers/error.interceptor */ "./src/app/Helpers/error.interceptor.ts");
/* harmony import */ var _diretivas_alert_alert_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./diretivas/alert/alert.component */ "./src/app/diretivas/alert/alert.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _services_home_dashboard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/home.dashboard.service */ "./src/app/services/home.dashboard.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _usuarioForm_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./usuarioForm/usuario-form/usuario-form.component */ "./src/app/usuarioForm/usuario-form/usuario-form.component.ts");
/* harmony import */ var _usuarioForm_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./usuarioForm/usuario-list/usuario-list.component */ "./src/app/usuarioForm/usuario-list/usuario-list.component.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _pagamentoForm_pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pagamentoForm/pagamento-form/pagamento-form.component */ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.ts");
/* harmony import */ var _pagamentoForm_pagamento_list_pagamento_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pagamentoForm/pagamento-list/pagamento-list.component */ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.ts");
/* harmony import */ var _services_pagamento_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/pagamento.service */ "./src/app/services/pagamento.service.ts");
/* harmony import */ var _diretivas_numericType__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./diretivas/numericType */ "./src/app/diretivas/numericType.ts");
/* harmony import */ var node_modules_ng2_currency_mask__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! node_modules/ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var node_modules_ng2_currency_mask__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(node_modules_ng2_currency_mask__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _usuarioForm_usuario_update_password_usuario_update_password_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./usuarioForm/usuario-update-password/usuario-update-password.component */ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.ts");
/* harmony import */ var _models_details__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./models/details */ "./src/app/models/details.ts");
/* harmony import */ var _conta_list_conta_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./conta-list/conta-list.component */ "./src/app/conta-list/conta-list.component.ts");
/* harmony import */ var _services_conta_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var _conta_form_conta_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./conta-form/conta-form.component */ "./src/app/conta-form/conta-form.component.ts");
/* harmony import */ var _Forms_Fornecedor_fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Forms/Fornecedor/fornecedor-list/fornecedor-list.component */ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.ts");
/* harmony import */ var _Forms_Fornecedor_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Forms/Fornecedor/fornecedor-form/fornecedor-form.component */ "./src/app/Forms/Fornecedor/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var _Forms_ContasApagar_contas_apagar_list_contas_apagar_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component */ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.ts");
/* harmony import */ var _services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/contas-apagar.service */ "./src/app/services/contas-apagar.service.ts");
/* harmony import */ var _Forms_ContasApagar_contas_apagar_form_contas_apagar_form_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component */ "./src/app/Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component.ts");
/* harmony import */ var _services_operacao_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/operacao.service */ "./src/app/services/operacao.service.ts");
/* harmony import */ var _services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/tipo-doc.service */ "./src/app/services/tipo-doc.service.ts");
/* harmony import */ var _Forms_ContaAreceber_contas_areceber_form_contas_areceber_form_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component */ "./src/app/Forms/ContaAreceber/contas-areceber-form/contas-areceber-form.component.ts");
/* harmony import */ var _Forms_ContaAreceber_contas_areceber_list_contas_areceber_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component */ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.ts");
/* harmony import */ var _services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/contas-areceber.service */ "./src/app/services/contas-areceber.service.ts");
/* harmony import */ var _Forms_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Forms/Confirmacao/confirmacao */ "./src/app/Forms/Confirmacao/confirmacao.ts");
/* harmony import */ var _Forms_ConciliacaoBancaria_conciliacao_bancaria_form_conciliacao_bancaria_form_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component */ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.ts");
/* harmony import */ var _Forms_MovimentacaoFinanceira_movimentacao_financeira_list_movimentacao_financeira_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.ts");
/* harmony import */ var _Forms_MovimentacaoFinanceira_movimentacao_financeira_form_movimentacao_financeira_form_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























































Object(_angular_common__WEBPACK_IMPORTED_MODULE_40__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_41___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_13__["ListLicenseComponent"],
                _licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_14__["FormLicenseComponent"],
                _home_navegador_navegador_component__WEBPACK_IMPORTED_MODULE_17__["NavegadorComponent"],
                _unidadeLIst_list_unidade_list_unidade_component__WEBPACK_IMPORTED_MODULE_15__["ListUnidadeComponent"],
                _unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_16__["FormUnidadeComponent"],
                _login_formlogin_formlogin_component__WEBPACK_IMPORTED_MODULE_20__["FormloginComponent"],
                _diretivas_alert_alert_component__WEBPACK_IMPORTED_MODULE_26__["AlertComponent"],
                _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _usuarioForm_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_30__["UsuarioFormComponent"],
                _usuarioForm_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_31__["UsuarioListComponent"],
                _pagamentoForm_pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_33__["PagamentoFormComponent"],
                _pagamentoForm_pagamento_list_pagamento_list_component__WEBPACK_IMPORTED_MODULE_34__["PagamentoListComponent"],
                _Forms_ContasApagar_contas_apagar_form_contas_apagar_form_component__WEBPACK_IMPORTED_MODULE_51__["ContasApagarFormComponent"],
                _Forms_ContaAreceber_contas_areceber_form_contas_areceber_form_component__WEBPACK_IMPORTED_MODULE_54__["ContasAreceberFormComponent"],
                _conta_list_conta_list_component__WEBPACK_IMPORTED_MODULE_44__["ContaListComponent"],
                _conta_form_conta_form_component__WEBPACK_IMPORTED_MODULE_46__["ContaFormComponent"],
                _Forms_ConciliacaoBancaria_conciliacao_bancaria_form_conciliacao_bancaria_form_component__WEBPACK_IMPORTED_MODULE_58__["ConciliacaoBancariaFormComponent"],
                _Forms_ContasApagar_contas_apagar_list_contas_apagar_list_component__WEBPACK_IMPORTED_MODULE_49__["ContasApagarListComponent"],
                _Forms_ContaAreceber_contas_areceber_list_contas_areceber_list_component__WEBPACK_IMPORTED_MODULE_55__["ContasAreceberListComponent"],
                _Forms_Fornecedor_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_48__["FornecedorFormComponent"],
                _diretivas_numericType__WEBPACK_IMPORTED_MODULE_36__["NumericDirective"],
                _Forms_Fornecedor_fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_47__["FornecedorListComponent"],
                _usuarioForm_usuario_update_password_usuario_update_password_component__WEBPACK_IMPORTED_MODULE_42__["UsuarioUpdatePasswordComponent"],
                _Forms_MovimentacaoFinanceira_movimentacao_financeira_list_movimentacao_financeira_list_component__WEBPACK_IMPORTED_MODULE_59__["MovimentacaoFinanceiraListComponent"],
                _Forms_MovimentacaoFinanceira_movimentacao_financeira_form_movimentacao_financeira_form_component__WEBPACK_IMPORTED_MODULE_60__["MovimentacaoFinanceiraFormComponent"],
                _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_13__["BottomSheetOverviewExampleSheet"],
                _Forms_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_57__["DialogOverviewExampleDialog"]
            ],
            imports: [
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(),
                node_modules_ng2_currency_mask__WEBPACK_IMPORTED_MODULE_37__["CurrencyMaskModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__["MatBottomSheetModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_38__["MatBottomSheetModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_39__["NgxMatSelectSearchModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]
            ],
            entryComponents: [_Forms_ContasApagar_contas_apagar_form_contas_apagar_form_component__WEBPACK_IMPORTED_MODULE_51__["ContasApagarFormComponent"],
                _Forms_ContaAreceber_contas_areceber_form_contas_areceber_form_component__WEBPACK_IMPORTED_MODULE_54__["ContasAreceberFormComponent"],
                _Forms_Fornecedor_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_48__["FornecedorFormComponent"],
                _Forms_MovimentacaoFinanceira_movimentacao_financeira_form_movimentacao_financeira_form_component__WEBPACK_IMPORTED_MODULE_60__["MovimentacaoFinanceiraFormComponent"],
                _conta_form_conta_form_component__WEBPACK_IMPORTED_MODULE_46__["ContaFormComponent"],
                _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_13__["ListLicenseComponent"],
                _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_13__["BottomSheetOverviewExampleSheet"],
                _Forms_Confirmacao_confirmacao__WEBPACK_IMPORTED_MODULE_57__["DialogOverviewExampleDialog"]],
            providers: [_services_license_service__WEBPACK_IMPORTED_MODULE_18__["LicenseService"],
                _services_unidade_service__WEBPACK_IMPORTED_MODULE_19__["UnidadeService"],
                _services_authService__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _services_usuario_service__WEBPACK_IMPORTED_MODULE_32__["UsuarioService"],
                _services_pagamento_service__WEBPACK_IMPORTED_MODULE_35__["PagamentoService"],
                _services_conta_service__WEBPACK_IMPORTED_MODULE_45__["ContaService"],
                _services_operacao_service__WEBPACK_IMPORTED_MODULE_52__["OperacaoService"],
                _services_contas_apagar_service__WEBPACK_IMPORTED_MODULE_50__["ContasAPagarService"],
                _services_contas_areceber_service__WEBPACK_IMPORTED_MODULE_56__["ContasAreceberService"],
                _services_tipo_doc_service__WEBPACK_IMPORTED_MODULE_53__["TipoDocService"],
                _models_details__WEBPACK_IMPORTED_MODULE_43__["Details"],
                _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_23__["AlertService"],
                _services_home_dashboard_service__WEBPACK_IMPORTED_MODULE_28__["HomeDashboardService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _Helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _Helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'pt-BR' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _login_formlogin_formlogin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/formlogin/formlogin.component */ "./src/app/login/formlogin/formlogin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./licenseList/list-license/list-license.component */ "./src/app/licenseList/list-license/list-license.component.ts");
/* harmony import */ var _licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./licenseForm/form-license/form-license.component */ "./src/app/licenseForm/form-license/form-license.component.ts");
/* harmony import */ var _home_navegador_navegador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/navegador/navegador.component */ "./src/app/home/navegador/navegador.component.ts");
/* harmony import */ var _unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidadeForm/form-unidade/form-unidade.component */ "./src/app/unidadeForm/form-unidade/form-unidade.component.ts");
/* harmony import */ var _unidadeLIst_list_unidade_list_unidade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unidadeLIst/list-unidade/list-unidade.component */ "./src/app/unidadeLIst/list-unidade/list-unidade.component.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _usuarioForm_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usuarioForm/usuario-form/usuario-form.component */ "./src/app/usuarioForm/usuario-form/usuario-form.component.ts");
/* harmony import */ var _usuarioForm_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usuarioForm/usuario-list/usuario-list.component */ "./src/app/usuarioForm/usuario-list/usuario-list.component.ts");
/* harmony import */ var _pagamentoForm_pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagamentoForm/pagamento-form/pagamento-form.component */ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.ts");
/* harmony import */ var _pagamentoForm_pagamento_list_pagamento_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagamentoForm/pagamento-list/pagamento-list.component */ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.ts");
/* harmony import */ var _usuarioForm_usuario_update_password_usuario_update_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuarioForm/usuario-update-password/usuario-update-password.component */ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.ts");
/* harmony import */ var _conta_list_conta_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conta-list/conta-list.component */ "./src/app/conta-list/conta-list.component.ts");
/* harmony import */ var _Forms_Fornecedor_fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Forms/Fornecedor/fornecedor-list/fornecedor-list.component */ "./src/app/Forms/Fornecedor/fornecedor-list/fornecedor-list.component.ts");
/* harmony import */ var _Forms_ContasApagar_contas_apagar_list_contas_apagar_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component */ "./src/app/Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component.ts");
/* harmony import */ var _Forms_ContaAreceber_contas_areceber_list_contas_areceber_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component */ "./src/app/Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component.ts");
/* harmony import */ var _Forms_ConciliacaoBancaria_conciliacao_bancaria_form_conciliacao_bancaria_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component */ "./src/app/Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component.ts");
/* harmony import */ var _Forms_MovimentacaoFinanceira_movimentacao_financeira_list_movimentacao_financeira_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component */ "./src/app/Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component.ts");




















var appRoutes = [
    // { path: 'navegador' , component: NavegadorComponent, canActivate: [AuthGuard] },
    { path: 'login', pathMatch: 'full', component: _login_formlogin_formlogin_component__WEBPACK_IMPORTED_MODULE_1__["FormloginComponent"] },
    { path: 'gerenciadorLicenses', component: _licenseList_list_license_list_license_component__WEBPACK_IMPORTED_MODULE_3__["ListLicenseComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'licenses', component: _licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_4__["FormLicenseComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'unidades', component: _unidadeLIst_list_unidade_list_unidade_component__WEBPACK_IMPORTED_MODULE_7__["ListUnidadeComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'frmunidades', component: _unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_6__["FormUnidadeComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'frmdasboard', component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'frmusuario', component: _usuarioForm_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'usuarios', component: _usuarioForm_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_10__["UsuarioListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'frmpagamento', component: _pagamentoForm_pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_11__["PagamentoFormComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'pagamentos', component: _pagamentoForm_pagamento_list_pagamento_list_component__WEBPACK_IMPORTED_MODULE_12__["PagamentoListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'alterarsenha', component: _usuarioForm_usuario_update_password_usuario_update_password_component__WEBPACK_IMPORTED_MODULE_13__["UsuarioUpdatePasswordComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contafinanceira', component: _conta_list_conta_list_component__WEBPACK_IMPORTED_MODULE_14__["ContaListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'fornecedores', component: _Forms_Fornecedor_fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_15__["FornecedorListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contasPagar', component: _Forms_ContasApagar_contas_apagar_list_contas_apagar_list_component__WEBPACK_IMPORTED_MODULE_16__["ContasApagarListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contasReceber', component: _Forms_ContaAreceber_contas_areceber_list_contas_areceber_list_component__WEBPACK_IMPORTED_MODULE_17__["ContasAreceberListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'conciliacaoBancaria', component: _Forms_ConciliacaoBancaria_conciliacao_bancaria_form_conciliacao_bancaria_form_component__WEBPACK_IMPORTED_MODULE_18__["ConciliacaoBancariaFormComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'home', component: _home_navegador_navegador_component__WEBPACK_IMPORTED_MODULE_5__["NavegadorComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'movimentacaoFinanceira', component: _Forms_MovimentacaoFinanceira_movimentacao_financeira_list_movimentacao_financeira_list_component__WEBPACK_IMPORTED_MODULE_19__["MovimentacaoFinanceiraListComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'login', component: _login_formlogin_formlogin_component__WEBPACK_IMPORTED_MODULE_1__["FormloginComponent"] },
    { path: '**', redirectTo: '' }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/conta-form/conta-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/conta-form/conta-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conta-form/conta-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/conta-form/conta-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-content>\n  <form class=\"my-form\"  (ngSubmit)=\"onSubmit(contaFormGroup)\"  [formGroup]=\"contaFormGroup\">\n    <h2>{{data.modalTitle}}</h2>\n    <div>\n        <mat-form-field appearance=\"outline\">\n        <mat-label>Empresa</mat-label>\n        <input matInput placeholder=\"Empresa\" formControlName=\"empresa\" id=\"empresa\">\n        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n        <!-- <mat-hint>Hint</mat-hint> -->\n        <mat-error *ngIf=\"formErrors.empresa\">\n          {{ formErrors.empresa }}\n        </mat-error>\n      </mat-form-field>\n    </div>\n  \n    <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Banco</mat-label>\n      <input matInput placeholder=\"Banco\"  formControlName=\"banco\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.banco\">\n        {{ formErrors.banco }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Agência</mat-label>\n    <input matInput placeholder=\"Agência\" formControlName=\"agencia\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.agencia\">\n      {{ formErrors.agencia }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Conta corrente</mat-label>\n    <input matInput placeholder=\"Conta corrente\" formControlName=\"conta\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.conta\">\n      {{ formErrors.conta }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>saldo</mat-label>\n    <input currencyMask matInput formControlName=\"saldo\">\n    <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.saldo\">\n      {{ formErrors.saldo }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Descrição</mat-label>\n    <input matInput placeholder=\"Descrição\" formControlName=\"descricao\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.descricao\">\n      {{ formErrors.descricao }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-select placeholder=\"Tipo da conta\" formControlName=\"tipoDaConta\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let tipoContas of tipoContaCorrente\" [value]=\"tipoContas.id\">\n          {{ tipoContas.descricao }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.tipoDaConta \">\n        {{ formErrors.tipoDaConta }}\n      </mat-error>\n  </mat-form-field>\n  </div> \n  \n  \n    <div>\n      <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contaFormGroup.invalid\">{{data.modalBtnTitle}}</button>\n    </div>\n  \n    </form>\n  \n</mat-card-content>"

/***/ }),

/***/ "./src/app/conta-form/conta-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conta-form/conta-form.component.ts ***!
  \****************************************************/
/*! exports provided: ContaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaFormComponent", function() { return ContaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_conta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ContaFormComponent = /** @class */ (function () {
    function ContaFormComponent(data, fb, _contaService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contaService = _contaService;
        this.dialogRef = dialogRef;
        this.tipoContaCorrente = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'empresa': '',
            'banco': '',
            'agencia': '',
            'conta': '',
            'saldo': '',
            'descricao': '',
            'tipoDaConta': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'banco': {
                'minlength': 'Banco deve possuir no mínimo 2 caracteres.',
                'required': 'Informe banco.'
            },
            'empresa': {
                'minlength': 'Empresa deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a empresa.'
            },
            'agencia': {
                'minlength': 'Agência deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a agência.'
            },
            'conta': {
                'minlength': 'Conta corrente deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a conta corrente.'
            },
            'saldo': {
                'required': 'Informe o saldo da conta corrente.'
            },
            'descricao': {
                'required': 'Informe a descrição.'
            },
            'tipoDaConta': {
                'required': 'Informe o tipo da conta corrente.'
            }
        };
    }
    ContaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disabled = false;
        this.contaFormGroup = this.fb.group({
            id: [''],
            empresa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            banco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            agencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            conta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            saldo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoDaConta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            select: ['']
        });
        this.tipoContaCorrente = _shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].GetTipoContaCorrente();
        // subscribe on value changed event of form to show validation message
        this.contaFormGroup.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.contaFormGroup.reset();
        }
        else {
            this.contaFormGroup.setValue(this.data.conta);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    ContaFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contaFormGroup.enable() : this.contaFormGroup.disable();
    };
    // form value change event
    ContaFormComponent.prototype.onValueChanged = function (data) {
        if (!this.contaFormGroup) {
            return;
        }
        var form = this.contaFormGroup;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContaFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var contaData = this.mapDateData(this.contaFormGroup.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._contaService.addContaFinanceira(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas', contaData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._contaService.updateConta(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas', contaData.id, contaData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._contaService.deleteConta(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/contaFinanceira/v1/contas', contaData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContaFormComponent.prototype.mapDateData = function (conta) {
        return conta;
    };
    ContaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conta-form',
            template: __webpack_require__(/*! ./conta-form.component.html */ "./src/app/conta-form/conta-form.component.html"),
            styles: [__webpack_require__(/*! ./conta-form.component.css */ "./src/app/conta-form/conta-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_conta_service__WEBPACK_IMPORTED_MODULE_3__["ContaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ContaFormComponent);
    return ContaFormComponent;
}());



/***/ }),

/***/ "./src/app/conta-list/conta-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/conta-list/conta-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  body {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;    \r\n  }\r\n  \r\n  \r\n  @media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n\r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      font-weight: bold;\r\n      height:30px;\r\n      margin-bottom: 4%;\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n  \r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-footer-row {\r\n    font-weight: bold;\r\n  }"

/***/ }),

/***/ "./src/app/conta-list/conta-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/conta-list/conta-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <div class=\"spinner\" *ngIf=\"loadingState; else listContas\">\n      <mat-spinner></mat-spinner>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n  <!-- <ng-template class=\"unidadelist\" #listUnidade> -->\n    <h2 style=\"text-align: center;\">Contas Bancárias</h2>\n    <div class=\"unidadelist-container mat-elevation-z8\">\n       \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContaFinanceira()\">Adicionar</button></div>\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"select\">\n          <mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                          [aria-label]=\"checkboxLabel()\">\n            </mat-checkbox>\n            <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\"\n                          [aria-label]=\"checkboxLabel(row)\">\n            </mat-checkbox>\n            <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n          </mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n        <!-- Banco Column -->\n        <ng-container matColumnDef=\"empresa\">\n          <mat-header-cell *matHeaderCellDef> Empresa </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.empresa}} </mat-cell>\n          <mat-footer-cell *matFooterCellDef> Total </mat-footer-cell>\n        </ng-container>\n\n        <!-- Descrição de hardware Column -->\n        <ng-container matColumnDef=\"descricao\">\n          <mat-header-cell *matHeaderCellDef> Descrição </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.descricao}} </mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n        <!-- Empresa de hardware Column -->\n        <ng-container matColumnDef=\"banco\">\n          <mat-header-cell *matHeaderCellDef> Banco </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.banco}} </mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n         <!-- Agencia  Column -->\n         <ng-container matColumnDef=\"agencia\">\n          <mat-header-cell *matHeaderCellDef> Agência </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.agencia}}</mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n        <!-- Conta -->\n        <ng-container matColumnDef=\"conta\">\n          <mat-header-cell *matHeaderCellDef> Conta </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.conta}} </mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n        <!-- Saldo -->\n        <ng-container matColumnDef=\"saldo\">\n          <mat-header-cell *matHeaderCellDef> Saldo </mat-header-cell>\n          \n          <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.saldo<0\" style=\"color: red;\">{{element.saldo | currency:'R$'}}</span>\n              <span *ngIf=\"element.saldo>=0\"> {{element.saldo | currency:'R$'}} </span>\n            </mat-cell>\n          <mat-footer-cell *matFooterCellDef>{{total | currency:'R$'}}</mat-footer-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <mat-header-cell class=\"center\" *matHeaderCellDef> Operação </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-button title=\"Editar\" mat-raised-button color=\"primary\" (click)=\"editContaFinanceira(element.id)\">Editar</button>&nbsp;\n            <button mat-button title=\"Remover\" mat-raised-button color=\"warn\" (click)=\"deleteContaFinanceira(element.id)\">Remover</button>\n          </mat-cell>\n          <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n        </ng-container>\n\n        <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        <mat-footer-row *matFooterRowDef=\"displayedColumns\"></mat-footer-row>\n      </mat-table>\n      <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n  <!-- </ng-template> -->\n"

/***/ }),

/***/ "./src/app/conta-list/conta-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conta-list/conta-list.component.ts ***!
  \****************************************************/
/*! exports provided: ContaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaListComponent", function() { return ContaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contaFinanceira__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/contaFinanceira */ "./src/app/models/contaFinanceira.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _services_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _conta_form_conta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../conta-form/conta-form.component */ "./src/app/conta-form/conta-form.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContaListComponent = /** @class */ (function () {
    function ContaListComponent(dialog, snackBar, _contaServices) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._contaServices = _contaServices;
        this.displayedColumns = ['select', 'empresa', 'banco', 'descricao', 'agencia', 'conta', 'saldo', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        // select grid
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
    }
    ContaListComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadContas();
    };
    ContaListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ContaListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ContaListComponent.prototype.checkboxLabel = function (row) {
        if (row) {
            row.select = this.selection.isSelected(row) ? true : false;
            var contasSelecionadas = this.dataSource.data.filter(function (c) { return c.select; }).length > 0 ? this.dataSource.data.filter(function (c) { return c.select; }) : this.dataSource.data;
            this.valorTotal(contasSelecionadas);
        }
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.id + 1);
    };
    ContaListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_conta_form_conta_form_component__WEBPACK_IMPORTED_MODULE_6__["ContaFormComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, conta: this.conta }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadContas();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                        _this.showMessage('Conta financeira cadastrada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                        _this.showMessage('Conta financeira alterada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                        _this.showMessage('Conta financeira removida com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    ContaListComponent.prototype.loadContas = function () {
        var _this = this;
        this._contaServices.getAllConta(_shared_Global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_USER_ENDPOINT + 'api/contafinanceira/v1/contas')
            .subscribe(function (contas) {
            _this.loadingState = false;
            _this.dataSource.data = contas;
            _this.valorTotal(contas);
        });
    };
    ContaListComponent.prototype.addContaFinanceira = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
        this.modalTitle = 'Adicionar nova conta';
        this.modalBtnTitle = 'Adicionar';
        this.conta = new _models_contaFinanceira__WEBPACK_IMPORTED_MODULE_1__["ContaFinanceira"]();
        this.conta.empresa = '';
        this.conta.agencia = '';
        this.conta.banco = '';
        this.conta.conta = '';
        this.conta.descricao = '';
        this.conta.id = null;
        this.conta.saldo = 0.0;
        this.conta.tipoDaConta = 0;
        this.openDialog();
    };
    ContaListComponent.prototype.editContaFinanceira = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
        this.modalTitle = 'Editar conta';
        this.modalBtnTitle = 'Editar';
        this.conta = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContaListComponent.prototype.deleteContaFinanceira = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar essa conta ?';
        this.modalBtnTitle = 'Remover';
        this.conta = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContaListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContaListComponent.prototype.valorTotal = function (contas) {
        var _this = this;
        var valorAntigo = 0;
        contas.forEach(function (valor) {
            _this.total = _this.sum(valor.saldo, valorAntigo);
            valorAntigo = _this.total;
        });
    };
    ContaListComponent.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ContaListComponent.prototype, "paginator", void 0);
    ContaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conta-list',
            template: __webpack_require__(/*! ./conta-list.component.html */ "./src/app/conta-list/conta-list.component.html"),
            styles: [__webpack_require__(/*! ./conta-list.component.css */ "./src/app/conta-list/conta-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_conta_service__WEBPACK_IMPORTED_MODULE_4__["ContaService"]])
    ], ContaListComponent);
    return ContaListComponent;
}());



/***/ }),

/***/ "./src/app/diretivas/alert/alert.component.html":
/*!******************************************************!*\
  !*** ./src/app/diretivas/alert/alert.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/diretivas/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/diretivas/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/diretivas/alert/alert.component.html"),
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/diretivas/numericType.ts":
/*!******************************************!*\
  !*** ./src/app/diretivas/numericType.ts ***!
  \******************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumericDirective = /** @class */ (function () {
    function NumericDirective(el) {
        this.el = el;
        this.regex = {
            number: new RegExp(/^\d+$/),
            decimal: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g)
        };
        this.specialKeys = {
            number: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
            decimal: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
        };
    }
    NumericDirective.prototype.onKeyDown = function (event) {
        if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex[this.numericType])) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('numericType'),
        __metadata("design:type", String)
    ], NumericDirective.prototype, "numericType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onKeyDown", null);
    NumericDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numeric]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumericDirective);
    return NumericDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-footer[_ngcontent-c10] {\n  /* padding: 12px;\n  font-size: 12px;\n  margin-top: 40px; */\n\n  position:fixed;\n  bottom:0;\n  width:100%;\n  z-index: 99;\n  height: 5%;\n}\n.docs-footer {\n  background: #673ab7;\n  color: #fff;\n}\n.docs-footer-list[_ngcontent-c10] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px;\n}\n.docs-footer[_ngcontent-c10] {\n\n  font-size: 12px;\n\n}\n.docs-footer-logo[_ngcontent-c10] {\n  flex: 0.5;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n BRGAAP COPORATION © LICENSE AAP\n</p> -->\n\n<footer _ngcontent-c10=\"\" class=\"docs-footer\">\n  <div _ngcontent-c10=\"\" class=\"docs-footer-list\">\n    <div _ngcontent-c10=\"\" class=\"docs-footer-logo\">\n      <div _ngcontent-c10=\"\" class=\"footer-logo\">\n        <img _ngcontent-c10=\"\" alt=\"LICENSE APP\" class=\"docs-footer-angular-logo\" src=\"../../assets/img/SIPEF.png\">\n\n      </div>\n    </div>\n        <div _ngcontent-c10=\"\" class=\"docs-footer-version\">\n          <span _ngcontent-c10=\"\" class=\"version\">Versão Corrente: 2.0.0&nbsp; </span>\n        </div>\n        <div _ngcontent-c10=\"\" class=\"docs-footer-copyright\">\n          <span _ngcontent-c10=\"\"> BRGAAP CORPORATION © 2018.</span>\n        </div>\n      </div>\n    </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  /* max-width: 400px; */\n  /* margin: 2em auto; */\n  text-align: center;\n  background-color:rgb(163, 14, 3);\n}\n\n.mat-card-subtitle{\n  color: white;\n}\n\n.mat-card-title{\n  margin-bottom: 9%;\n}\n\n.mat-card-subtitle{\n   margin-bottom: 5%;\n}\n\n.mat-card{\n  width: 17%;\n  float: left;\n  margin: 10px;\n  color: white;\n  overflow: hidden !important;\n}\n\n.example-card-naovencida{\n  /* margin: 2em auto; */\n  text-align: center;\n  background-color: rgb(221, 165, 11);\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n.dashboard{\n  margin-left: 13%;\n}"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"dashboard\">\n    <mat-card *ngFor=\"let unidade of unidades\" [ngClass]=\"[unidade.vencida == 'true' ? 'example-card' : 'example-card-naovencida']\">\n        <mat-grid-list cols=\"4\" rowHeight=\"155px\" >         \n           \n             <mat-card-header>\n\n              <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n              <mat-card-title>\n                  <button mat-button (click)=\"licenseForm(unidade.idLicense)\"> {{unidade.os}}</button> \n                </mat-card-title>\n    \n            </mat-card-header>\n            <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n            <mat-card-content>\n              <p>\n                  <mat-card-subtitle>{{unidade.nome}}</mat-card-subtitle>\n                  <mat-card-subtitle>{{unidade.validade | date: 'dd/MM/yyyy'}}</mat-card-subtitle>\n                  <mat-card-subtitle>{{unidade.chaveDeHardware}}</mat-card-subtitle>              \n                Status: {{unidade.situacao}}\n              </p>              \n            </mat-card-content>   \n                    \n            <!-- <mat-card-actions>\n              <button mat-button>LIKE</button>\n              <button mat-button>SHARE</button>\n            </mat-card-actions> -->\n          \n          \n       \n        </mat-grid-list>\n      </mat-card>\n    \n    <!-- *ngIf=\"unidade.vencida == 'S'? ; else listLicense\" -->\n</div>\n   \n\n"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _services_home_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home.dashboard.service */ "./src/app/services/home.dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/licenseForm/form-license/form-license.component */ "./src/app/licenseForm/form-license/form-license.component.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_services_license_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/license.service */ "./src/app/services/license.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_dashboardServices, _licenseService, dialog, snackBar) {
        this._dashboardServices = _dashboardServices;
        this._licenseService = _licenseService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.currentUser = _shared_Global__WEBPACK_IMPORTED_MODULE_1__["Global"].currentUser;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadLicenesUnidades();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    DashboardComponent.prototype.licenseForm = function (id) {
        var _this = this;
        this._licenseService.getById(_shared_Global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_USER_ENDPOINT + "api/license/getLicense", id).subscribe(function (result) {
            _this.license = result;
            if (_this.license == null)
                return;
            _this.openDialog();
        });
    };
    DashboardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_4__["FormLicenseComponent"], {
            width: '500px',
            data: { dbops: src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update, modalTitle: "Alterar Licença", modalBtnTitle: "Editar", license: this.license }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.showMessage('Licença alterada com sucesso.');
                _this.loadLicenesUnidades();
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
        });
    };
    DashboardComponent.prototype.loadLicenesUnidades = function () {
        var _this = this;
        this._dashboardServices.getAllUnidadeLicense(_shared_Global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_USER_ENDPOINT + 'api/home/v1/dashboard')
            .subscribe(function (dasboard) {
            _this.loadingState = true;
            _this.unidades = dasboard;
        });
    };
    DashboardComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/home/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_home_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["HomeDashboardService"],
            src_app_services_license_service__WEBPACK_IMPORTED_MODULE_6__["LicenseService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/navegador/navegador.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/navegador/navegador.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABdFBMVEX///8Dnr0REiTupDkBg5v827pmSCwAAADm5uba2tv/y5kAnLwAmbr95M0AncEDka0AgZ3/5MLnoz1JODDqojh3WTwAABfuojQAABwAlbcAocLmqW329vYAABPl6OvtoC3o9vjZ7/JcPR/9+fP+zp603OVLr8hoRSZoQh8AepTsniJ8fYaUlJoUFSZbW2QAAA53wtTP6vCf0t4uqMOKydhpu89gTjhpPxVPYVski544eYSFaE3DpYhsTjO2mX2kh2zuzq3cvZ4vHBhBLymLd2ZsrbFsm5r1zqb0vofutX7569jqv4vZlDPn283ssWPGhzEjJTONjZVGRlJsbHZNTVgzM0BGbGxVWEs9dn1eTDRTXFEbeIhKaWm+pI1CipRCeX2UaUOwi2OXdlWTs6pMnamgrpvZz7a1xbrd0LWAt7uqpIOxro99tMI4naiXoX/Boldbi4SsomvPolCkoXDvr1fAolx5n4x6kHbvsVzHhB2qq67Dxchee2B9AAAN7klEQVR4nO2di0Pa1h7HeYioQSzUQUQxvAQkAR9oW1vb4rpWlKqBQOvarXfb7brdbd1Wb3fn7D9/zyGBnIS8Tp665WtZIUJ6Pvx+53t+5+SxQMCXL1++fPny5cuXL1++fPny5cuXL1++fPny5cvXdVZua2ttZ3N3tzzU7u7mztraVs7rVlnT1vZmM0jEgAhEw9fB5ub2ltftM6Pc1k45tgSBgoriAcs7Nyt2+e1yEEApI0nxYsHydt7r9hpTbrsJU0+fikeDqdrcznndaj2trJWXjDIhii2V11a8bruGcjtBM1jDyMWCOzmv26+i/C5onUkumJOx2O517G15Uzkog1sqXze0/K4REzSAds2itmMPFo+24zXNWGvBmF1YULHgmtdEQ+XK9oWLFxEr57ymCgS2zRuhBhqx7TEWCJf9WFAeB22NcIgLjmse9jQbzVABzDN7XHEqDUeKlT2pH/NNh7kAWdOD0XrL8MzEggjC9Vn2muPh4hVz2UK2l9zhAoO1qyOaa1wuk227lIe83CNzlysYXHKJzC3fEOWOg2y5zgX6mQuun3dh+FKQ4yP1StMUWCaTCS4ADZ+YENF0uroyUR9mMguvX7y8Mz1dqUxP33n54vWCCbhY2VmuHWyuzML5nbtVyMSrUqnevXO+gI3mbK2PbYiZvXuV6vSEqpV7e7hoTlpjDrN/ZRZeVSuTWMPAVV/hRo3IOQZWxsMKvrirgjVEu/sCjyvoWDfDqzgyCy8VklCSkC/xguZUbZXD+oIze9Ma4RKCNo3Z03KOgJVxeljm/l09LKi793HICEeSEcsRM/d10nCcjlhkS044I87CaOaNQS5MMiJoPxfO0JzZM5SHQjbi9DP7h2msIYz40jgX0ALGngm7q+FdnES8p+uHqCqvMMhiu/Zy5TEWOTJ7hjsYr+o5BtmSvSHDsnq8RAT6cso4mb2WjxUwo06PhOwFBpmtIcPpYfgBgyEzTkbY2MtwLDHzGjtgwD/OcchytoFhTS9fYVmiAPZyyjiZfWPZCk7RsWCCC+g1BlnQrvWPNWetA6oKctEwmW0VI47XYw7OI1VeTRkns8vxc1hHIEx4ItSXUxhkSzlbwLaxVjrQ8vdBQYul8AB5UZ3CILPpZAmsJVK0nCok9h+qohUe7ieQX1Zf45A17eDCWtOWeMdniUjkUUERrVB4FIkkPhM3VM6nMMhsqfGxDvKhYIXHEaj9B9NSOPDqwf7wV4/F7ZUXUxhktizr4C11nCNgfOsjidb+YwjHa/rB4/1Wgv/NviKYATI7fDGHda5U5hxx+1ZEVKt1cLC/f3DQQjdGphXB9MkIwvoYjXc4DAETMlFTYi5WvprCIVuyfsAM7zAE0scKLX2wVkExYvpkNtSLWF0Mqe0LjxP6YGLIRFc0RGZDJ8M8viKuTxnAioi9bDyOGSSLWeXawj2jQ4hY4cAY2IEQsuqUXNpkljsZ9hGxOzzXI2NccAQfZuKdCTBtMstHyzYxwTJfVQw64kjDbla5dwuPjNi0CIbnHUGhWPzMiHEIGhZW1fuTXJpklt0D91RmYmFaDqZg++gmvmJU4tIis7qKj3dMDGo400TAvr795PbXUizpJggmzDOxYpazBGbidBWYiyLYwee3b9/+XGKRsk0QbMLs9cli1gp8E+cXZV5WELAvngCKJ1+gYLJNEEzBE/XILJ6FZOKEMHhsDBOs+i8FT9Qhs+j3Js7gI55+U8BLxcI3z9S51MgsTsk28fsY8bSNgEUePfn8iWy0lm4CYG1NMGUyiwMZ1qL9CKz07UPE7lsHk36PRjDx8NvSM41UVCGzuIRvCmxu7jucAfq7uTkdMCUyb8BKxrkikZI+mAKZRTDsisohsEky98GCTXywPT2uSTKLxaIZMOLfuGDf6wZskswimIk+Bv7Nt9/jgH3/xgiXnMx984D/6AKOK+4Z45KReQMWxAhYwiCWjMwimInKAyomtnteReI71k2RWaw88E9u5sHejZuttufxG95hgCFkFlcWTV7GEvth3O6i8o6L4zf8YLSLScksFsEmr2MhnoqpqLxjMRX1B2dFMovTFpMXshBNsQsdK+33WPy9gcFZicziRDNv8kpMJBeVklFMxMg7vICNySwe+8NfzBFCJuaiAhnCFdGeiqmSEcGcJTC8A9BoyN6pk6FcP+J4IkJGWD0MbaZYHIasjLQ+coyiHaO/eYudiTyZ5QVTkwOZtJdBcxTQihKsyA9mAgbJCKsHyExft6hQVqHlhklLFMmsHpTAOQVTRlaewJiQuUSEWs9ZBAuYv3KR+I8eF+bYLJFVLtPuARTTIXtmsoNBvbUMtm3hnh2xp05xrVs/gyVvAYyINVVPHWgZnl8qglk/52jFNBZU/Kc5Za7OT1a4pvZsOMnU3CR6DLa8rLCyc7i8bAns1i/WuaxdgQ/Blpc7hxKqDtxmCWzdjpNnca84lYL9vMzrqHM4VOdI2GAtFXM2gFkxfAA2NyKR6GjuZytg1s0eykouArC5ubaM7agNNloBsyUTgczfbiW2BMEgW/toSHd01G7zW362MorZw2XWF4lYcDNfLM0pqlTM/zJlls0OT4TaMnGvSyIW4++3qkxWGs5i1t6um2Fbt+3uHtrTaCIej8OHRJnNUW2gRFYaTTxB2G4pSBtszy4uzdXFePz9r78lF5NSLXbETxcnwZAJdUf+0WTyt1/faLHZUCeOpHHVTvzZRY1Kp8NpmWrIqps8ZiWE67gGPoxquKvaxe8aZDbes0RtgYAIfqhJ2zVu3ynycSkZyhU4Vfk49WFKBW3dLuuAUr285YJSbBcQGjJpNkoWdmpqn6cu1DIxZyOYWsjUuaQhQ2ImiVfgUjlgGmS2BkylYIz/V50LhCyhRCblSmjtgPqgmIw5W8GUQka812pWOP1RsoPiZB4GAh/VAwbJ3jgeMMX5ZvwPzWaFa9JjYzBm0ngFIqo9jP9qfpsMmR0zTKkmx7L32lxA0j0USzKugN7nwxMhs3EMG0tefhD/08xEIOpQRibjOtTdwZ/ykNlXdIjKy0IW/6DXrnBYQrIyMyPJo6JuxNN/yMBsWMNRkNw/LnQbRiGFFeSSknV0v5i0zPFtdw6hZU0pmC4XIBNDNiNovKGoH/BwWLq2b79z8JIctyXea1saD9YefSkzY40a1zbyxfwuCZhjNyNEkzGu6x1QQmGFcI3I1IspFAx1D4cScSjEGeMfDHzjQmE1IxPcplL9yj6OuocTjjgScl1jPGmkZWFqXhquUdDmjcQbVC8IWM5BMHHFiggaalk4fanABcg0ql/J9yImosP3MR11M+KtMbBwrbU6ybXaMtLDINhowulkB+Ml3BLTmHcApZNKETOWx4h72LNEqk1GKHrH4qJa2w4nQraqWkzJ9zJyDyeNYyTeQOLyukMVLByeDJhqvCbALoZgezkXwMCkE5C9T8qa9FwVjOrIQraqXkxNfD3JPccNUVSeUPAOdbBw+kQKdqLewRafy78VWHu4djv/LWLSOzTAqLYkZKttdd+ZBPvz1i0Xb+afX5qYs2iAhWsnCNnqiYbVLz6XRTP9hzNTFVWyifWpMw2w9CkKplVMLZ7JP3rh8v9W4lg+EmmBhWs/ilw/ao3NcrB0UvE8TidVTEpjpgmWvhRDpllMycCopMopxY7qlJK0SAtMLKx0iikpGHWq3wonVKqhLdIEC380VkxJdlMrecMVCCTEIxJ6YBQfstWWdomJ7CYtXUp2V8XLUTuf64CFKZ1iagQ2GsioSy+6l6iSEDR9MFhYaRRTUrC0d2k40jHvjrpg4TAorE703iOAUe67vIJKVNoIGAiZVjGFgFGU5+HidXxaS5/pR4w6OdGdnC6enaVrp9chXLzmk3/pg6WPjnTnzYtnfyVVrobxSK0zSn8pXv8d1FnLaxK5iodJlePshpWuJQ+99XhlFSOW0ACW2sVm3mv+lNLPSEUqijq9Xn1LruPDjzVctjRV+3h4fZxQVcedJAYboEp2bgAVLxA3angmki4UdXkTYoWqON85TarSpSFT8rQzf23tQlPF40SpfZmsAVFjwVfJy/Zh4vhmQiEqAsBIiz+LuxUBQDeeyJcvX758+fLly5cvX758+fLly5cvX758+fLla6zZv6kC0b+pAqG/qXywmyZNMJKUvBIeN0MC2AA82LrwXPg7lGo0soPB6J31PhliG4PQDREPRnINMtVNZVOhVDbarZPZbIrMRq+AOCaajUZDZDQ6mAWPbs/j9hqWEDG2m2VpmqGjNMPRzIBh6B7Tn+1Ho9xMg5mdZXuzs71PPfC3lxFT6QdkqA5+wB8SdB1ylG4CWJapcxyXAo9otEt2Q1GOa2z0Ps3SHMN+ijauPg2i7Oos6XYXIxsDjmWzLDtIDcgQR/cGJEvWe30AwcJndTbFZRmW6/au2G6Dpht0o8FkUTCy0eg2GA58lMx2SWYjxXX75EaUnKWZ/lV0cPVpI8vOzLLue0cX5hE9bBrToDmapvvdxlV/A2Bw3BXTHXA9muXo0NVGt880GBpsIFGwEHlFs12SZRlgEA2uUWcafZLhuiD9BrPcJ5q5omEqbrjNlb0CXzhH9wFbtwH+y3XBH/BTZ3pMAzxvcH3uqg9Iu32uy3R7AF3IxTEYB2LbpcGD2+CiXJcdDMg+Q6eyjR7JNLIbICXBZveto15P9VIDliV7JBsCz0IDaNQD8BxuYeuDUKoe6tXZAXw5CPWyIxMYj2MwgCly+AA/qeEm4JJwe5aEz+Fm17nM659Zedxk+WA3Tf8HbHOSUMTaxTAAAAAASUVORK5CYII=');\n  background-size: cover;\n}\n\n.sidenav-container {\n    height: 100%;\n  }\n\n.sidenav {\n    width: 310px;\n    box-shadow: 3px 0 6px rgba(0,0,0,.24);\n   \n  }\n\n.rigth{\n    text-align: right;\n  }\n\n.example-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n.example-is-mobile .example-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n\nh1.example-app-name {\n    margin-left: 8px;\n  }\n\n.example-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n\n.example-is-mobile .example-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n"

/***/ }),

/***/ "./src/app/home/navegador/navegador.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/navegador/navegador.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>       \n<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav\n      #drawer\n      class=\"sidenav\"\n      fixedInViewport=\"true\"\n      [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n      [opened]=\"!(isHandset | async)!.matches\">\n      <mat-toolbar color=\"primary\"> FINANCEIRO</mat-toolbar>   \n        <mat-nav-list>\n          \n            \n        </mat-nav-list>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                      <i class=\"material-icons\">assessment</i>&nbsp;Dashboard\n                  </mat-panel-title>                \n                </mat-expansion-panel-header>          \n                  <mat-nav-list>\n                      <a  *ngIf=\"currentUser!=null && currentUser.user.super\" mat-list-item routerLink=\"/frmdasboard\"><i class = 'material-icons'>trending_up</i>&nbsp;Financeiro </a>  \n                      <a mat-list-item routerLink=\"/frmdasboard\"><i class = 'material-icons'>view_module</i>&nbsp;Licença </a>      \n                  </mat-nav-list>             \n              </mat-expansion-panel>\n\n            <mat-expansion-panel *ngIf=\"currentUser!=null && currentUser.user.super\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <i class=\"material-icons\">attach_money</i>&nbsp;Movimentação caixa\n                </mat-panel-title>                \n              </mat-expansion-panel-header>          \n                <mat-nav-list>\n                    <a  *ngIf=\"currentUser!=null && currentUser.user.super\" mat-list-item routerLink=\"/contafinanceira\"><i class=\"material-icons\">account_balance</i>&nbsp; Conta Financeira</a> \n                  <a mat-list-item routerLink=\"/contasPagar\"><i class=\"material-icons\" style=\"color: red\">attach_money</i>&nbsp;Contas a Pagar</a> \n                  <a mat-list-item routerLink=\"/contasReceber\"><i class=\"material-icons\" style=\"color: green\">attach_money</i>&nbsp;Contas a Receber</a>\n                  <a mat-list-item routerLink=\"/conciliacaoBancaria\"><i class=\"material-icons\">system_update_alt</i>&nbsp;Conciliação bancária</a>\n                  <a mat-list-item routerLink=\"/movimentacaoFinanceira\"><i class=\"material-icons\">swap_horiz</i>&nbsp;Movimentação entre contas</a>\n                 <!-- <a mat-list-item routerLink=\"/conciliacaoBancaria\"><i class=\"material-icons\">insert_drive_file</i>&nbsp;Extrato</a>  -->                 \n                </mat-nav-list>             \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                      <i class=\"material-icons\">settings</i>&nbsp;Gerencial\n                  </mat-panel-title>                \n                </mat-expansion-panel-header>          \n                  <mat-nav-list>\n                      <a  *ngIf=\"currentUser!=null && currentUser.user.super\" mat-list-item routerLink=\"/fornecedores\"><i class=\"material-icons\">store_mall_directory</i>&nbsp; Fornecedor</a>\n                      <a mat-list-item routerLink=\"/unidades\"><i class=\"material-icons\">business</i>&nbsp; Unidade</a>\n                      <a mat-list-item routerLink=\"/gerenciadorLicenses\"><i class=\"material-icons\">business_center</i>&nbsp; Licenças</a>                       \n                      <a  *ngIf=\"currentUser!=null && currentUser.user.super\" mat-list-item routerLink=\"/pagamentos\"><i class=\"material-icons\">attach_money</i>&nbsp; Pagamentos</a>  \n                      <a mat-list-item routerLink=\"/usuarios\"><i class=\"material-icons\">person_add</i>&nbsp; Usuário</a>  \n                      <a mat-list-item routerLink=\"/alterarsenha\"><i class=\"material-icons\">vpn_key</i>&nbsp; Alterar senha</a>\n                      <a mat-list-item (click)=\"onLogout()\"><i class=\"material-icons\">power_settings_new</i>&nbsp; Sair</a>                 \n                  </mat-nav-list>\n                     \n              </mat-expansion-panel>              \n          </mat-accordion>  \n          <mat-card class=\"example-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title >{{nome}}</mat-card-title>\n              <mat-card-subtitle>Seja bem vindo</mat-card-subtitle>\n            </mat-card-header>            \n            <mat-card-content>\n              <p>\n                Tenha um ótimo dia...\n              </p>\n            </mat-card-content>            \n          </mat-card>              \n    </mat-sidenav>\n    <mat-sidenav-content>\n      <mat-toolbar color=\"primary\">\n        <button\n          type=\"button\"\n          aria-label=\"Toggle sidenav\"\n          mat-icon-button\n          (click)=\"drawer.toggle()\"\n          *ngIf=\"(isHandset | async)!.matches\">\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n        </button>  \n        <mat-card-content>       \n          <div _ngcontent-c10=\"\" class=\"docs-footer-copyright\">\n            <!-- <span _ngcontent-c10=\"\"> License APP &nbsp; </span> -->\n          </div>\n          <div *ngIf=\"nome!=null\" _ngcontent-c10=\"\" class=\"docs-footer-version\">\n              <!-- <span _ngcontent-c10=\"\" class=\"version\">Seja Bem vindo: {{teste.user.name}}&nbsp; </span> -->\n            </div>\n        </mat-card-content>\n        \n      </mat-toolbar>\n      <span *ngIf=\"currentUser==null\">\n        <app-formlogin (usuarioLogado)=\"usuarioAutenticado($event)\"></app-formlogin>\n      </span>\n      <span *ngIf=\"currentUser!=null\">\n        <router-outlet></router-outlet> \n      </span>        \n    </mat-sidenav-content>   \n   \n  </mat-sidenav-container> \n  \n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/home/navegador/navegador.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/navegador/navegador.component.ts ***!
  \*******************************************************/
/*! exports provided: NavegadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegadorComponent", function() { return NavegadorComponent; });
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/authService */ "./src/app/services/authService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavegadorComponent = /** @class */ (function () {
    function NavegadorComponent(breakpointObserver, authService, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.dialog = dialog;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset);
        this.panelOpenState = false;
        this.currentUser = _shared_Global__WEBPACK_IMPORTED_MODULE_3__["Global"].currentUser;
        this.users = [];
    }
    NavegadorComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser)
            this.nome = this.currentUser.user.name;
        this.nome = this.respotaUsuario;
        if (this.nome == null)
            this.nome = "";
        // this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    };
    NavegadorComponent.prototype.usuarioAutenticado = function (respostaLogin) {
        if (respostaLogin.logado == true) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.nome = this.currentUser.user.name;
        }
    };
    NavegadorComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.nome = null;
        this.currentUser = null;
        // {3}
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], NavegadorComponent.prototype, "respotaUsuario", void 0);
    NavegadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navegador',
            template: __webpack_require__(/*! ./navegador.component.html */ "./src/app/home/navegador/navegador.component.html"),
            styles: [__webpack_require__(/*! ./navegador.component.css */ "./src/app/home/navegador/navegador.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _services_authService__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NavegadorComponent);
    return NavegadorComponent;
}());



/***/ }),

/***/ "./src/app/licenseForm/form-license/form-license.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/licenseForm/form-license/form-license.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/licenseForm/form-license/form-license.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/licenseForm/form-license/form-license.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n<form   (ngSubmit)=\"onSubmit(licenseFrm)\"  [formGroup]=\"licenseFrm\">\n  <h2>{{data.modalTitle}}</h2>\n  <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Os</mat-label>\n      <input matInput placeholder=\"Os\" formControlName=\"os\" id=\"inputRazaosocial\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.os\">\n        {{ formErrors.os }}\n      </mat-error>\n    </mat-form-field>\n  </div>  \n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Identificador fiscal</mat-label>\n  <input matInput placeholder=\"Identificador fiscal\" formControlName=\"identificadorFiscal\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.identificadorFiscal\">\n    {{ formErrors.identificadorFiscal }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Chave de hardware</mat-label>\n  <input matInput placeholder=\"Chave de hardware\"  formControlName=\"chaveDeHardware\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.chaveDeHardware\">\n    {{ formErrors.chaveDeHardware }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"validade\"  formControlName=\"validade\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n\n    <mat-error *ngIf=\"formErrors.validade \">\n      {{ formErrors.validade }}\n    </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-select placeholder=\"Situação\" formControlName=\"situacao\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let situacao  of situacaos\" [value]=\"situacao\">\n          {{ situacao }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.situacao \">\n        {{ formErrors.situacao }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n<div>\n    <mat-form-field appearance=\"outline\">\n        <mat-select placeholder=\"Tipo\" formControlName=\"tipo\">\n          <mat-option>-- None --</mat-option>\n          <mat-option *ngFor=\"let tipoLicense  of tipoLicenses\" [value]=\"tipoLicense.id\">\n            {{ tipoLicense.descricao }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"formErrors.tipo \">\n          {{ formErrors.tipo }}\n        </mat-error>\n      </mat-form-field>\n</div>\n\n  <div>\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"licenseFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n\n  </form>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/licenseForm/form-license/form-license.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/licenseForm/form-license/form-license.component.ts ***!
  \********************************************************************/
/*! exports provided: FormLicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLicenseComponent", function() { return FormLicenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_license__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/license */ "./src/app/models/license.ts");
/* harmony import */ var _services_license_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/license.service */ "./src/app/services/license.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FormLicenseComponent = /** @class */ (function () {
    function FormLicenseComponent(data, fb, _licenseService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._licenseService = _licenseService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // contact: IContact;
        this.situacaos = [];
        this.tipoLicenses = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'os': '',
            'chaveDeHardware': '',
            'identificadorFiscal': '',
            'validade': '',
            'situacao': '',
            'tipo': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'os': {
                'minlength': 'Nome da Os deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a Os.'
            },
            'chaveDeHardware': {
                'required': 'Informe a chave de hardware.'
            },
            'identificadorFiscal': {
                'required': 'Informe o identificador fiscal.'
            },
            'validade': {
                'required': 'Informe a validade.'
            },
            'situacao': {
                'required': 'Informe a situação.'
            },
            'tipo': {
                'required': 'Informe a tipo.'
            }
        };
    }
    FormLicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disabled = true;
        this.licenseFrm = this.fb.group({
            id: [''],
            os: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            chaveDeHardware: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            identificadorFiscal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            validade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            situacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contratoId: [''],
            objetoId: ['']
        });
        this.situacaos = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].situacao;
        this.tipoLicenses = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].GetTipoLicense();
        // tslint:disable-next-line:no-trailing-whitespace
        // subscribe on value changed event of form to show validation message
        this.licenseFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.licenseFrm.setValue(this.data.license);
        }
        else {
            this.licenseFrm.setValue(this.data.license);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
        this.licenseFrm.get('os').disable();
        this.licenseFrm.get('identificadorFiscal').disable();
        var usercurrent = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].GetCurrentUser();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update && usercurrent.user.super == false) {
            this.licenseFrm.get('validade').disable();
            this.licenseFrm.get('chaveDeHardware').disable();
        }
    };
    Object.defineProperty(FormLicenseComponent.prototype, "f", {
        get: function () { return this.licenseFrm.controls; },
        enumerable: true,
        configurable: true
    });
    // form value change event
    FormLicenseComponent.prototype.onValueChanged = function (data) {
        if (!this.licenseFrm) {
            return;
        }
        var form = this.licenseFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    FormLicenseComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var objLicense = this.CreateLicense();
        var licenseData = this.mapDateData(objLicense);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._licenseService.addLicense(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/license/add', licenseData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._licenseService.updateLicense(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/license/update', licenseData.id, licenseData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this._licenseService.deleteLicense(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/license/delete', licenseData.id, currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    FormLicenseComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.licenseFrm.enable() : this.licenseFrm.disable();
    };
    FormLicenseComponent.prototype.CreateLicense = function () {
        var obj = new _models_license__WEBPACK_IMPORTED_MODULE_3__["License"]();
        obj.id = this.f.id.value;
        obj.contratoId = this.f.contratoId.value;
        obj.os = this.f.os.value;
        obj.chaveDeHardware = this.f.chaveDeHardware.value;
        obj.identificadorFiscal = this.f.identificadorFiscal.value;
        obj.situacao = this.f.situacao.value;
        obj.tipo = this.f.tipo.value;
        obj.validade = this.f.validade.value;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        obj.usuarioid = currentUser.user.id;
        return obj;
    };
    FormLicenseComponent.prototype.mapDateData = function (license) {
        license.validade = new Date(license.validade).toISOString();
        return license;
    };
    FormLicenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-license',
            template: __webpack_require__(/*! ./form-license.component.html */ "./src/app/licenseForm/form-license/form-license.component.html"),
            styles: [__webpack_require__(/*! ./form-license.component.css */ "./src/app/licenseForm/form-license/form-license.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_license_service__WEBPACK_IMPORTED_MODULE_4__["LicenseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], FormLicenseComponent);
    return FormLicenseComponent;
}());



/***/ }),

/***/ "./src/app/licenseList/list-license/list-license.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/licenseList/list-license/list-license.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .contactlist{\n  text-align: center;\n} */\n\n/* .spinner{\n    top: 45%;\n    left: 47%;\n    position: fixed;\n  }\n  */\n\n.example-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n.example-container > * {\n    width: 100%;\n  }\n\nbody {\n    font-family: 'Covered By Your Grace', cursive;\n    line-height: 1.25;\n    \n  }\n\n@media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    \n    /*  Enable this to hide header\n    .mat-table .mat-header-cell {\n      \n      border: 10px solid;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n    */\n    main {\n      overflow-y: auto;\n    }\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    /*\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\n    */\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n    }\n    .mat-table .mat-cell:before {\n      /*\n      * aria-label has no advantage, it won't be read inside a table\n      content: attr(aria-label);\n      */\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n      \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n  }"

/***/ }),

/***/ "./src/app/licenseList/list-license/list-license.component.detalhe.html":
/*!******************************************************************************!*\
  !*** ./src/app/licenseList/list-license/list-license.component.detalhe.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n       \r\n    <a href=\"#\" mat-list-item (click)=\"openLink($event)\">\r\n      <span mat-line>Unidade                 :&nbsp;<b>{{data.details.unidade}}</b></span>\r\n      <span mat-line>Criado Por              :&nbsp;<b>{{data.details.criadoPor}}</b></span>\r\n      <span mat-line>Data Criação            :&nbsp;<b>{{data.details.dataDaCriacao | date: 'dd/MM/yyyy'}}</b></span>\r\n      <span mat-line>Ultima Alteração        :&nbsp;<b>{{data.details.ultimoQueAlterou}}</b></span>\r\n      <span mat-line>Data da Ultima Alteração:&nbsp;<b>{{data.details.dataDaUltimaAlteracao | date: 'dd/MM/yyyy'}}</b></span>\r\n      <span mat-line>Complemento             :&nbsp;<b>{{data.details.complemento}}</b></span>\r\n    </a>  \r\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/licenseList/list-license/list-license.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/licenseList/list-license/list-license.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"spinner\" *ngIf=\"loadingState; else listLicense\">\n        <mat-spinner></mat-spinner>\n    </div>\n\n    <!-- <ng-template class=\"licenselist\" #listLicense></ng-template> -->\n\n  \n      <h2 style=\"text-align: center;\">Licenças</h2>\n      <div class=\"example-container\">\n          <mat-form-field style=\"width: 100%\">\n              <mat-select style=\"width: 100%\" placeholder=\"Unidade\"  [formControl]=\"unidadeCtrl\" [(value)]=\"selectedTipo\"  (valueChange)=\"GetLincenseUnidades()\" #singleSelect>\n                  <mat-option>\n                      <ngx-mat-select-search [formControl]=\"unidadeFilterCtrl\"></ngx-mat-select-search>\n                  </mat-option>                 \n                  <mat-option>-- None --</mat-option>\n                <mat-option *ngFor=\"let unidade of filteredUnidade | async\" [value]=\"unidade\">\n                  {{unidade.razaoSocial}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>         \n        <div>\n          <button title=\"Create\" mat-raised-button color=\"accent\" [disabled]=\"selectedTipo==null\" (click)=\"addLicense()\">Adicionar</button></div>\n        <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\">\n\n          <!-- Id Column -->\n          <!-- <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container> -->\n\n          <!-- Os Column -->\n          <ng-container matColumnDef=\"os\">\n            <mat-header-cell *matHeaderCellDef> Os </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.os}} </mat-cell>\n          </ng-container>\n\n          <!-- chave de hardware Column -->\n          <ng-container matColumnDef=\"chaveDeHardware\">\n            <mat-header-cell *matHeaderCellDef> Chave de Hardware </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.chaveDeHardware}} </mat-cell>\n          </ng-container>\n\n          <!-- identificador fiscal  Column\n          <ng-container matColumnDef=\"identificadorFiscal\">\n            <mat-header-cell *matHeaderCellDef> Identicador Fiscal </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.identificadorFiscal}} </mat-cell>\n          </ng-container> -->\n\n          <!-- validade Column -->\n          <ng-container matColumnDef=\"validade\">\n            <mat-header-cell *matHeaderCellDef> Validade </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.validade | date: 'dd/MM/yyyy' }} </mat-cell>\n          </ng-container>\n\n          <!-- Situação Column -->\n          <ng-container matColumnDef=\"situacao\">\n            <mat-header-cell *matHeaderCellDef> Situação </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.situacao}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <mat-header-cell class=\"center\" mat-header-cell *matHeaderCellDef> Operação </mat-header-cell>\n            <mat-cell class=\"center\" mat-cell *matCellDef=\"let element\">\n              <button title=\"Editar\" mat-raised-button color=\"primary\" (click)=\"editLicense(element.id)\">Editar</button>&nbsp;\n              <button title=\"Remover\" mat-raised-button color=\"warn\" (click)=\"deleteLicense(element.id)\">Remover</button>&nbsp;\n              <button title=\"Detalhe\" mat-raised-button (click)=\"getDetails(element.id)\">Detalhe</button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>      \n      </div>\n    </div>\n\n    <!-- </ng-template> -->\n    "

/***/ }),

/***/ "./src/app/licenseList/list-license/list-license.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/licenseList/list-license/list-license.component.ts ***!
  \********************************************************************/
/*! exports provided: ListLicenseComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLicenseComponent", function() { return ListLicenseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_license__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/license */ "./src/app/models/license.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _services_license_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/license.service */ "./src/app/services/license.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../licenseForm/form-license/form-license.component */ "./src/app/licenseForm/form-license/form-license.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ListLicenseComponent = /** @class */ (function () {
    function ListLicenseComponent(snackBar, bottomSheet, _licenseServices, _unidadeService, dialog) {
        this.snackBar = snackBar;
        this.bottomSheet = bottomSheet;
        this._licenseServices = _licenseServices;
        this._unidadeService = _unidadeService;
        this.dialog = dialog;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.unidadeFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.unidadeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.filteredUnidade = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        // set columns that will need to show in listing table
        this.displayedColumns = ['os', 'chaveDeHardware', 'validade', 'situacao', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListLicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingState = true;
        this.loadLicenes();
        this.loadUnidade();
        this.loadDetalheUnidade();
        this.unidadeFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterUnidade();
        });
        this.dataSource.paginator = this.paginator;
    };
    ListLicenseComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    ListLicenseComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    ListLicenseComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredUnidade
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // setting the compareWith property to a comparison function 
            // triggers initializing the selection according to the initial value of 
            // the form control (i.e. _initializeSelection())
            // this needs to be done after the filteredBanks are loaded initially 
            // and after the mat-option elements are available
            _this.singleSelect.compareWith = function (a, b) { return a && b && a.id === b.id; };
        });
    };
    ListLicenseComponent.prototype.filterUnidade = function () {
        if (!this.unidades) {
            return;
        }
        // get the search keyword
        var search = this.unidadeFilterCtrl.value;
        if (!search) {
            this.filteredUnidade.next(this.unidades.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the unidade
        this.filteredUnidade.next(this.unidades.filter(function (c) { return c.razaoSocial.toLowerCase().indexOf(search) > -1; }));
    };
    ListLicenseComponent.prototype.loadDetalheUnidade = function () {
        var _this = this;
        this._unidadeService.getDetalheUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/propriedadeunidades').subscribe(function (resultado) {
            _this.unidades = resultado;
            _this.unidadeCtrl.setValue(_this.unidades);
            _this.filteredUnidade.next(_this.unidades.slice());
        });
    };
    ListLicenseComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_licenseForm_form_license_form_license_component__WEBPACK_IMPORTED_MODULE_7__["FormLicenseComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.license }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadLicenes();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Licença cadastrada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Licença alterada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Licença removida com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    ListLicenseComponent.prototype.GetLincenseUnidades = function () {
        var _this = this;
        if (this.selectedTipo !== undefined) {
            this._unidadeService.getAllLicenseUnidadesById(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/license/getLecensesbyunidadeid', this.selectedTipo.identificadorFiscal)
                .subscribe(function (licenses) {
                _this.loadingState = false;
                _this.dataSource.data = licenses;
            });
        }
        else {
            this.loadingState = true;
            this.loadLicenes();
        }
    };
    ListLicenseComponent.prototype.loadUnidade = function () {
        var _this = this;
        this._unidadeService.getAllUnidades(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
            .subscribe(function (unidade) {
            _this.loadingState = false;
            _this.unidades = unidade;
        });
    };
    ListLicenseComponent.prototype.loadLicenes = function () {
        var _this = this;
        if (this.selectedTipo !== undefined) {
            this.GetLincenseUnidades();
        }
        else {
            this._licenseServices.getAllLicenses(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/license/getAll')
                .subscribe(function (licenses) {
                _this.loadingState = false;
                _this.dataSource.data = licenses;
            });
        }
    };
    // loadLicenes(): void {
    //   this._licenseServices.getAllLicenses(Global.BASE_USER_ENDPOINT + 'api/license/getAll')
    //     .subscribe(licenses => {
    //       this.loadingState = false;
    //       this.dataSource.data = licenses;
    //     });
    // }
    ListLicenseComponent.prototype.addLicense = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Adicionar nova licença';
        this.modalBtnTitle = 'Adicionar';
        this.license = new _models_license__WEBPACK_IMPORTED_MODULE_3__["License"]();
        this.license.os = this.selectedTipo.os;
        this.license.identificadorFiscal = this.selectedTipo.identificadorFiscal;
        this.license.id = null;
        this.license.chaveDeHardware = '';
        this.license.contratoId = this.selectedTipo.id;
        this.license.situacao = '';
        this.license.tipo = null;
        this.license.validade = '';
        this.license.objetoId = 0;
        this.openDialog();
    };
    ListLicenseComponent.prototype.editLicense = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Editar licença';
        this.modalBtnTitle = 'Editar';
        this.license = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ListLicenseComponent.prototype.deleteLicense = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar essa licença ?';
        this.modalBtnTitle = 'Remover';
        this.license = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ListLicenseComponent.prototype.getDetails = function (id) {
        var _this = this;
        if (this.selectedTipo == undefined) {
            this.showMessage("Por favor, selecione uma unidade");
        }
        this._licenseServices.getDetails(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/detalhe/v1/detalhes', this.selectedTipo.id, id)
            .subscribe(function (details) {
            _this.details = details;
            _this.bottomSheet.open(BottomSheetOverviewExampleSheet, { data: { details: _this.details }, });
        });
        // const dialogRef = this.dialog.open(FormLicenseComponent, {
        //   width: '500px',
        //   data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.license }
        // });
    };
    ListLicenseComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListLicenseComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])
    ], ListLicenseComponent.prototype, "singleSelect", void 0);
    ListLicenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-license',
            template: __webpack_require__(/*! ./list-license.component.html */ "./src/app/licenseList/list-license/list-license.component.html"),
            styles: [__webpack_require__(/*! ./list-license.component.css */ "./src/app/licenseList/list-license/list-license.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            _services_license_service__WEBPACK_IMPORTED_MODULE_5__["LicenseService"],
            _services_unidade_service__WEBPACK_IMPORTED_MODULE_0__["UnidadeService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListLicenseComponent);
    return ListLicenseComponent;
}());

var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(data) {
        this.data = data;
        this._details = data.details;
    }
    BottomSheetOverviewExampleSheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bottom-sheet-overview-example-sheet',
            template: ' passed in {{data.details}}',
            template: __webpack_require__(/*! ./list-license.component.detalhe.html */ "./src/app/licenseList/list-license/list-license.component.detalhe.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/app/login/formlogin/formlogin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login/formlogin/formlogin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n.signin-content {\n  padding: 60px 1rem;\n}\n.full-width-input {\n  width: 100%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/login/formlogin/formlogin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login/formlogin/formlogin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-content\">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\n          <p>App License</p>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Usuário\" formControlName=\"userName\" required>\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\n              Por favor seu usuário\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"isFieldInvalid('userName')\">\n              Por favor informar sua senha\n            </mat-error>\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\">Login</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/formlogin/formlogin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login/formlogin/formlogin.component.ts ***!
  \********************************************************/
/*! exports provided: FormloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormloginComponent", function() { return FormloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/first */ "./node_modules/rxjs/internal/operators/first.js");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authService */ "./src/app/services/authService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormloginComponent = /** @class */ (function () {
    function FormloginComponent(fb, // {3}
    authService, route, snackBar, alertService, router) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.snackBar = snackBar;
        this.alertService = alertService;
        this.router = router;
        this.usuarioLogado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
        this.submitted = false;
    }
    FormloginComponent.prototype.feedBack = function () {
        console.log(this.f.userName.value);
    };
    FormloginComponent.prototype.ngOnInit = function () {
        this.formLogin = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/frmdasboard';
    };
    FormloginComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.formLogin.get(field).valid && this.formLogin.get(field).touched) ||
            (this.formLogin.get(field).untouched && this.formSubmitAttempt));
    };
    Object.defineProperty(FormloginComponent.prototype, "f", {
        get: function () { return this.formLogin.controls; },
        enumerable: true,
        configurable: true
    });
    FormloginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.formLogin.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.userName.value, this.f.password.value)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            // this.location.reload();
            _this.usuarioLogado.emit({ "logado": true });
        }, function (error) {
            _this.showMessage('Usuário ou senha inválido');
            _this.loading = false;
        });
    };
    FormloginComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormloginComponent.prototype, "usuarioLogado", void 0);
    FormloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formlogin',
            template: __webpack_require__(/*! ./formlogin.component.html */ "./src/app/login/formlogin/formlogin.component.html"),
            styles: [__webpack_require__(/*! ./formlogin.component.css */ "./src/app/login/formlogin/formlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_authService__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FormloginComponent);
    return FormloginComponent;
}());



/***/ }),

/***/ "./src/app/models/RegistrationValidator.ts":
/*!*************************************************!*\
  !*** ./src/app/models/RegistrationValidator.ts ***!
  \*************************************************/
/*! exports provided: RegistrationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationValidator", function() { return RegistrationValidator; });
var RegistrationValidator = /** @class */ (function () {
    function RegistrationValidator() {
    }
    RegistrationValidator.validate = function (registrationFormGroup) {
        var password = registrationFormGroup.controls.password.value;
        var repeatPassword = registrationFormGroup.controls.confirmPassword.value;
        if (repeatPassword == null)
            return null;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return RegistrationValidator;
}());



/***/ }),

/***/ "./src/app/models/conciliacaoBancaria.ts":
/*!***********************************************!*\
  !*** ./src/app/models/conciliacaoBancaria.ts ***!
  \***********************************************/
/*! exports provided: ConciliacaoBancaria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciliacaoBancaria", function() { return ConciliacaoBancaria; });
var ConciliacaoBancaria = /** @class */ (function () {
    function ConciliacaoBancaria() {
    }
    return ConciliacaoBancaria;
}());



/***/ }),

/***/ "./src/app/models/contaFinanceira.ts":
/*!*******************************************!*\
  !*** ./src/app/models/contaFinanceira.ts ***!
  \*******************************************/
/*! exports provided: ContaFinanceira */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaFinanceira", function() { return ContaFinanceira; });
var ContaFinanceira = /** @class */ (function () {
    function ContaFinanceira() {
    }
    return ContaFinanceira;
}());



/***/ }),

/***/ "./src/app/models/contasApagar.ts":
/*!****************************************!*\
  !*** ./src/app/models/contasApagar.ts ***!
  \****************************************/
/*! exports provided: ContasApagar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasApagar", function() { return ContasApagar; });
var ContasApagar = /** @class */ (function () {
    /**
     *
     */
    function ContasApagar() {
        this.valor = 0.0;
        this.desconto = 0.0;
    }
    return ContasApagar;
}());



/***/ }),

/***/ "./src/app/models/contasApagarSearch.ts":
/*!**********************************************!*\
  !*** ./src/app/models/contasApagarSearch.ts ***!
  \**********************************************/
/*! exports provided: ContasApagarSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasApagarSearch", function() { return ContasApagarSearch; });
var ContasApagarSearch = /** @class */ (function () {
    function ContasApagarSearch() {
    }
    return ContasApagarSearch;
}());



/***/ }),

/***/ "./src/app/models/contasAreceber.ts":
/*!******************************************!*\
  !*** ./src/app/models/contasAreceber.ts ***!
  \******************************************/
/*! exports provided: ContasAReceber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAReceber", function() { return ContasAReceber; });
var ContasAReceber = /** @class */ (function () {
    function ContasAReceber() {
        this.valor = 0.0;
    }
    return ContasAReceber;
}());



/***/ }),

/***/ "./src/app/models/details.ts":
/*!***********************************!*\
  !*** ./src/app/models/details.ts ***!
  \***********************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
var Details = /** @class */ (function () {
    function Details() {
    }
    return Details;
}());



/***/ }),

/***/ "./src/app/models/fornecedor.ts":
/*!**************************************!*\
  !*** ./src/app/models/fornecedor.ts ***!
  \**************************************/
/*! exports provided: Fornecedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fornecedor", function() { return Fornecedor; });
var Fornecedor = /** @class */ (function () {
    function Fornecedor() {
    }
    return Fornecedor;
}());



/***/ }),

/***/ "./src/app/models/license.ts":
/*!***********************************!*\
  !*** ./src/app/models/license.ts ***!
  \***********************************/
/*! exports provided: License */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "License", function() { return License; });
var License = /** @class */ (function () {
    function License() {
    }
    return License;
}());



/***/ }),

/***/ "./src/app/models/listId.ts":
/*!**********************************!*\
  !*** ./src/app/models/listId.ts ***!
  \**********************************/
/*! exports provided: ListId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListId", function() { return ListId; });
var ListId = /** @class */ (function () {
    function ListId() {
    }
    return ListId;
}());



/***/ }),

/***/ "./src/app/models/movimentacaoFinanceira.ts":
/*!**************************************************!*\
  !*** ./src/app/models/movimentacaoFinanceira.ts ***!
  \**************************************************/
/*! exports provided: MovimentacaoFinanceira */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoFinanceira", function() { return MovimentacaoFinanceira; });
var MovimentacaoFinanceira = /** @class */ (function () {
    function MovimentacaoFinanceira() {
    }
    return MovimentacaoFinanceira;
}());



/***/ }),

/***/ "./src/app/models/pagamento.ts":
/*!*************************************!*\
  !*** ./src/app/models/pagamento.ts ***!
  \*************************************/
/*! exports provided: Pagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagamento", function() { return Pagamento; });
var Pagamento = /** @class */ (function () {
    /**
     *
     */
    function Pagamento() {
        var data = new Date();
        this.competencia = data.getMonth();
    }
    return Pagamento;
}());



/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-form/pagamento-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {    \r\n    text-align: -webkit-center;    \r\n}    \r\n    \r\n.demo-toolbar {    \r\n    display: flex;    \r\n    align-items: center;    \r\n    width: 100%;    \r\n}    \r\n    \r\n.demo-form {    \r\n    min-width: 150px;    \r\n    max-width: 500px;    \r\n    width: 100%;    \r\n}    \r\n    \r\n.demo-full-width {    \r\n    width: 100%;    \r\n}    \r\n    \r\nbody {    \r\n    margin: 0;    \r\n    font-family: Roboto, sans-serif;    \r\n}    \r\n    \r\nmat-card {    \r\n    max-width: 80%;    \r\n    margin: 2em auto;    \r\n    text-align: center;    \r\n}    \r\n    \r\nmat-toolbar-row {    \r\n    justify-content: space-between;    \r\n}    \r\n    \r\n.done {    \r\n    position: fixed;    \r\n    bottom: 20px;    \r\n    right: 20px;    \r\n    color: white;    \r\n}    \r\n    \r\n.content-center {    \r\n    text-align: -webkit-center;    \r\n}    "

/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-form/pagamento-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-title>    \n    {{data.modalTitle}}  \n</mat-card-title>  \n<mat-card-content>\n<form  (ngSubmit)=\"onSubmit(pagamentoFrm)\"  [formGroup]=\"pagamentoFrm\">\n  \n  <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Os</mat-label>\n      <input matInput placeholder=\"Os\" formControlName=\"os\" id=\"inputRazaosocial\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.os\">\n        {{ formErrors.os }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Razão social</mat-label>\n    <input matInput placeholder=\"Razão social\"  formControlName=\"razaoSocial\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.razaoSocial\">\n      {{ formErrors.razaoSocial }}\n    </mat-error>\n  </mat-form-field>\n</div>\n\n<!-- <div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Identificador fiscal</mat-label>\n  <input matInput placeholder=\"Identificador fiscal\" formControlName=\"identificadorFiscal\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <!-- <mat-error *ngIf=\"formErrors.identificadorFiscal\">\n    {{ formErrors.identificadorFiscal }}\n  </mat-error>\n</mat-form-field>\n</div> --> \n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Nº da nota</mat-label>\n  <input matInput placeholder=\"Nº da nota\" formControlName=\"numeroDaNota\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.numeroDaNota\">\n    {{ formErrors.numeroDaNota }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Competência</mat-label>\n  <input type=\"number\" min=\"1\" max=\"12\" matInput placeholder=\"Competência\" formControlName=\"competencia\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.competencia\">\n    {{ formErrors.competencia }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Valor</mat-label>\n  <input currencyMask matInput formControlName=\"valor\">\n  <!-- <input matInput placeholder=\"Valor\" currencyMask  formControlName=\"valor\"> -->\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.valor\">\n    {{ formErrors.valor }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Data do pagamento\"  formControlName=\"dataPagamento\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n\n    <mat-error *ngIf=\"formErrors.dataPagamento \">\n      {{ formErrors.dataPagamento }}\n    </mat-error>\n    </mat-form-field>\n  </div>\n\n    <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Observação</mat-label>\n      <textarea  matInput placeholder=\"Observação\" formControlName=\"obs\"></textarea>\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->     \n    </mat-form-field>\n    </div>\n\n  <div>\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"pagamentoFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n\n</form>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-form/pagamento-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagamentoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoFormComponent", function() { return PagamentoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_pagamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pagamento.service */ "./src/app/services/pagamento.service.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_models_pagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/pagamento */ "./src/app/models/pagamento.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var PagamentoFormComponent = /** @class */ (function () {
    function PagamentoFormComponent(data, fb, _pagamentoService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._pagamentoService = _pagamentoService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'os': '',
            'razaoSocial': '',
            'identificadorFiscal': '',
            'competencia': '',
            'valor': '',
            'dataPagamento': '',
            'numeroDaNota': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'os': {
                'minlength': 'Nome da Os deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a Os.'
            },
            'razaoSocial': {
                'required': 'Informe a chave de razão social.'
            },
            'identificadorFiscal': {
                'required': 'Informe o identificador fiscal.'
            },
            'dataPagamento': {
                'required': 'Informe a data pagamento.'
            },
            'valor': {
                'required': 'Informe a valor.'
            },
            'competencia': {
                'required': 'Informe a competencia.'
            },
            'numeroDaNota': {
                'required': 'Informe o Nº da nota'
            }
        };
    }
    PagamentoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disabled = true;
        this.pagamentoFrm = this.fb.group({
            id: [''],
            os: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            razaoSocial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identificadorFiscal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            competencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dataPagamento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unidadeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            numeroDaNota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            obs: [''],
            usuarioId: []
        });
        // subscribe on value changed event of form to show validation message
        this.pagamentoFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.pagamentoFrm.setValue(this.data.license);
        }
        else {
            this.pagamentoFrm.setValue(this.data.license);
        }
        this.SetControlsState(this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
        this.pagamentoFrm.get('os').disable();
        this.pagamentoFrm.get('razaoSocial').disable();
        this.pagamentoFrm.get('identificadorFiscal').disable();
    };
    Object.defineProperty(PagamentoFormComponent.prototype, "f", {
        get: function () { return this.pagamentoFrm.controls; },
        enumerable: true,
        configurable: true
    });
    // form value change event
    PagamentoFormComponent.prototype.onValueChanged = function (data) {
        if (!this.pagamentoFrm) {
            return;
        }
        var form = this.pagamentoFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PagamentoFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var objPagamento = this.CreatePagamento();
        if (this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            if (new Date(objPagamento.dataPagamento).getDate() > new Date().getDate()) {
                this.pagamentoFrm.controls.dataPagamento.setValue("");
                return;
            }
        }
        var pagamentoData = this.mapDateData(objPagamento);
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        pagamentoData.usuarioId = currentUser.user.id;
        switch (this.data.dbops) {
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._pagamentoService.addPagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._pagamentoService.updatePagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData.id, pagamentoData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._pagamentoService.deletePagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos', pagamentoData.id, currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    PagamentoFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.pagamentoFrm.enable() : this.pagamentoFrm.disable();
    };
    PagamentoFormComponent.prototype.CreatePagamento = function () {
        var obj = new src_app_models_pagamento__WEBPACK_IMPORTED_MODULE_5__["Pagamento"]();
        obj.competencia = this.f.competencia.value;
        obj.id = this.f.id.value;
        obj.unidadeId = this.f.unidadeId.value;
        obj.os = this.f.os.value;
        obj.razaoSocial = this.f.razaoSocial.value;
        obj.identificadorFiscal = this.f.identificadorFiscal.value;
        obj.valor = this.f.valor.value;
        obj.obs = this.f.obs.value;
        obj.numeroDaNota = this.f.numeroDaNota.value;
        obj.dataPagamento = this.f.dataPagamento.value;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        obj.usuarioId = currentUser.user.id;
        return obj;
    };
    PagamentoFormComponent.prototype.mapDateData = function (pagamento) {
        pagamento.dataPagamento = new Date(pagamento.dataPagamento).toISOString();
        return pagamento;
    };
    PagamentoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagamento-form',
            template: __webpack_require__(/*! ./pagamento-form.component.html */ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.html"),
            styles: [__webpack_require__(/*! ./pagamento-form.component.css */ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["PagamentoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], PagamentoFormComponent);
    return PagamentoFormComponent;
}());



/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-list/pagamento-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .contactlist{\r\n  text-align: center;\r\n} */\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\nbody {\r\n  font-family: 'Covered By Your Grace', cursive;\r\n  line-height: 1.25;\r\n  \r\n}\r\n.mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n@media screen and (max-width: 960px) {\r\n  .mat-table {\r\n    border: 0;\r\n    vertical-align: middle\r\n  }\r\n\r\n  .mat-table caption {\r\n    font-size: 1em;\r\n  }\r\n  \r\n  /*  Enable this to hide header\r\n  .mat-table .mat-header-cell {\r\n    \r\n    border: 10px solid;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n  */\r\n  .mat-table .mat-row {\r\n    border-bottom: 5px solid #ddd;\r\n    display: block;\r\n  }\r\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\r\n  .mat-table .mat-cell {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 1em;\r\n    text-align: right;\r\n    font-weight: bold;\r\n    height:30px;\r\n    margin-bottom: 4%;\r\n  }\r\n  .mat-table .mat-cell:before {\r\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\r\n    content: attr(data-label);\r\n    float: left;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    \r\n    font-size: .85em;\r\n  }\r\n  .mat-table .mat-cell:last-child {\r\n    border-bottom: 0;\r\n  }\r\n    .mat-table .mat-cell:first-child {\r\n    margin-top: 4%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-list/pagamento-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else listPagamento\">\n    <mat-spinner></mat-spinner>\n</div>\n\n<!-- <ng-template class=\"licenselist\" #listLicense></ng-template> -->\n\n\n  <h2 style=\"text-align: center;\">Pagamentos</h2>\n  <div class=\"example-container\">\n      <mat-form-field style=\"width: 100%\">\n          <mat-select style=\"width: 100%\" placeholder=\"Unidade\"  [formControl]=\"unidadeCtrl\" [(value)]=\"selectedTipo\"  (valueChange)=\"GetPagamentoUnidades()\" #singleSelect>\n              <mat-option>\n                  <ngx-mat-select-search [formControl]=\"unidadeFilterCtrl\"></ngx-mat-select-search>\n              </mat-option>                 \n              <mat-option>-- None --</mat-option>\n            <mat-option *ngFor=\"let unidade of filteredUnidade | async\" [value]=\"unidade\">\n              {{unidade.razaoSocial}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>      \n    <div><button title=\"Create\" mat-raised-button color=\"accent\" [disabled]=\"selectedTipo==null || currentUser.user.super == false || currentUser.user.super==null\" (click)=\"addPagamento()\">Adicionar</button></div>\n    <div class=\"example-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <!-- Id Column -->\n      <!-- <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container> -->\n\n    <!-- Razao social Column -->\n    <ng-container matColumnDef=\"razaoSocial\">\n        <mat-header-cell *matHeaderCellDef> Razão social </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.razaoSocial}} </mat-cell>\n        <mat-footer-cell *matFooterCellDef> Total </mat-footer-cell>\n      </ng-container>\n\n      <!-- Os Column -->\n      <ng-container matColumnDef=\"os\">\n        <mat-header-cell *matHeaderCellDef> Os </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.os}} </mat-cell>\n        <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n      </ng-container>\n\n      <!-- chave de hardware Column -->\n      <ng-container matColumnDef=\"competencia\">\n        <mat-header-cell *matHeaderCellDef> Competência </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.competencia}} </mat-cell>\n        <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n      </ng-container>\n\n      <!-- identificador fiscal  Column -->\n      <ng-container matColumnDef=\"numeroDaNota\">\n        <mat-header-cell *matHeaderCellDef> Nº da Nota </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.numeroDaNota}} </mat-cell>\n        <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n      </ng-container>\n\n      <!-- validade Column -->\n      <ng-container matColumnDef=\"dataPagamento\">\n        <mat-header-cell *matHeaderCellDef> Data do Pagamento </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.dataPagamento | date: 'dd/MM/yyyy' }} </mat-cell>\n        <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n      </ng-container>\n\n      <!-- Situação Column -->\n      <ng-container matColumnDef=\"valor\">\n        <mat-header-cell *matHeaderCellDef> Valor </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.valor | currency:'R$'}} </mat-cell>\n        <mat-footer-cell *matFooterCellDef>{{total | currency:'R$'}}</mat-footer-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell class=\"center\" mat-header-cell *matHeaderCellDef> Operação </mat-header-cell>\n        <mat-cell class=\"center\" *matCellDef=\"let element\">\n          <button title=\"Editar\" mat-raised-button color=\"primary\" [disabled]=\"currentUser.user.super == false || currentUser.user.super == null\" (click)=\"editPagamento(element.id)\">Editar</button>&nbsp;\n          <button title=\"Remover\" mat-raised-button color=\"warn\" [disabled]=\"currentUser.user.super == false || currentUser.user.super == null\"(click)=\"deletePagamento(element.id)\">Remover</button>\n        </mat-cell>\n        <mat-footer-cell *matFooterCellDef> </mat-footer-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      <mat-footer-row *matFooterRowDef=\"displayedColumns\"></mat-footer-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n  </div>\n</div>\n<!-- </ng-template> -->\n"

/***/ }),

/***/ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagamentoForm/pagamento-list/pagamento-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagamentoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoListComponent", function() { return PagamentoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_pagamento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/pagamento */ "./src/app/models/pagamento.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_unidade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagamento-form/pagamento-form.component */ "./src/app/pagamentoForm/pagamento-form/pagamento-form.component.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_services_pagamento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pagamento.service */ "./src/app/services/pagamento.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PagamentoListComponent = /** @class */ (function () {
    function PagamentoListComponent(router, snackBar, _pagamentoServices, _unidadeService, dialog) {
        this.router = router;
        this.snackBar = snackBar;
        this._pagamentoServices = _pagamentoServices;
        this._unidadeService = _unidadeService;
        this.dialog = dialog;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.unidadeFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.unidadeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.filteredUnidade = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        // set columns that will need to show in listing table
        this.displayedColumns = ['razaoSocial', 'os', 'competencia', 'numeroDaNota', 'dataPagamento', 'valor', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    PagamentoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.user.super) {
            this.loadingState = true;
            this.loadPagamento();
            this.loadUnidade();
            this.loadDetalheUnidade();
            this.unidadeFilterCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
                .subscribe(function () {
                _this.filterUnidade();
            });
            this.dataSource.paginator = this.paginator;
        }
        else {
            this.showMessage('Usuário não tem permissão para realizar essa operação.');
            this.router.navigate(['/', '']);
        }
    };
    PagamentoListComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    PagamentoListComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    PagamentoListComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredUnidade
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // setting the compareWith property to a comparison function 
            // triggers initializing the selection according to the initial value of 
            // the form control (i.e. _initializeSelection())
            // this needs to be done after the filteredBanks are loaded initially 
            // and after the mat-option elements are available
            _this.singleSelect.compareWith = function (a, b) { return a && b && a.id === b.id; };
        });
    };
    PagamentoListComponent.prototype.filterUnidade = function () {
        if (!this.unidades) {
            return;
        }
        // get the search keyword
        var search = this.unidadeFilterCtrl.value;
        if (!search) {
            this.filteredUnidade.next(this.unidades.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the unidade
        this.filteredUnidade.next(this.unidades.filter(function (c) { return c.razaoSocial.toLowerCase().indexOf(search) > -1; }));
    };
    PagamentoListComponent.prototype.loadDetalheUnidade = function () {
        var _this = this;
        this._unidadeService.getDetalheUnidade(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/propriedadeunidades').subscribe(function (resultado) {
            _this.unidades = resultado;
            _this.unidadeCtrl.setValue(_this.unidades);
            _this.filteredUnidade.next(_this.unidades.slice());
        });
    };
    PagamentoListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pagamento_form_pagamento_form_component__WEBPACK_IMPORTED_MODULE_5__["PagamentoFormComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, license: this.pagamento }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadPagamento();
                switch (_this.dbops) {
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].create:
                        _this.showMessage('Pagamento cadastrada com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].update:
                        _this.showMessage('Pagamento alterada com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].delete:
                        _this.showMessage('Pagamento removida com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    PagamentoListComponent.prototype.GetPagamentoUnidades = function () {
        var _this = this;
        if (this.selectedTipo !== undefined) {
            this._unidadeService.getAllPagamentoUnidadesById(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentosbyunidade', this.selectedTipo.identificadorFiscal)
                .subscribe(function (pagamentos) {
                _this.loadingState = false;
                _this.dataSource.data = pagamentos;
                _this.valorTotal(pagamentos);
            });
        }
        else {
            this.loadingState = true;
            this.loadPagamento();
        }
    };
    PagamentoListComponent.prototype.loadUnidade = function () {
        var _this = this;
        this._unidadeService.getAllUnidades(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
            .subscribe(function (unidade) {
            _this.loadingState = false;
            _this.unidades = unidade;
        });
    };
    PagamentoListComponent.prototype.loadPagamento = function () {
        var _this = this;
        if (this.selectedTipo !== undefined) {
            this.GetPagamentoUnidades();
        }
        else {
            this._pagamentoServices.getAllPagamento(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'api/pagamento/v1/pagamentos')
                .subscribe(function (licenses) {
                _this.loadingState = false;
                _this.dataSource.data = licenses;
                _this.valorTotal(licenses);
            });
        }
    };
    PagamentoListComponent.prototype.valorTotal = function (pagamento) {
        var _this = this;
        var valorAntigo = 0;
        if (pagamento.length == 0) {
            this.total = 0;
            return;
        }
        pagamento.forEach(function (valor) {
            _this.total = _this.sum(valor.valor, valorAntigo);
            valorAntigo = _this.total;
        });
    };
    PagamentoListComponent.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    PagamentoListComponent.prototype.addPagamento = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].create;
        this.modalTitle = 'Adicionar novo pagamento';
        this.modalBtnTitle = 'Adicionar';
        this.pagamento = new src_app_models_pagamento__WEBPACK_IMPORTED_MODULE_1__["Pagamento"]();
        this.pagamento.os = this.selectedTipo.os;
        this.pagamento.identificadorFiscal = this.selectedTipo.identificadorFiscal;
        this.pagamento.id = null;
        this.pagamento.competencia = 0;
        this.pagamento.unidadeId = this.selectedTipo.id;
        this.pagamento.obs = '';
        this.pagamento.razaoSocial = this.selectedTipo.razaoSocial;
        this.pagamento.dataPagamento = '';
        this.pagamento.numeroDaNota = '';
        this.pagamento.valor = 0.0;
        this.pagamento.usuarioId = 0;
        this.openDialog();
    };
    PagamentoListComponent.prototype.editPagamento = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].update;
        this.modalTitle = 'Editar pagamento';
        this.modalBtnTitle = 'Editar';
        this.pagamento = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    PagamentoListComponent.prototype.deletePagamento = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar essa pagamento ?';
        this.modalBtnTitle = 'Remover';
        this.pagamento = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    PagamentoListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PagamentoListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], PagamentoListComponent.prototype, "singleSelect", void 0);
    PagamentoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagamento-list',
            template: __webpack_require__(/*! ./pagamento-list.component.html */ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.html"),
            styles: [__webpack_require__(/*! ./pagamento-list.component.css */ "./src/app/pagamentoForm/pagamento-list/pagamento-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_pagamento_service__WEBPACK_IMPORTED_MODULE_7__["PagamentoService"],
            src_app_services_unidade_service__WEBPACK_IMPORTED_MODULE_4__["UnidadeService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PagamentoListComponent);
    return PagamentoListComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/authService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/authService.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(_shared_Global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_USER_ENDPOINT + "api/account/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _shared_Global__WEBPACK_IMPORTED_MODULE_1__["Global"].SetCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
            }
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/conciliacao-bancaria.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/conciliacao-bancaria.service.ts ***!
  \**********************************************************/
/*! exports provided: ConciliacaoBancariaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciliacaoBancariaService", function() { return ConciliacaoBancariaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ConciliacaoBancariaService = /** @class */ (function () {
    function ConciliacaoBancariaService(_http) {
        this._http = _http;
    }
    ConciliacaoBancariaService.prototype.listPagamentoParaConciliacaoOuJaConciliado = function (url, contaId, data) {
        var newUrl = url + "/" + contaId + "/" + data;
        return this._http.get(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ConciliacaoBancariaService.prototype.listPagamentoParaConciliacaoOuJaConciliadoDoMes = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ConciliacaoBancariaService.prototype.baixarPagamento = function (url, listPagamento, userId) {
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(listPagamento);
        return this._http.post(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ConciliacaoBancariaService.prototype.desfazerConciliacao = function (url, listPagamento, userId) {
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(listPagamento);
        return this._http.put(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ConciliacaoBancariaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ConciliacaoBancariaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConciliacaoBancariaService);
    return ConciliacaoBancariaService;
}());



/***/ }),

/***/ "./src/app/services/conta.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/conta.service.ts ***!
  \*******************************************/
/*! exports provided: ContaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaService", function() { return ContaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ContaService = /** @class */ (function () {
    function ContaService(http) {
        this.http = http;
    }
    // get all Conta Financeira data
    ContaService.prototype.getAllConta = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new conta details
    ContaService.prototype.addContaFinanceira = function (url, conta) {
        var body = JSON.stringify(conta);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update conta details
    ContaService.prototype.updateConta = function (url, id, conta) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, conta, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete conta information
    ContaService.prototype.deleteConta = function (url, id) {
        var newurl = url + "?id=" + id;
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ContaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ContaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContaService);
    return ContaService;
}());



/***/ }),

/***/ "./src/app/services/contas-apagar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/contas-apagar.service.ts ***!
  \***************************************************/
/*! exports provided: ContasAPagarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAPagarService", function() { return ContasAPagarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_listId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/listId */ "./src/app/models/listId.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ContasAPagarService = /** @class */ (function () {
    function ContasAPagarService(_http) {
        this._http = _http;
    }
    ContasAPagarService.prototype.add = function (url, contasApagar, userId) {
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(contasApagar);
        return this._http.post(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAPagarService.prototype.update = function (url, id, contasApagar, userId) {
        var newUrl = url + "?userId=" + userId + "&id=" + id;
        return this._http.put(newUrl, contasApagar, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAPagarService.prototype.delete = function (url, id, idUser) {
        var newUrl = url + "?id=" + id + "&idUser=" + idUser;
        return this._http.delete(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAPagarService.prototype.getAll = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAPagarService.prototype.getAdvanced = function (url, contasApagarSearch) {
        var body = JSON.stringify(contasApagarSearch);
        return this._http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAPagarService.prototype.getCancelarPagamento = function (url, listId, userId) {
        var lst = new _models_listId__WEBPACK_IMPORTED_MODULE_4__["ListId"]();
        lst.listId = listId;
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(lst);
        return this._http.post(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ContasAPagarService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ContasAPagarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContasAPagarService);
    return ContasAPagarService;
}());



/***/ }),

/***/ "./src/app/services/contas-areceber.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/contas-areceber.service.ts ***!
  \*****************************************************/
/*! exports provided: ContasAreceberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAreceberService", function() { return ContasAreceberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_listId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/listId */ "./src/app/models/listId.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ContasAreceberService = /** @class */ (function () {
    function ContasAreceberService(_http) {
        this._http = _http;
    }
    ContasAreceberService.prototype.add = function (url, contasAreceber, userId) {
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(contasAreceber);
        return this._http.post(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAreceberService.prototype.update = function (url, id, contasAreceber, userId) {
        var newUrl = url + "?id=" + id + "&userId=" + userId;
        return this._http.put(newUrl, contasAreceber, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAreceberService.prototype.delete = function (url, id, idUser) {
        var newUrl = url + "?id=" + id + "&idUser=" + idUser;
        return this._http.delete(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAreceberService.prototype.getAll = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAreceberService.prototype.getAdvanced = function (url, contasAreceberSearch) {
        var body = JSON.stringify(contasAreceberSearch);
        return this._http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ContasAreceberService.prototype.getCancelarPagamento = function (url, listId, userId) {
        var lst = new _models_listId__WEBPACK_IMPORTED_MODULE_4__["ListId"]();
        lst.listId = listId;
        var newUrl = url + "?userId=" + userId;
        var body = JSON.stringify(lst);
        return this._http.post(newUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ContasAreceberService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ContasAreceberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContasAreceberService);
    return ContasAreceberService;
}());



/***/ }),

/***/ "./src/app/services/fornecedor.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/fornecedor.service.ts ***!
  \************************************************/
/*! exports provided: FornecedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorService", function() { return FornecedorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var FornecedorService = /** @class */ (function () {
    function FornecedorService(http) {
        this.http = http;
    }
    FornecedorService.prototype.getAll = function (url, all) {
        var newUrl = url + "/" + all;
        return this.http.get(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FornecedorService.prototype.getById = function (url, id) {
        var newurl = url + "/" + id;
        return this.http.get(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FornecedorService.prototype.add = function (url, fornecedor) {
        var body = JSON.stringify(fornecedor);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FornecedorService.prototype.update = function (url, id, fornecedor) {
        var newUrl = url + "?id=" + id;
        return this.http.put(newUrl, fornecedor, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FornecedorService.prototype.delete = function (url, id) {
        var newUrl = url + "?id=" + id;
        return this.http.delete(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    FornecedorService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    FornecedorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FornecedorService);
    return FornecedorService;
}());



/***/ }),

/***/ "./src/app/services/home.dashboard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/home.dashboard.service.ts ***!
  \****************************************************/
/*! exports provided: HomeDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDashboardService", function() { return HomeDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var HomeDashboardService = /** @class */ (function () {
    function HomeDashboardService(http) {
        this.http = http;
    }
    // get all license data
    HomeDashboardService.prototype.getAllUnidadeLicense = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    HomeDashboardService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HomeDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeDashboardService);
    return HomeDashboardService;
}());



/***/ }),

/***/ "./src/app/services/license.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/license.service.ts ***!
  \*********************************************/
/*! exports provided: LicenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseService", function() { return LicenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var LicenseService = /** @class */ (function () {
    function LicenseService(http) {
        this.http = http;
    }
    // get all license data
    LicenseService.prototype.getAllLicenses = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    LicenseService.prototype.getById = function (url, id) {
        var newUrl = url + "?id=" + id;
        return this.http.get(newUrl);
    };
    // insert new license details
    LicenseService.prototype.addLicense = function (url, license) {
        var body = JSON.stringify(license);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    LicenseService.prototype.getDetails = function (url, unidadeId, id) {
        var newurl = url + "?unidadeId=" + unidadeId + "&id=" + id;
        return this.http.get(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update license details
    LicenseService.prototype.updateLicense = function (url, id, license) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, license, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information
    LicenseService.prototype.deleteLicense = function (url, id, usuarioId) {
        var newurl = url + "?id=" + id + "&usuarioid=" + usuarioId; // DELETE api/contact?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    LicenseService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    LicenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LicenseService);
    return LicenseService;
}());



/***/ }),

/***/ "./src/app/services/movimentacao-financeira-servico.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/movimentacao-financeira-servico.service.ts ***!
  \*********************************************************************/
/*! exports provided: MovimentacaoFinanceiraServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoFinanceiraServicoService", function() { return MovimentacaoFinanceiraServicoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var MovimentacaoFinanceiraServicoService = /** @class */ (function () {
    function MovimentacaoFinanceiraServicoService(http) {
        this.http = http;
    }
    // get all license data
    MovimentacaoFinanceiraServicoService.prototype.getAllById = function (url, contaId, data) {
        var newUrl = url + "?id=" + contaId + "&data=" + data;
        return this.http.get(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovimentacaoFinanceiraServicoService.prototype.getAll = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovimentacaoFinanceiraServicoService.prototype.adicionar = function (url, movimentacao) {
        var body = JSON.stringify(movimentacao);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovimentacaoFinanceiraServicoService.prototype.desativar = function (url, id, usuarioId) {
        var newUrl = url + "?id=" + id + "&userId=" + usuarioId;
        return this.http.get(newUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    MovimentacaoFinanceiraServicoService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    MovimentacaoFinanceiraServicoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovimentacaoFinanceiraServicoService);
    return MovimentacaoFinanceiraServicoService;
}());



/***/ }),

/***/ "./src/app/services/operacao.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/operacao.service.ts ***!
  \**********************************************/
/*! exports provided: OperacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacaoService", function() { return OperacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var OperacaoService = /** @class */ (function () {
    function OperacaoService(_http) {
        this._http = _http;
    }
    OperacaoService.prototype.getAll = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OperacaoService.prototype.getAllCredito = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OperacaoService.prototype.getAllDebito = function (url) {
        return this._http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    OperacaoService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    OperacaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OperacaoService);
    return OperacaoService;
}());



/***/ }),

/***/ "./src/app/services/pagamento.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pagamento.service.ts ***!
  \***********************************************/
/*! exports provided: PagamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoService", function() { return PagamentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var PagamentoService = /** @class */ (function () {
    function PagamentoService(http) {
        this.http = http;
    }
    // get all Pagamento data
    PagamentoService.prototype.getAllPagamento = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new pagamento details
    PagamentoService.prototype.addPagamento = function (url, pagamento) {
        var body = JSON.stringify(pagamento);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update pagamento details
    PagamentoService.prototype.updatePagamento = function (url, id, pagamento) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, pagamento, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information
    PagamentoService.prototype.deletePagamento = function (url, id, usuarioId) {
        var newurl = url + "?id=" + id + "&usuarioid=" + usuarioId; // DELETE api/contact?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    PagamentoService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    PagamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PagamentoService);
    return PagamentoService;
}());



/***/ }),

/***/ "./src/app/services/tipo-doc.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tipo-doc.service.ts ***!
  \**********************************************/
/*! exports provided: TipoDocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDocService", function() { return TipoDocService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var TipoDocService = /** @class */ (function () {
    function TipoDocService(http) {
        this.http = http;
    }
    TipoDocService.prototype.getAll = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    TipoDocService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    TipoDocService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TipoDocService);
    return TipoDocService;
}());



/***/ }),

/***/ "./src/app/services/tipo-mov-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/tipo-mov-service.service.ts ***!
  \******************************************************/
/*! exports provided: TipoMovServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMovServiceService", function() { return TipoMovServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var TipoMovServiceService = /** @class */ (function () {
    function TipoMovServiceService(http) {
        this.http = http;
    }
    TipoMovServiceService.prototype.getAll = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    TipoMovServiceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    TipoMovServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TipoMovServiceService);
    return TipoMovServiceService;
}());



/***/ }),

/***/ "./src/app/services/unidade.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/unidade.service.ts ***!
  \*********************************************/
/*! exports provided: UnidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeService", function() { return UnidadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UnidadeService = /** @class */ (function () {
    function UnidadeService(http) {
        this.http = http;
    }
    UnidadeService.prototype.getAllLicenseUnidadesById = function (url, id) {
        var newurl = url + "?id=" + id;
        return this.http.get(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UnidadeService.prototype.getDetalheUnidade = function (url) {
        return this.http.get(url);
    };
    UnidadeService.prototype.getUnidade = function (url, id) {
        var newurl = url + "/" + id;
        return this.http.get(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UnidadeService.prototype.getAllPagamentoUnidadesById = function (url, id) {
        var newurl = url + "?identificadorFiscal=" + id;
        return this.http.get(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // get all license data
    UnidadeService.prototype.getAllUnidades = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new license details
    UnidadeService.prototype.addUnidade = function (url, unidade) {
        var body = JSON.stringify(unidade);
        return this.http.post(url, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update license details
    UnidadeService.prototype.updateUnidade = function (url, id, unidade) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, unidade, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information
    UnidadeService.prototype.deleteUnidade = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/contact?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    UnidadeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    UnidadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UnidadeService);
    return UnidadeService;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    // get all license data
    UsuarioService.prototype.getAllUsuarios = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // get all license data
    UsuarioService.prototype.getAllUsuario = function (url) {
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new license details
    UsuarioService.prototype.addUsuario = function (url, usuario, usuarioLogado) {
        var body = JSON.stringify(usuario);
        var newurl = url + "?usuarioLogadoId=" + usuarioLogado;
        return this.http.post(newurl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new license details
    UsuarioService.prototype.updatePassword = function (url, usuario) {
        var body = JSON.stringify(usuario);
        return this.http.post(url, body, httpOptions);
    };
    // update license details
    UsuarioService.prototype.updateUsuario = function (url, id, usuario, usuarioLogado) {
        var newurl = url + "?id=" + id + "&usuarioLogadoId=" + usuarioLogado;
        return this.http.put(newurl, usuario, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information
    UsuarioService.prototype.deleteUsuario = function (url, id, usuarioLogado) {
        var newurl = url + "?id=" + id + "&usuarioid=" + usuarioLogado; // DELETE api/contact?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UsuarioService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.GetTipoContrato = function () {
        var tipoContrato = new Array();
        tipoContrato.push({ Id: 1, Descricao: 'Manutenção' });
        tipoContrato.push({ Id: 2, Descricao: 'Suporte' });
        tipoContrato.push({ Id: 3, Descricao: 'Licença' });
        return tipoContrato;
    };
    Global.GetTipoLicense = function () {
        var tipoLicense = new Array();
        tipoLicense.push({ id: 1, descricao: 'Trial' });
        tipoLicense.push({ id: 2, descricao: 'Produção' });
        return tipoLicense;
    };
    Global.GetTipoStatusApagarReceber = function () {
        var tipoStatus = new Array();
        tipoStatus.push({ id: 2, descricao: 'Agendada' });
        tipoStatus.push({ id: 1, descricao: 'Cancelada' });
        tipoStatus.push({ id: 3, descricao: 'Conciliado' });
        tipoStatus.push({ id: 4, descricao: 'Desativado' });
        tipoStatus.push({ id: 5, descricao: 'Recebido' });
        return tipoStatus;
    };
    Global.GetTipoContaCorrente = function () {
        var tipoContaCorrente = new Array();
        tipoContaCorrente.push({ id: 1, descricao: 'Conta corrente' });
        tipoContaCorrente.push({ id: 2, descricao: 'Conta aplicação' });
        tipoContaCorrente.push({ id: 3, descricao: 'Caixa - (Fundo Fixo)' });
        return tipoContaCorrente;
    };
    Global.SetCurrentUser = function (user) {
        this.currentUser = user;
    };
    Global.GetCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    Global.BASE_USER_ENDPOINT = 'http://40.114.77.37:8099/';
    // public static BASE_USER_ENDPOINT = 'https://localhost:5000/';
    // public static genders = [{
    //     name: 'Male',
    //     id: 0,
    // }, {
    //     name: 'Female',
    //     id: 1
    // }];
    Global.situacao = ['Ativa', 'Desativada'];
    return Global;
}());



/***/ }),

/***/ "./src/app/shared/date.adapter.ts":
/*!****************************************!*\
  !*** ./src/app/shared/date.adapter.ts ***!
  \****************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else if (displayFormat === 'inputMonth') {
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(month) + '/' + year;
        }
        else {
            return date.toDateString();
        }
    };
    AppDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return AppDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: 'inputMonth',
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/unidadeForm/form-unidade/form-unidade.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/unidadeForm/form-unidade/form-unidade.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unidadeForm/form-unidade/form-unidade.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/unidadeForm/form-unidade/form-unidade.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n  <form class=\"my-form\"  (ngSubmit)=\"onSubmit(unidadeFrm)\"  [formGroup]=\"unidadeFrm\">\n    <h2>{{data.modalTitle}}</h2>\n    <div>\n        <mat-form-field appearance=\"outline\">\n        <mat-label>Organização social</mat-label>\n        <input matInput placeholder=\"Os\" formControlName=\"os\" id=\"inputRazaosocial\">\n        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n        <!-- <mat-hint>Hint</mat-hint> -->\n        <mat-error *ngIf=\"formErrors.os\">\n          {{ formErrors.os }}\n        </mat-error>\n      </mat-form-field>\n    </div>\n  \n    <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Razão Social</mat-label>\n      <input matInput placeholder=\"Razão Social\"  formControlName=\"razaoSocial\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.razaoSocial\">\n        {{ formErrors.razaoSocial }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>CNPJ</mat-label>\n    <input matInput placeholder=\"Cnpj\" formControlName=\"cnpj\"  mask='00.000.000/0000-00'>\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.cnpj\">\n      {{ formErrors.cnpj }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <!-- <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Identificador Fiscal</mat-label>\n    <input matInput placeholder=\"Identificador Fiscal\" formControlName=\"identificadorFiscal\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <!-- <mat-error *ngIf=\"formErrors.identificadorFiscal\">\n      {{ formErrors.identificadorFiscal }}\n    </mat-error>\n  </mat-form-field>\n  </div> -->\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>N° Contrato</mat-label>\n    <input matInput placeholder=\"N° Contrato\" formControlName=\"numero\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.numero\">\n      {{ formErrors.numero }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-select placeholder=\"Tipo de Contrato\" formControlName=\"tipoContratos\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let tipoContratos  of tipoDeContratos\" [value]=\"tipoContratos.Id\">\n          {{ tipoContratos.Descricao }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.tipoContratos \">\n        {{ formErrors.tipoContratos }}\n      </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n      <mat-form-field appearance=\"outline\">\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Data do Vencimento\"  formControlName=\"dataDoVencimento\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n  \n      <mat-error *ngIf=\"formErrors.dataDoVencimento \">\n        {{ formErrors.dataDoVencimento }}\n      </mat-error>\n      </mat-form-field>\n    </div>\n  \n    <div>\n      <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"unidadeFrm.invalid\">{{data.modalBtnTitle}}</button>\n    </div>\n  \n    </form>\n  \n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/unidadeForm/form-unidade/form-unidade.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/unidadeForm/form-unidade/form-unidade.component.ts ***!
  \********************************************************************/
/*! exports provided: FormUnidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUnidadeComponent", function() { return FormUnidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_shared_date_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/date.adapter */ "./src/app/shared/date.adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var FormUnidadeComponent = /** @class */ (function () {
    function FormUnidadeComponent(data, fb, _unidadeService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._unidadeService = _unidadeService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // contact: IContact;
        this.tipoDeContratos = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'os': '',
            'razaoSocial': '',
            'cnpj': '',
            'tipoContratos': '',
            'numero': '',
            'dataDoVencimento': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'os': {
                'minlength': 'Organização social deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a Organização social.'
            },
            'razaoSocial': {
                'minlength': 'Razão social deve possuir no mínimo 2 caracteres.',
                'required': 'Informe a razão social.'
            },
            'cnpj': {
                'required': 'Informe o cnpj.'
            },
            'tipoContrato': {
                'required': 'Informe o tipo do contrato.'
            },
            'numero': {
                'required': 'Informe o Numero do Contrato.'
            },
            'dataDoVencimento': {
                'required': 'Informe data do vencimento .'
            }
        };
    }
    FormUnidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unidadeFrm = this.fb.group({
            id: [''],
            os: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            razaoSocial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            cnpj: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identificadorFiscal: [''],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoContratos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dataDoVencimento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.tipoDeContratos = _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].GetTipoContrato();
        // subscribe on value changed event of form to show validation message
        this.unidadeFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.unidadeFrm.reset();
        }
        else {
            this.unidadeFrm.setValue(this.data.unidade);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    FormUnidadeComponent.prototype.onValueChanged = function (data) {
        if (!this.unidadeFrm) {
            return;
        }
        var form = this.unidadeFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    FormUnidadeComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var unidadeData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._unidadeService.addUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._unidadeService.updateUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData.id, unidadeData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._unidadeService.deleteUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', unidadeData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    FormUnidadeComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.unidadeFrm.enable() : this.unidadeFrm.disable();
    };
    FormUnidadeComponent.prototype.mapDateData = function (unidade) {
        unidade.dataDoVencimento = new Date(unidade.dataDoVencimento).toISOString();
        return unidade;
    };
    FormUnidadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-unidade',
            template: __webpack_require__(/*! ./form-unidade.component.html */ "./src/app/unidadeForm/form-unidade/form-unidade.component.html"),
            styles: [__webpack_require__(/*! ./form-unidade.component.css */ "./src/app/unidadeForm/form-unidade/form-unidade.component.css")],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: src_app_shared_date_adapter__WEBPACK_IMPORTED_MODULE_6__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: src_app_shared_date_adapter__WEBPACK_IMPORTED_MODULE_6__["APP_DATE_FORMATS"]
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], FormUnidadeComponent);
    return FormUnidadeComponent;
}());



/***/ }),

/***/ "./src/app/unidadeLIst/list-unidade/list-unidade.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/unidadeLIst/list-unidade/list-unidade.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .spinner{\n    top: 45%;\n    left: 47%;\n    position: fixed;\n  }\n  .unidadelist-container, #paginator {\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n    max-width: 1200px;\n    max-height: 100%;\n    overflow: auto;\n    margin: 0 auto;\n  }\n  .center{\n      text-align: center;\n  } */\n\n\n\n  body {\n    font-family: 'Covered By Your Grace', cursive;\n    line-height: 1.25;\n    \n  }\n\n\n\n  @media screen and (max-width: 960px) {\n    .mat-table {\n      border: 0;\n      vertical-align: middle\n    }\n  \n    .mat-table caption {\n      font-size: 1em;\n    }\n    \n    /*  Enable this to hide header\n    .mat-table .mat-header-cell {\n      \n      border: 10px solid;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n    */\n    .mat-table .mat-row {\n      border-bottom: 5px solid #ddd;\n      display: block;\n    }\n    /*\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\n    */\n    .mat-table .mat-cell {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 1em;\n      text-align: right;\n      font-weight: bold;\n      height:30px;\n      margin-bottom: 4%;\n    }\n    .mat-table .mat-cell:before {\n      /*\n      * aria-label has no advantage, it won't be read inside a table\n      content: attr(aria-label);\n      */\n      content: attr(data-label);\n      float: left;\n      text-transform: uppercase;\n      font-weight: normal;\n      \n      font-size: .85em;\n    }\n    .mat-table .mat-cell:last-child {\n      border-bottom: 0;\n    }\n      .mat-table .mat-cell:first-child {\n      margin-top: 4%;\n    }\n  }"

/***/ }),

/***/ "./src/app/unidadeLIst/list-unidade/list-unidade.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/unidadeLIst/list-unidade/list-unidade.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"spinner\" *ngIf=\"loadingState; else listUnidade\">\n        <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n    <!-- <ng-template class=\"unidadelist\" #listUnidade> -->\n      <h2 style=\"text-align: center;\">Unidades</h2>\n      <div class=\"unidadelist-container mat-elevation-z8\">\n          <mat-form-field style=\"width: 100%\">\n              <mat-select style=\"width: 100%\" placeholder=\"Unidade\"  [formControl]=\"unidadeCtrl\" [(value)]=\"selectedTipo\"  (valueChange)=\"getUnidade()\" #singleSelect>\n                  <mat-option>\n                      <ngx-mat-select-search [formControl]=\"unidadeFilterCtrl\"></ngx-mat-select-search>\n                  </mat-option>                 \n                  <mat-option>-- None --</mat-option>\n                <mat-option *ngFor=\"let unidade of filteredUnidade | async\" [value]=\"unidade\">\n                  {{unidade.razaoSocial}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n        <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addUnidade()\">Adicionar</button></div>\n        <mat-table #table [dataSource]=\"dataSource\">\n\n          <!-- Id Column -->\n          <!-- <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container> -->\n\n          <!-- Os Column -->\n          <ng-container matColumnDef=\"os\">\n            <mat-header-cell *matHeaderCellDef> Organização Social </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.os}} </mat-cell>\n          </ng-container>\n\n          <!-- chave de hardware Column -->\n          <ng-container matColumnDef=\"razaoSocial\">\n            <mat-header-cell *matHeaderCellDef> Razao Social </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.razaoSocial}} </mat-cell>\n          </ng-container>\n\n           <!-- cnpj  Column -->\n           <ng-container matColumnDef=\"cnpj\">\n            <mat-header-cell *matHeaderCellDef> Cnpj </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.cnpj}}</mat-cell>\n          </ng-container>\n\n          <!-- cnpj  Identificador Fiscal -->\n          <ng-container matColumnDef=\"identificadorFiscal\">\n            <mat-header-cell *matHeaderCellDef> Identificador Fiscal </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.identificadorFiscal}} </mat-cell>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"action\">\n            <mat-header-cell class=\"center\" *matHeaderCellDef> Operação </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-button title=\"Editar\" mat-raised-button color=\"primary\" (click)=\"editUnidade(element.id)\">Editar</button>&nbsp;\n              <button mat-button title=\"Remover\" mat-raised-button color=\"warn\" (click)=\"deleteUnidade(element.id)\">Remover</button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row  *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <!-- </ng-template> -->\n\n   \n"

/***/ }),

/***/ "./src/app/unidadeLIst/list-unidade/list-unidade.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/unidadeLIst/list-unidade/list-unidade.component.ts ***!
  \********************************************************************/
/*! exports provided: ListUnidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUnidadeComponent", function() { return ListUnidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../unidadeForm/form-unidade/form-unidade.component */ "./src/app/unidadeForm/form-unidade/form-unidade.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListUnidadeComponent = /** @class */ (function () {
    function ListUnidadeComponent(snackBar, _unidadeService, dialog) {
        this.snackBar = snackBar;
        this._unidadeService = _unidadeService;
        this.dialog = dialog;
        this.unidadeFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.unidadeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.filteredUnidade = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        // set columns that will need to show in listing table
        this.displayedColumns = ['os', 'razaoSocial', 'cnpj', 'identificadorFiscal', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    ListUnidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingState = true;
        this.loadUnidades();
        this.loadDetalheUnidade();
        this.dataSource.paginator = this.paginator;
        this.unidadeFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterUnidade();
        });
    };
    ListUnidadeComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    ListUnidadeComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    ListUnidadeComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredUnidade
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // setting the compareWith property to a comparison function 
            // triggers initializing the selection according to the initial value of 
            // the form control (i.e. _initializeSelection())
            // this needs to be done after the filteredBanks are loaded initially 
            // and after the mat-option elements are available
            _this.singleSelect.compareWith = function (a, b) { return a && b && a.id === b.id; };
        });
    };
    ListUnidadeComponent.prototype.filterUnidade = function () {
        if (!this.unidades) {
            return;
        }
        // get the search keyword
        var search = this.unidadeFilterCtrl.value;
        if (!search) {
            this.filteredUnidade.next(this.unidades.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the unidade
        this.filteredUnidade.next(this.unidades.filter(function (c) { return c.razaoSocial.toLowerCase().indexOf(search) > -1; }));
    };
    ListUnidadeComponent.prototype.loadDetalheUnidade = function () {
        var _this = this;
        this._unidadeService.getDetalheUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/propriedadeunidades').subscribe(function (resultado) {
            _this.unidades = resultado;
            _this.unidadeCtrl.setValue(_this.unidades);
            _this.filteredUnidade.next(_this.unidades.slice());
        });
    };
    ListUnidadeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_unidadeForm_form_unidade_form_unidade_component__WEBPACK_IMPORTED_MODULE_5__["FormUnidadeComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, unidade: this.unidade }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadUnidades();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create:
                        _this.showMessage('Unidade cadastrada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update:
                        _this.showMessage('Unidade alterada com sucesso.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete:
                        _this.showMessage('Unidade removida com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    ListUnidadeComponent.prototype.loadUnidades = function () {
        var _this = this;
        this._unidadeService.getAllUnidades(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades')
            .subscribe(function (unidades) {
            _this.loadingState = false;
            _this.dataSource.data = unidades;
        });
    };
    ListUnidadeComponent.prototype.getUnidade = function () {
        var _this = this;
        if (this.selectedTipo == undefined)
            this.loadUnidades();
        else {
            this._unidadeService.getUnidade(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/unidade/v1/unidades', this.selectedTipo.id).subscribe(function (unidades) {
                _this.loadingState = false;
                _this.dataSource.data = unidades;
            });
        }
    };
    ListUnidadeComponent.prototype.addUnidade = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create;
        this.modalTitle = 'Adicionar nova unidade';
        this.modalBtnTitle = 'Adicionar';
        this.openDialog();
    };
    ListUnidadeComponent.prototype.editUnidade = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update;
        this.modalTitle = 'Editar unidade';
        this.modalBtnTitle = 'Editar';
        this.unidade = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ListUnidadeComponent.prototype.deleteUnidade = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar essa unidade ?';
        this.modalBtnTitle = 'Remover';
        this.unidade = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ListUnidadeComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListUnidadeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])
    ], ListUnidadeComponent.prototype, "singleSelect", void 0);
    ListUnidadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-unidade',
            template: __webpack_require__(/*! ./list-unidade.component.html */ "./src/app/unidadeLIst/list-unidade/list-unidade.component.html"),
            styles: [__webpack_require__(/*! ./list-unidade.component.css */ "./src/app/unidadeLIst/list-unidade/list-unidade.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListUnidadeComponent);
    return ListUnidadeComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/usuarioForm/usuario-form/usuario-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-form/usuario-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\r\n    margin: 10px;\r\n  }\r\n  \r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .example-margin {\r\n    margin: 0 10px;\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .checkbox{\r\n      margin-bottom: 3%;\r\n  }"

/***/ }),

/***/ "./src/app/usuarioForm/usuario-form/usuario-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-form/usuario-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n<form  (ngSubmit)=\"onSubmit(usuarioFrm)\"  [formGroup]=\"usuarioFrm\">\n  <h2>{{data.modalTitle}}</h2>\n  <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Nome Completo</mat-label>\n      <input matInput placeholder=\"Nome Completo\" formControlName=\"nomeCompleto\" id=\"inputRazaosocial\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.login\">\n        {{ formErrors.login }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Login</mat-label>\n    <input matInput placeholder=\"Login\"  formControlName=\"login\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.login\">\n      {{ formErrors.login }}\n    </mat-error>\n  </mat-form-field>\n</div>\n\n<div>\n  <mat-form-field appearance=\"outline\">\n  <mat-label>E-mail</mat-label>\n  <input matInput placeholder=\"E-mail\" formControlName=\"email\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.email\">\n    {{ formErrors.email }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div *ngIf=\"editsave\">\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Senha</mat-label>\n  <input matInput type=\"password\" placeholder=\"Senha\" formControlName=\"password\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.password\">\n    {{ formErrors.password }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div *ngIf=\"editsave\">\n  <mat-form-field appearance=\"outline\">\n  <mat-label>Confirmar senha</mat-label>\n  <input  type=\"password\" matInput placeholder=\"Confirmar senha\" formControlName=\"confirmPassword\">\n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n  <!-- <mat-hint>Hint</mat-hint> -->\n  <mat-error *ngIf=\"formErrors.confirmPassword\">\n    {{ formErrors.confirmPassword }}\n  </mat-error>\n</mat-form-field>\n</div>\n\n<div class=\"checkbox\">\n  <mat-checkbox  formControlName=\"super\">Super</mat-checkbox>\n</div>\n\n  <div>\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"usuarioFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n\n  </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/usuarioForm/usuario-form/usuario-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-form/usuario-form.component.ts ***!
  \********************************************************************/
/*! exports provided: UsuarioFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioFormComponent", function() { return UsuarioFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_models_RegistrationValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/RegistrationValidator */ "./src/app/models/RegistrationValidator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UsuarioFormComponent = /** @class */ (function () {
    function UsuarioFormComponent(data, fb, _usuarioService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._usuarioService = _usuarioService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'login': '',
            'nomeCompleto': '',
            'email': '',
            'password': '',
            'confirmPassword': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'login': {
                'minlength': 'Login deve possuir no mínimo 2 caracteres.',
                'required': 'Informe o login.'
            },
            'nomeCompleto': {
                'minlength': 'Nome completo deve possuir no mínimo 2 caracteres.',
                'required': 'Informe o nome completo.'
            },
            'email': {
                'required': 'Informe o e-mail.'
            },
            'password': {
                'required': 'Informe o senha.'
            },
            'confirmPassword': {
                'required': 'Confirme a senha.',
                'validate': 'Senhas não conferem.'
            }
            // 'identificadorFiscal': {
            //   'required': 'Informe o Identificador Fiscal.'
            // }
        };
    }
    UsuarioFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioFrm = this.fb.group({
            id: [''],
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            nomeCompleto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            super: [''],
        });
        this.usuarioFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.usuarioFrm.reset();
            this.editsave = true;
        }
        else {
            this.usuarioFrm.setValue(this.data.unidade);
            this.editsave = false;
        }
        this.SetControlsState(this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    UsuarioFormComponent.prototype.onValueChanged = function (data) {
        if (!this.usuarioFrm) {
            return;
        }
        var form = this.usuarioFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    UsuarioFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (this.data.dbops === src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            if (src_app_models_RegistrationValidator__WEBPACK_IMPORTED_MODULE_6__["RegistrationValidator"].validate(this.usuarioFrm)) {
                this.usuarioFrm.controls.confirmPassword.setValue("");
                return;
            }
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var usuarioData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._usuarioService.addUsuario(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData, currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._usuarioService.updateUsuario(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData.id, usuarioData, currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._usuarioService.deleteUsuario(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios', usuarioData.id, currentUser.user.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    UsuarioFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.usuarioFrm.enable() : this.usuarioFrm.disable();
    };
    UsuarioFormComponent.prototype.mapDateData = function (usuario) {
        return usuario;
    };
    UsuarioFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-form',
            template: __webpack_require__(/*! ./usuario-form.component.html */ "./src/app/usuarioForm/usuario-form/usuario-form.component.html"),
            styles: [__webpack_require__(/*! ./usuario-form.component.css */ "./src/app/usuarioForm/usuario-form/usuario-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UsuarioFormComponent);
    return UsuarioFormComponent;
}());



/***/ }),

/***/ "./src/app/usuarioForm/usuario-list/usuario-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-list/usuario-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Covered By Your Grace', cursive;\r\n  line-height: 1.25;\r\n  \r\n}\r\n\r\n\r\n@media screen and (max-width: 960px) {\r\n  .mat-table {\r\n    border: 0;\r\n    vertical-align: middle\r\n  }\r\n\r\n  .mat-table caption {\r\n    font-size: 1em;\r\n  }\r\n  \r\n  /*  Enable this to hide header\r\n  .mat-table .mat-header-cell {\r\n    \r\n    border: 10px solid;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n  */\r\n  .mat-table .mat-row {\r\n    border-bottom: 5px solid #ddd;\r\n    display: block;\r\n  }\r\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\r\n  .mat-table .mat-cell {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 1em;\r\n    text-align: right;\r\n    font-weight: bold;\r\n    height:30px;\r\n    margin-bottom: 4%;\r\n  }\r\n  .mat-table .mat-cell:before {\r\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\r\n    content: attr(data-label);\r\n    float: left;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    \r\n    font-size: .85em;\r\n  }\r\n  .mat-table .mat-cell:last-child {\r\n    border-bottom: 0;\r\n  }\r\n    .mat-table .mat-cell:first-child {\r\n    margin-top: 4%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/usuarioForm/usuario-list/usuario-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-list/usuario-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else usuarioList\">\n  <mat-spinner></mat-spinner>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n<!-- <ng-template class=\"unidadelist\" #listUnidade> -->\n<h2 style=\"text-align: center;\">Usuários</h2>\n<div class=\"unidadelist-container mat-elevation-z8\">\n  <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addUsuario()\">Adicionar</button></div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Id Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container> -->\n\n    <!-- login Column -->\n    <ng-container matColumnDef=\"login\">\n      <mat-header-cell *matHeaderCellDef> Login </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.login}} </mat-cell>\n    </ng-container>\n\n    <!-- chave de email Column -->\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> E-mail </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n    </ng-container>    \n\n\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell class=\"center\"  *matHeaderCellDef> Operação </mat-header-cell>\n      <mat-cell class=\"center\" mat-cell *matCellDef=\"let element\">\n        <button title=\"Editar\" mat-raised-button color=\"primary\" (click)=\"editUsuario(element.id)\">Editar</button>&nbsp;\n        <button title=\"Remover\" mat-raised-button color=\"warn\" (click)=\"deleteUsuario(element.id)\">Remover</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[6, 10]\" showFirstLastButtons></mat-paginator>\n</div>\n</div>\n<!-- </ng-template> -->"

/***/ }),

/***/ "./src/app/usuarioForm/usuario-list/usuario-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-list/usuario-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UsuarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioListComponent", function() { return UsuarioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario-form/usuario-form.component */ "./src/app/usuarioForm/usuario-form/usuario-form.component.ts");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioListComponent = /** @class */ (function () {
    function UsuarioListComponent(router, snackBar, _usuarioService, dialog) {
        this.snackBar = snackBar;
        this._usuarioService = _usuarioService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['login', 'email', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.router = router;
    }
    UsuarioListComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.user.super) {
            this.loadingState = true;
            this.loadUsuario();
            this.dataSource.paginator = this.paginator;
        }
        else {
            this.showMessage('Usuário não tem permissão para realizar essa operação.');
            this.router.navigate(['/', '']);
        }
    };
    UsuarioListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioFormComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, unidade: this.usuario }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadUsuario();
                switch (_this.dbops) {
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create:
                        _this.showMessage('Usuário cadastrado com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update:
                        _this.showMessage('Usuário alterado com sucesso.');
                        break;
                    case src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete:
                        _this.showMessage('Usuário removido com sucesso.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('Algo de errado não está certo!');
            }
            else {
                //this.showMessage('Por favor tente novamente mais tarde.');
                console.log('The dialog was closed');
            }
        });
    };
    UsuarioListComponent.prototype.loadUsuario = function () {
        var _this = this;
        this._usuarioService.getAllUsuarios(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios')
            .subscribe(function (unidades) {
            _this.loadingState = false;
            _this.dataSource.data = unidades;
        });
    };
    UsuarioListComponent.prototype.addUsuario = function () {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].create;
        this.modalTitle = 'Adicionar novo usuário';
        this.modalBtnTitle = 'Adicionar';
        this.openDialog();
    };
    UsuarioListComponent.prototype.editUsuario = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].update;
        this.modalTitle = 'Editar usuário';
        this.modalBtnTitle = 'Editar';
        this.usuario = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    UsuarioListComponent.prototype.deleteUsuario = function (id) {
        this.dbops = src_app_shared_DBOperation__WEBPACK_IMPORTED_MODULE_1__["DBOperation"].delete;
        this.modalTitle = 'Deseja deletar essa usuário ?';
        this.modalBtnTitle = 'Remover';
        this.usuario = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    UsuarioListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UsuarioListComponent.prototype, "paginator", void 0);
    UsuarioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-list',
            template: __webpack_require__(/*! ./usuario-list.component.html */ "./src/app/usuarioForm/usuario-list/usuario-list.component.html"),
            styles: [__webpack_require__(/*! ./usuario-list.component.css */ "./src/app/usuarioForm/usuario-list/usuario-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UsuarioListComponent);
    return UsuarioListComponent;
}());



/***/ }),

/***/ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }  \r\n "

/***/ }),

/***/ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content>\n<div class=\"wrapper\">\n  <form  (ngSubmit)=\"onSubmit(usuarioFrm)\"  [formGroup]=\"usuarioFrm\">\n    <h2 style=\"text-align:center\">\n      Alterar senha\n    </h2> \n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Senha antiga</mat-label>\n    <input matInput type=\"password\" placeholder=\"Senha Antiga\" formControlName=\"passwordOld\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.passwordOld\">\n      {{ formErrors.passwordOld }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Nova senha</mat-label>\n    <input matInput type=\"password\" placeholder=\"Nova senha\" formControlName=\"newPassword\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.newPassword\">\n      {{ formErrors.newPassword }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n  <div>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Confirmar nova senha</mat-label>\n    <input  type=\"password\" matInput placeholder=\"Confirmar senha\" formControlName=\"confirmPassword\">\n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    <!-- <mat-hint>Hint</mat-hint> -->\n    <mat-error *ngIf=\"formErrors.confirmPassword\">\n      {{ formErrors.confirmPassword }}\n    </mat-error>\n  </mat-form-field>\n  </div>\n  \n    <div>\n      <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialog.closeAll()\">Cancelar</button>&nbsp;\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"usuarioFrm.invalid\">Alterar</button>\n    </div>\n  \n    </form>\n</div>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UsuarioUpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioUpdatePasswordComponent", function() { return UsuarioUpdatePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var src_app_services_authService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authService */ "./src/app/services/authService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioUpdatePasswordComponent = /** @class */ (function () {
    function UsuarioUpdatePasswordComponent(authService, fb, snackBar, _usuarioService) {
        this.authService = authService;
        this.fb = fb;
        this.snackBar = snackBar;
        this._usuarioService = _usuarioService;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'passwordOld': '',
            'newPassword': '',
            'confirmPassword': ''
        };
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'passwordOld': {
                'required': 'Informe a senha antiga.'
            },
            'newPassword': {
                'required': 'Informe a nova senha.'
            },
            'confirmPassword': {
                'required': 'Confirme a senha.',
                'validate': 'Senhas não conferem.'
            }
            // 'identificadorFiscal': {
            //   'required': 'Informe o Identificador Fiscal.'
            // }
        };
    }
    UsuarioUpdatePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioFrm = this.fb.group({
            id: [''],
            passwordOld: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.usuarioFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    // form value change event
    UsuarioUpdatePasswordComponent.prototype.onValueChanged = function (data) {
        if (!this.usuarioFrm) {
            return;
        }
        var form = this.usuarioFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    UsuarioUpdatePasswordComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    UsuarioUpdatePasswordComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    UsuarioUpdatePasswordComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var password = this.usuarioFrm.controls.newPassword.value;
        var repeatPassword = this.usuarioFrm.controls.confirmPassword.value;
        if (password != repeatPassword) {
            this.showMessage("senha e confirmação de senha não combinam.");
            return;
        }
        var usuarioData = this.mapDateData(formData.value);
        this._usuarioService.updatePassword(src_app_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'api/usuario/v1/usuarios/novasenha', usuarioData).subscribe(function (data) {
            // Success
            if (data.message) {
                _this.showMessage(data.message);
                _this.onLogout();
            }
            else {
                _this.showMessage(data.error);
            }
        }, function (resposta) {
            var msg = 'erro inesperado. Tente novamente';
            if (resposta) {
                msg = resposta;
            }
            _this.showMessage(msg);
        });
    };
    UsuarioUpdatePasswordComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.usuarioFrm.enable() : this.usuarioFrm.disable();
    };
    UsuarioUpdatePasswordComponent.prototype.mapDateData = function (usuario) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        usuario.usuarioId = currentUser.user.id;
        return usuario;
    };
    UsuarioUpdatePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-update-password',
            template: __webpack_require__(/*! ./usuario-update-password.component.html */ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.html"),
            styles: [__webpack_require__(/*! ./usuario-update-password.component.css */ "./src/app/usuarioForm/usuario-update-password/usuario-update-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authService__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], UsuarioUpdatePasswordComponent);
    return UsuarioUpdatePasswordComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projetos\license-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map