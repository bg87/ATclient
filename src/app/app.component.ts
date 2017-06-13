import { AuthService } from './shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD-JSWrCTHVVM9VxKorkK_REDxizZAzK_s",
      authDomain: "atproject-cb953.firebaseapp.com",
    });
  }

}
