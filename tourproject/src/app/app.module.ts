import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { dashheaderComponent } from './dashheader/dashheader.component';
import { DashfooterComponent } from './dashfooter/dashfooter.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { ChooseComponent } from './choose/choose.component';
import { AdminComponent } from './admin/admin.component';
import { GoaaComponent } from './goaa/goaa.component';
import { OotyComponent } from './ooty/ooty.component';
import { LehComponent } from './leh/leh.component';
import { DallakeComponent } from './dallake/dallake.component';
import { AndamanComponent } from './andaman/andaman.component';
import { UdaipurComponent } from './udaipur/udaipur.component';
import { FlowersComponent } from './flowers/flowers.component';
import { KasolComponent } from './kasol/kasol.component';
import { HimalayaComponent } from './himalaya/himalaya.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    dashboardComponent,
    HeaderComponent,
    FooterComponent,
    dashheaderComponent,
    DashfooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    BodyComponent,
    ContactComponent,
    DashbodyComponent,
    GoaaComponent,
    OotyComponent,
    LehComponent,
    DallakeComponent,
    AndamanComponent,
    UdaipurComponent,
    FlowersComponent,
    KasolComponent,
    HimalayaComponent,
    ChooseComponent,
    AdminComponent,
    AdminDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
