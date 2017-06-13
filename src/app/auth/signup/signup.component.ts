import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.createForm();
  }

  signUp() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.authService.signupUser(email, password);
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

}
