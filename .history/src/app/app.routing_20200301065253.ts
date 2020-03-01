import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FormloginComponent } from './login/formlogin/formlogin.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListLicenseComponent } from './licenseList/list-license/list-license.component';
import { FormLicenseComponent } from './licenseForm/form-license/form-license.component';
import { NavegadorComponent } from './home/navegador/navegador.component';
import { FormUnidadeComponent } from './unidadeForm/form-unidade/form-unidade.component';
import { ListUnidadeComponent } from './unidadeLIst/list-unidade/list-unidade.component';
import { AuthGuard } from './services/auth/auth.guard';
import { UsuarioFormComponent } from './usuarioForm/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuarioForm/usuario-list/usuario-list.component';
import { PagamentoFormComponent } from './pagamentoForm/pagamento-form/pagamento-form.component';
import { PagamentoListComponent } from './pagamentoForm/pagamento-list/pagamento-list.component';
import { UsuarioUpdatePasswordComponent } from './usuarioForm/usuario-update-password/usuario-update-password.component';
import { ContaListComponent } from './conta-list/conta-list.component';
import { FornecedorListComponent } from './Forms/Fornecedor/fornecedor-list/fornecedor-list.component';
import { ContasApagarListComponent } from './Forms/ContasApagar/contas-apagar-list/contas-apagar-list.component';
import { ContasAreceberListComponent } from './Forms/ContaAreceber/contas-areceber-list/contas-areceber-list.component';
import { ConciliacaoBancariaFormComponent } from './Forms/ConciliacaoBancaria/conciliacao-bancaria-form/conciliacao-bancaria-form.component';
import { MovimentacaoFinanceiraListComponent } from './Forms/MovimentacaoFinanceira/movimentacao-financeira-list/movimentacao-financeira-list.component';

const appRoutes: Routes = [
  // { path: 'navegador' , component: NavegadorComponent, canActivate: [AuthGuard] },
  { path: 'login',  pathMatch: 'full' , component: FormloginComponent},
  { path: 'gerenciadorLicenses', component: ListLicenseComponent, canActivate: [AuthGuard]},
  { path: 'licenses', component: FormLicenseComponent, canActivate: [AuthGuard] },
  { path: 'unidades', component: ListUnidadeComponent, canActivate: [AuthGuard] },
  { path: 'frmunidades', component: FormUnidadeComponent, canActivate: [AuthGuard] },
  { path: 'frmdasboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'frmusuario', component: UsuarioFormComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuard] },
  { path: 'frmpagamento', component: PagamentoFormComponent, canActivate: [AuthGuard] },
  { path: 'pagamentos', component: PagamentoListComponent, canActivate: [AuthGuard] },
  { path: 'alterarsenha', component: UsuarioUpdatePasswordComponent, canActivate: [AuthGuard] },
  { path: 'contafinanceira', component: ContaListComponent, canActivate: [AuthGuard] }, 
  { path: 'fornecedores', component: FornecedorListComponent, canActivate: [AuthGuard] },  
  { path: 'contasPagar', component: ContasApagarListComponent, canActivate: [AuthGuard] },  
  { path: 'contasReceber', component: ContasAreceberListComponent, canActivate: [AuthGuard] },
  { path: 'conciliacaoBancaria', component: ConciliacaoBancariaFormComponent, canActivate: [AuthGuard] },  
  { path: 'home', component: NavegadorComponent, canActivate: [AuthGuard] },
  { path: 'movimentacaoFinanceira', component: MovimentacaoFinanceiraListComponent, canActivate: [AuthGuard] },  
  {path: 'login', component: FormloginComponent},


  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
