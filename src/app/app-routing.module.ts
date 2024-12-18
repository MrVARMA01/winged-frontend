import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { ContatUsComponent } from './Components/contat-us/contat-us.component';
import { CareersComponent } from './Components/careers/careers.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { UserAccountComponent } from './Components/user-account/user-account.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { PaintingRenovationsServiceComponent } from './Components/painting-renovations-service/painting-renovations-service.component';
import { ElectronicsServiceComponent } from './Components/electronics-service/electronics-service.component';
import { ElectricalsServiceComponent } from './Components/electricals-service/electricals-service.component';
import { SoftwareApplicationsServiceComponent } from './Components/software-applications-service/software-applications-service.component';
import { PlumbingServiceComponent } from './Components/plumbing-service/plumbing-service.component';
import { MechanicalsServiceComponent } from './Components/mechanicals-service/mechanicals-service.component';
import { CarpentryServiceComponent } from './Components/carpentry-service/carpentry-service.component';
import { CivilServiceComponent } from './Components/civil-service/civil-service.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'our-services',component:OurServicesComponent},
  {path:'careers',component:CareersComponent},
  {path:'contact-us',component:ContatUsComponent},
  {path:'user-account',component:UserAccountComponent},
  {path:'change-password',component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:'winged-service-1',component:PaintingRenovationsServiceComponent},
  {path:'winged-service-2',component:ElectronicsServiceComponent},
  {path:'winged-service-3',component:ElectricalsServiceComponent},
  {path:'winged-service-4',component:SoftwareApplicationsServiceComponent},
  {path:'winged-service-5',component:PlumbingServiceComponent},
  {path:'winged-service-6',component:MechanicalsServiceComponent},
  {path:'winged-service-7',component:CarpentryServiceComponent},
  {path:'winged-service-8',component:CivilServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) // or 'top'
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
