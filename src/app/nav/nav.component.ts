import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private authService: AuthService, private router: Router) { }

  signout() {
    this.authService.signout();
    this.router.navigate(['/']);
  }

}
