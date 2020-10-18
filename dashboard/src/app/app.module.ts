import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderImportsComponent } from './header-imports/header-imports.component';
import { FooterImportsComponent } from './footer-imports/footer-imports.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmailComponent,
    HeaderImportsComponent,
    FooterImportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
