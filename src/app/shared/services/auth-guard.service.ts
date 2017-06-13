import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    // returns true if a user is authenticated
    // used in app-routing.module to guard protected routes
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.authService.isAuthenticated(); 
    }

}