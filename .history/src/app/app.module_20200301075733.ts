
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatHeaderCell } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatExpansionModule} from '@angular/material/expansion';

import { ListLicenseComponent, BottomSheetOverviewExampleSheet } from './licenseList/list-license/list-license.component';
import { FormLicenseComponent } from './licenseForm/form-license/form-license.component';
import { ListUnidadeComponent } from './unidadeLIst/list-unidade/list-unidade.component';
import { FormUnidadeComponent } from './unidadeForm/form-unidade/form-unidade.component';

import { NavegadorComponent } from './home/navegador/navegador.component';


import {LicenseService} from './services/license.service';
import { UnidadeService } from './services/unidade.service';
import { FormloginComponent } from './login/formlogin/formlogin.component';
import { AuthService } from './services/authService';
import { AuthGuard } from './services/auth/auth.guard';
import { AlertService } from './services/alert.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Helpers/jwt.interceptor';
import { ErrorInterceptor } from './Helpers/error.interceptor';
import { AlertComponent } from './diretivas/alert/alert.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeDashboardService } from './services/home.dashboard.service';
import { FooterComponent } from './footer/footer.component';
import { UsuarioFormComponent } from './usuarioForm/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuarioForm/usuario-list/usuario-list.component';
import { UsuarioService } from './services/usuario.service';
import { PagamentoFormComponent } from './pagamentoForm/pagamento-form/pagamento-form.component';
import { PagamentoListComponent } from './pagamentoForm/pagamento-list/pagamento-list.component';
import { PagamentoService } from './services/pagamento.service';
import { NumericDirective } from './diretivas/numericType';
import { CurrencyMaskModule } from "node_modules/ng2-currency-mask";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { UsuarioUpdatePasswordComponent } from './usuarioForm/usuario-update-password/usuario-update-password.component';
import { Details } from './models/details';
import { ContaListComponent } from './conta-list/conta-list.component';
import { ContaService } from './services/conta.service';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { FornecedorListComponent } from './Forms/Fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './Forms/Fornecedor/fornecedor-form/fornecedor-form.component';
import { ContasApagarListComponent} from './Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component';
import { ContasAPagarService } from './services/contas-apagar.service';
import { ContasApagarFormComponent } from './Forms/ContasApagar/contas-apagar-form/contas-apagar-form.component';
import { OperacaoService } from './services/operacao.service';
import { TipoDocService } from './services/tipo-doc.service';
import { ContasAreceberListComponent } from './Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component';
import { ContasAreceberService } from './services/contas-areceber.service';
import { DialogOverviewExampleDialog } from './Forms/Confirmacao/confirmacao';
import { ConciliacaoBancariaFormComponent } from './Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component';
import { MovimentacaoFinanceiraListComponent } from './Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component';
import { MovimentacaoFinanceiraFormComponent } from './Forms/MovimentacaoFinanceira/movimentacao-financeira-form/movimentacao-financeira-form.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListLicenseComponent,
    FormLicenseComponent,
    NavegadorComponent,
    ListUnidadeComponent,
    FormUnidadeComponent,
    FormloginComponent,
    AlertComponent,
    DashboardComponent,
    FooterComponent,    
    UsuarioFormComponent,
    UsuarioListComponent,
    PagamentoFormComponent,
    PagamentoListComponent,
    ContasApagarFormComponent,
    ContasAreceberFormComponent,
    ContaListComponent,
    ContaFormComponent,
    ConciliacaoBancariaFormComponent, 
    ContasApagarListComponent ,
    ContasAreceberListComponent,
    FornecedorFormComponent,
    NumericDirective,
    FornecedorListComponent,
    UsuarioUpdatePasswordComponent,
    MovimentacaoFinanceiraListComponent,
    MovimentacaoFinanceiraFormComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Routing,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    MatBottomSheetModule,
    MatBottomSheetModule,
    NgxMatSelectSearchModule,
    MatExpansionModule    

  ],
  entryComponents: [ContasApagarFormComponent,
                    FornecedorFormComponent,
                    MovimentacaoFinanceiraFormComponent,
                    ContaFormComponent,
                    ListLicenseComponent,
                    BottomSheetOverviewExampleSheet,
                    DialogOverviewExampleDialog],
  providers: [LicenseService,
             UnidadeService,
             AuthService,
             UsuarioService,
             PagamentoService,             
             ContaService,  
             OperacaoService,
             ContasAPagarService,
             ContasAreceberService,
             TipoDocService,   
             Details,           
             AuthGuard,
             AlertService,
             HomeDashboardService,
             MatHeaderCell,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
             { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
             { provide: LOCALE_ID, useValue: 'pt-BR' }
           
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
