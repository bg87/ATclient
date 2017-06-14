import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
      
  }

}
