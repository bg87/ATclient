import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth-guard.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TinymceComponent } from './tinymce/tinymce.component';
import { ProjectComponent } from './projects/project/project.component';
import { ContributionComponent } from './projects/project/contribution/contribution.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './projects/project/new-project/new-project.component';
import { EditProjectComponent } from './projects/project/edit-project/edit-project.component';
import { NewContributionComponent } from './projects/project/contribution/new-contribution/new-contribution.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const firebase = {
    apiKey: "AIzaSyD-JSWrCTHVVM9VxKorkK_REDxizZAzK_s",
    authDomain: "atproject-cb953.firebaseapp.com",
    databaseURL: "https://atproject-cb953.firebaseio.com",
    projectId: "atproject-cb953",
    storageBucket: "atproject-cb953.appspot.com",
    messagingSenderId: "429580396934"
  }


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TinymceComponent,
    ProjectComponent,
    ContributionComponent,
    ProjectsComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewContributionComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
