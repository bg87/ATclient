import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}
    
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    // redirect to dashboard
                    this.router.navigate(['/dashboard']);
                    // get token from firebase
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    signout() {
        firebase.auth().signOut();
        this.token = null;
    }

    // returns token as string
    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

}