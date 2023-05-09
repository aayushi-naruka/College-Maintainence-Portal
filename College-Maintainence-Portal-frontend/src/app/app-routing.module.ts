import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import {AuthGuardGuard} from '../app/auth-guard.guard'
const routes: Routes = [
   {path: '' ,
  //  redirectTo :'login' , 
  //  pathMatch : 'full'
  component:DashboardComponent
  },
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",
  children: [
    {path: 'dashboard',
    //canActivate:[AuthGuardGuard] ,
    component: DashboardComponent },
   
  ]


},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
