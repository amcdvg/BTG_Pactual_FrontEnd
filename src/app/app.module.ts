import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

// Importaciones de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Section1Component } from './dashboard/section1/section1.component';
import { Section2Component } from './dashboard/section2/section2.component';
import { CardinfComponent } from './dashboard/card-infor/card-infor.component';
import { HistorialTransactionComponent } from './dashboard/historial-transaction/historial-transaction.component';
import { BondingFundComponent } from './dashboard/add-fund/add-fund.component';
import { FormsModule } from '@angular/forms';
import { CancelFundComponent } from './dashboard/cancel-fund/cancel-fund.component';
import { BalanceCardComponent } from './dashboard/balance-card/balance-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    DashboardComponent,
    Section1Component,
    Section2Component,
    CardinfComponent,
    HistorialTransactionComponent,
    BondingFundComponent,
    CancelFundComponent,
    BalanceCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule, // Asegúrate de agregar esto aquí
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule, // Agrega este módulo
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


