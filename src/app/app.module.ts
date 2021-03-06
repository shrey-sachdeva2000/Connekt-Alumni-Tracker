import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
/*Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { DocumentService } from './services/document.service';
import { AngularFireAuth } from "@angular/fire/auth";

import { HomeComponent } from './home/home.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
// admin panel
import { AdminnavComponent } from './adminpanel/adminnav/adminnav.component';
import { AdmindashboardComponent } from './adminpanel/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './adminpanel/adminevents/adminevents.component';
// login
import { LoginComponent } from './login/login.component';
import { VerifyemailComponent } from './login/verifyemail/verifyemail.component';
// alumni
import { AlumnihomepageComponent } from './alumnihomepage/alumnihomepage.component';
import { AlumnidashboardComponent } from './alumnihomepage/alumnidashboard/alumnidashboard.component';
import { AlumninavComponent } from './alumnihomepage/alumninav/alumninav.component';
import { AdminneweventComponent } from './adminpanel/adminevents/adminnewevent/adminnewevent.component';
import { CommonnavbarComponent } from './home/commonnavbar/commonnavbar.component';
import { CommonfooterComponent } from './home/commonfooter/commonfooter.component';
import { AdminauthComponent } from './adminpanel/adminauth/adminauth.component';
import { AlumnieventsComponent } from './alumnihomepage/alumnievents/alumnievents.component';
import { AllalumniComponent } from './adminpanel/allalumni/allalumni.component';
import { StudentComponent } from './student/student.component';
import { StudentnavComponent } from './student/studentnav/studentnav.component';
import { AlumniprofileComponent } from './alumnihomepage/alumniprofile/alumniprofile.component';
import { StudentprofileComponent } from './student/studentprofile/studentprofile.component';
import { AdminloginComponent } from './adminpanel/adminlogin/adminlogin.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { AdminchartsComponent } from './adminpanel/admincharts/admincharts.component';
import { Chartno2Component } from './adminpanel/admincharts/chartno2/chartno2.component';
import { Error404Component } from './error404/error404.component';
import { WorldmapComponent } from './adminpanel/worldmap/worldmap.component';
import { UpdatedetailsComponent } from './alumnihomepage/updatedetails/updatedetails.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotableAlumniComponent,
    AdminpanelComponent,
    HomeComponent,
    AlumnihomepageComponent,
    AdminnavComponent,
    AdmindashboardComponent,
    AdmineventsComponent,
    VerifyemailComponent,
    AlumnidashboardComponent,
    AlumninavComponent,
    AdminneweventComponent,
    CommonnavbarComponent,
    CommonfooterComponent,
    AdminauthComponent,
    AlumnieventsComponent,
    AllalumniComponent,
    StudentComponent,
    StudentnavComponent,
    AlumniprofileComponent,
    StudentprofileComponent,
    AdminloginComponent,
    StudentloginComponent,
    AdminchartsComponent,
    Chartno2Component,
    Error404Component,
    WorldmapComponent,
    UpdatedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'AlumniReg'),
    AngularFirestoreModule,
    ChartsModule
  ],
  providers: [DocumentService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
