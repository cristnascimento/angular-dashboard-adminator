import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ComposeComponent } from './compose/compose.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DatatableComponent } from './datatable/datatable.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { BlankComponent } from './blank/blank.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'email', component: EmailComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'ui-elements', component: UiElementsComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'google-maps', component: GoogleMapComponent },
  { path: 'vector-maps', component: VectorMapComponent },
  { path: 'blank', component: BlankComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
