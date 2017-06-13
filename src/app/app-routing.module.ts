import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuard } from './shared/services/auth-guard.service';

import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { NewProjectComponent } from './projects/project/new-project/new-project.component';
import { EditProjectComponent } from './projects/project/edit-project/edit-project.component';
import { ContributionComponent } from './projects/project/contribution/contribution.component';
import { NewContributionComponent } from './projects/project/contribution/new-contribution/new-contribution.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from "app/dashboard/dashboard.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },

    // protected routes
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },

    // catchall
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}