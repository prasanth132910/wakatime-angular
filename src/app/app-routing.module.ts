import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from './report/report.component';
import {UsersComponent} from './users/users.component'
import {DashboardComponent} from './dashboard/dashboard.component'



const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'report', component: ReportComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
