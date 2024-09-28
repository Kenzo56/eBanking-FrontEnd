import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AdminTemplateComponent,
    CustomerAccountsComponent,
    CustomersComponent,
    LoginComponent,
    NotAuthorizedComponent,
    NewCustomerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
