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
import { ChatComponent } from './chat/chat.component';
import { ComposeComponent } from './compose/compose.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DatatableComponent } from './datatable/datatable.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { BlankComponent } from './blank/blank.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

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
    WeatherComponent,
    ChatComponent,
    ComposeComponent,
    CalendarComponent,
    ChartsComponent,
    FormsComponent,
    UiElementsComponent,
    BasicTableComponent,
    DatatableComponent,
    GoogleMapComponent,
    VectorMapComponent,
    BlankComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
