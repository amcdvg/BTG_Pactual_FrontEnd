import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { CardinfComponent } from './dashboard/card-infor/card-infor.component';
import { HistorialTransactionComponent } from './dashboard/historial-transaction/historial-transaction.component';
import {BondingFundComponent} from './dashboard/add-fund/add-fund.component'
import {CancelFundComponent} from './dashboard/cancel-fund/cancel-fund.component'
import { BalanceCardComponent} from './dashboard/balance-card/balance-card.component'


const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el componente de Login
  { path: 'welcome', component: AlertComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],  // Proteger esta ruta con un guard si es necesario
    children: [
      { path: 'info', component:  CardinfComponent }, // Ruta a una sección del dashboard
      { path: 'transactions', component: HistorialTransactionComponent }, // Ruta a una sección del dashboard
      { path: 'addFund', component: BondingFundComponent }, // Otra sección del dashboard
      {path: 'cancelFund', component: CancelFundComponent }, // Otra sección del dashboard
      {path: 'GetAccount', component: BalanceCardComponent }, // Otra sección del dashboard
    ]
  },
  { path: '**', redirectTo: '' }, // Redirige cualquier otra ruta a Login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
