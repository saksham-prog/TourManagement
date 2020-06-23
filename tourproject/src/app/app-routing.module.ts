import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import {dashheaderComponent} from './dashheader/dashheader.component';
import { AuthGuard } from './auth.guard';
import {ContactComponent} from './contact/contact.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { BanarasComponent } from './banaras/banaras.component';
import { QutubComponent } from './qutub/qutub.component';
import { IndiagateComponent } from './indiagate/indiagate.component';
import { GoaComponent } from './goa/goa.component';
import { GtempleComponent } from './gtemple/gtemple.component';
import { InnerAboutComponent } from './inner-about/inner-about.component';
import { ChooseComponent } from './choose/choose.component';



const routes: Routes = [
  {path:'', component:WebpageComponent , children:[

    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'login', component:LoginComponent},
    {path:'tajmahal', component:TajmahalComponent},
    {path:'banaras' , component:BanarasComponent},
    {path:'qutub', component:QutubComponent},
    {path:'indiagate', component:IndiagateComponent},
    {path:'goa', component:GoaComponent},
    {path:'gtemple', component:GtempleComponent}
   
  ]},
  {path:'about', component:AboutComponent},
  {path:'choose', component:ChooseComponent, children:[
    {path:'webpage', component:WebpageComponent}
  ]},
  

  {path:'dashboard', component:dashboardComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
