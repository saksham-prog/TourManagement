import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import {dashheaderComponent} from './dashheader/dashheader.component'
import { AuthGuard } from './auth.guard';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { QutubComponent } from './qutub/qutub.component';
import { IndiagateComponent } from './indiagate/indiagate.component';
import { GoaComponent } from './goa/goa.component';
import { GtempleComponent } from './gtemple/gtemple.component';
import { BanarasComponent } from './banaras/banaras.component';


const routes: Routes = [
  {path:'', component:WebpageComponent , children:[

    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'tajmahal', component:TajmahalComponent},
    {path:'qutub', component:QutubComponent},
    {path:'indiagate', component:IndiagateComponent},
    {path:'goa', component:GoaComponent},
    {path:'gtemple', component:GtempleComponent},
    {path:'banaras', component:BanarasComponent}
  ]},
  {path:'about', component:AboutComponent},
  {path:'dashboard', component:dashboardComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
