import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import {AuthGuardGuard} from '../app/auth-guard.guard'
import {AllQueriesComponent} from '../app/dashboard/all-queries/all-queries.component'
import {HomeComponent} from '../app/dashboard/home/home.component'
const routes: Routes = [
  {path: '' ,redirectTo :'dashboard' ,pathMatch : 'full'},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"", component: DashboardComponent ,
  children: [
    {path: 'dashboard',canActivate:[AuthGuardGuard] ,component: HomeComponent },
    {path: 'all', canActivate:[AuthGuardGuard] ,component: AllQueriesComponent },
   
  ]


},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
