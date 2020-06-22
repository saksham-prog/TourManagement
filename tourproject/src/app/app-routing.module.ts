import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import {dashheaderComponent} from './dashheader/dashheader.component'
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', component:WebpageComponent , children:[

    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignUpComponent}
  ]},
  {path:'dashboard', component:dashboardComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
