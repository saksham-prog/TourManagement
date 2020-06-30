import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { IndiagateComponent } from './indiagate/indiagate.component';
import { GoaComponent } from './goa/goa.component';
import { GtempleComponent } from './gtemple/gtemple.component';
import { InnerAboutComponent } from './inner-about/inner-about.component';
import { QutubComponent } from './qutub/qutub.component';
import { ContactComponent } from './contact/contact.component';
import { BanarasComponent } from './banaras/banaras.component';
import { ChooseComponent } from './choose/choose.component';
import { GoaaComponent } from './goaa/goaa.component';
import { OotyComponent } from './ooty/ooty.component';
import { UdaipurComponent } from './udaipur/udaipur.component';
import { KasolComponent } from './kasol/kasol.component';
import { LehComponent } from './leh/leh.component';
import { HimalayaComponent } from './himalaya/himalaya.component';
import { DallakeComponent } from './dallake/dallake.component';
import { FlowersComponent } from './flowers/flowers.component';
import { AndamanComponent } from './andaman/andaman.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { PackageComponent } from './package/package.component';
import { BookingComponent } from './booking/booking.component';
import { Search2Component } from './search2/search2.component'
import { AddplaceComponent } from './addplace/addplace.component';
import { AddpackageComponent } from './addpackage/addpackage.component';


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
  {path:'goaa', component:GoaaComponent},
  {path:'ooty', component:OotyComponent},
  {path:'udaipur', component:UdaipurComponent},
  {path:'kasol', component:KasolComponent},
  {path:'leh', component:LehComponent},
  {path:'himalaya', component:HimalayaComponent},
  {path:'dallake', component:DallakeComponent},
  {path:'flowers', component:FlowersComponent},
  {path:'andaman', component:AndamanComponent},
  {path:'dashboard', component:dashboardComponent, canActivate:[AuthGuard], children:[
    
    {path:'goaa', component:GoaaComponent},
    {path:'ooty', component:OotyComponent},
    {path:'udaipur', component:UdaipurComponent},
    {path:'kasol', component:KasolComponent},
    {path:'leh', component:LehComponent},
    {path:'himalaya', component:HimalayaComponent},
    {path:'dallake', component:DallakeComponent},
    {path:'flowers', component:FlowersComponent},
    {path:'andaman', component:AndamanComponent},
    
  ]},

  {path:'contact', component:ContactComponent},
  {path:'search', component:SearchComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent, canActivate:[AuthGuard], 

  children:[
    {path:"addplace", component:AddplaceComponent },
    {path:"addpackage", component: AddpackageComponent },
    
  ]
},
  {path:'form', component:FormComponent},
  {path:'package', component:PackageComponent},
  {path:'booking', component:BookingComponent},
  {path:'search2', component:Search2Component}
 


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
