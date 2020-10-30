import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderImportsComponent } from './header-imports/header-imports.component';
import { FooterImportsComponent } from './footer-imports/footer-imports.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmailComponent,
    HeaderImportsComponent,
    FooterImportsComponent,
    PageLoaderComponent,
    LeftSidebarComponent,
    LayoutComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
