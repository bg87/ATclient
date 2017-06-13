import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  signIn() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    this.authService.signinUser(email, password);
  }

  createForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

}
