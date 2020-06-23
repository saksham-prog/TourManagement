import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import {dashheaderComponent} from './dashheader/dashheader.component';
import { AuthGuard } from './auth.guard';
<<<<<<< HEAD
import { TajmahalComponent } from './tajmahal/tajmahal.component';
=======
import {ContactComponent} from './contact/contact.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { BanarasComponent } from './banaras/banaras.component';
>>>>>>> 6eaf8ae65bcadd4762d4959dd753bfa638b547fb
import { QutubComponent } from './qutub/qutub.component';
import { IndiagateComponent } from './indiagate/indiagate.component';
import { GoaComponent } from './goa/goa.component';
import { GtempleComponent } from './gtemple/gtemple.component';
<<<<<<< HEAD
import { BanarasComponent } from './banaras/banaras.component';
=======
import { InnerAboutComponent } from './inner-about/inner-about.component';

>>>>>>> 6eaf8ae65bcadd4762d4959dd753bfa638b547fb


const routes: Routes = [
  {path:'', component:WebpageComponent , children:[

    {path:'home', component:HomeComponent},
<<<<<<< HEAD
    {path:'login', component:LoginComponent},
    {path:'tajmahal', component:TajmahalComponent},
    {path:'qutub', component:QutubComponent},
    {path:'indiagate', component:IndiagateComponent},
    {path:'goa', component:GoaComponent},
    {path:'gtemple', component:GtempleComponent},
    {path:'banaras', component:BanarasComponent}
  ]},
  {path:'about', component:AboutComponent},
=======
   
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
  

>>>>>>> 6eaf8ae65bcadd4762d4959dd753bfa638b547fb
  {path:'dashboard', component:dashboardComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
