import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection = this.db.collection('users');

  constructor(
    private db: AngularFirestore,
  ) { }

  async createUser(user: User) {
    await this.usersCollection.doc(user.id).set(user, { merge: true });
  }
}
