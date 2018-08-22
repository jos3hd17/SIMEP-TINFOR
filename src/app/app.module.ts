import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CoreApplicationComponent } from './core-application/core-application.component';
import { LoginComponent } from './user-management/login/login.component';
import { SignInComponent } from './user-management/sign-in/sign-in.component';
import { LandingPageComponent } from './user-management/landing-page/landing-page.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { HeaderComponent } from './core-application/header/header.component';
import { SidebarComponent } from './core-application/sidebar/sidebar.component';
import { BodyComponent } from './core-application/body/body.component';
import { PreviewStadisticsComponent } from './core-application/body/preview-stadistics/preview-stadistics.component';
import { UploadItemsComponent } from './core-application/body/upload-items/upload-items.component';
import { DelivererComponent } from './core-application/body/deliverer/deliverer.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './core-application/body/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './user-management/alerts/alerts.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AgGridModule} from 'ag-grid-angular/main';
import { GenericNotifyComponent } from './generic-notify/generic-notify.component';


var firebaseconfig = {
  apiKey: "AIzaSyCAsdjIauTU650YZKamcxHcuXaiQ0cPBp0",
  authDomain: "simep-tinfor.firebaseapp.com",
  databaseURL: "https://simep-tinfor.firebaseio.com",
  projectId: "simep-tinfor",
  storageBucket: "simep-tinfor.appspot.com",
  messagingSenderId: "811355769627"
};

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    CoreApplicationComponent,
    LoginComponent,
    SignInComponent,
    LandingPageComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    PreviewStadisticsComponent,
    UploadItemsComponent,
    DelivererComponent,
    MapComponent,
    AlertsComponent,
    GenericNotifyComponent
  ],
  imports: [
    BrowserModule, RoutesRoutingModule, BrowserAnimationsModule,AgGridModule.withComponents([]), AngularFirestoreModule.enablePersistence(), AngularFireModule.initializeApp(firebaseconfig), FormsModule, HttpClientModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD8tQjv3cNdblBV69kyff7-1ZtyLQMAQ0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
