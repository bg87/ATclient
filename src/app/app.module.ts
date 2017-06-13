import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

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
    NgReduxModule
  ],
  providers: [AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
