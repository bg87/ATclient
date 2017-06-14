import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(private router: Router, public angularFireAuth: AngularFireAuth) {
        this.user = angularFireAuth.authState;
    }
    
    signupUser(email: string, password: string) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    // redirect to dashboard
                    this.router.navigate(['/dashboard']);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    signout() {
        this.angularFireAuth.auth.signOut();
    }

    isAuthenticated() {
        return this.angularFireAuth.auth.currentUser != null;
    }

}