import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreApplicationComponent } from '../core-application/core-application.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { LoginComponent } from '../user-management/login/login.component';
import { SignInComponent } from '../user-management/sign-in/sign-in.component';
import { LandingPageComponent } from '../user-management/landing-page/landing-page.component';
import { PreviewStadisticsComponent } from '../core-application/body/preview-stadistics/preview-stadistics.component';
import { UploadItemsComponent } from '../core-application/body/upload-items/upload-items.component';
import { DelivererComponent } from '../core-application/body/deliverer/deliverer.component';
import { MapComponent } from '../core-application/body/map/map.component';

const routes: Routes = [
  {
    path:'core',
    component:CoreApplicationComponent,
    children:[
      {
        path:'preview',
        component:PreviewStadisticsComponent
      },
      {
        path:'upload',
        component:UploadItemsComponent
      },
      {
        path:'deliver',
        component:DelivererComponent
      },
      {
        path:'map',
        component:MapComponent
      }
    ]
  },
  {
    path:'management',
    component:UserManagementComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  {
    path:'index',
    component:LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
