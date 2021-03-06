import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(map(auth => auth)).subscribe(auth => auth);
  }

  loginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData), err => reject(err));
    });
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }
}
