import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private usersService: UsersService,
  ) { }

  getCurrentUser() {
    return this.afAuth.user;
  }

  isAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().pipe(map(user => user !== null));
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  }

  async signUp(email: string, password: string, nickname: string) {
    console.log('ok1');
    this.afAuth.createUserWithEmailAndPassword(email, password).then(newUserCredentials => {
      if (!newUserCredentials.user) {
        alert('Κάτι πήγε στραβά');
        return;
      }
      const user: User = {
        email,
        nickname,
        id: newUserCredentials.user.uid,
      };
      this.usersService.createUser(user).catch(error => {
        alert('Κάτι πήγε στραβά');
      });
      return;
    }).catch(error => {
      alert('Κάτι πήγε στραβά');
    });
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
