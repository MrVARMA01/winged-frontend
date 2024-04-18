import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './Components/ticket/ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { ContatUsComponent } from './Components/contat-us/contat-us.component';
import { CareersComponent } from './Components/careers/careers.component';
import { LoginComponent } from './Components/login/login.component';
import { UserAccountComponent } from './Components/user-account/user-account.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { PaintingRenovationsServiceComponent } from './Components/painting-renovations-service/painting-renovations-service.component';
import { ElectricalsServiceComponent } from './Components/electricals-service/electricals-service.component';
import { ElectronicsServiceComponent } from './Components/electronics-service/electronics-service.component';
import { SoftwareApplicationsServiceComponent } from './Components/software-applications-service/software-applications-service.component';
import { PlumbingServiceComponent } from './Components/plumbing-service/plumbing-service.component';
import { CarpentryServiceComponent } from './Components/carpentry-service/carpentry-service.component';
import { MechanicalsServiceComponent } from './Components/mechanicals-service/mechanicals-service.component';
import { CivilServiceComponent } from './Components/civil-service/civil-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TicketComponent,
    AboutComponent,
    OurServicesComponent,
    ContatUsComponent,
    CareersComponent,
    LoginComponent,
    UserAccountComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PaintingRenovationsServiceComponent,
    ElectricalsServiceComponent,
    ElectronicsServiceComponent,
    SoftwareApplicationsServiceComponent,
    PlumbingServiceComponent,
    CarpentryServiceComponent,
    MechanicalsServiceComponent,
    CivilServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, AuthGuard, [{ provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
