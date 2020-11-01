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
import { TopCardComponent } from './top-card/top-card.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MonthlyStatsComponent } from './monthly-stats/monthly-stats.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { WeatherComponent } from './weather/weather.component';

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
    HeaderNavbarComponent,
    TopCardComponent,
    GoogleMapsComponent,
    MonthlyStatsComponent,
    TodoListComponent,
    SalesReportComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
