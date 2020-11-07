import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ComposeComponent } from './compose/compose.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'email', component: EmailComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'calendar', component: CalendarComponent },
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
