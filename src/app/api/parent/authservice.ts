import { Injectable } from "@angular/core";
import 'rxjs';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebaseservice';
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable()
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    private afA:AngularFireAuth
  ){}

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

   doLogout(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           //this.firebaseService.unsubscribeOnLogOut();
           resolve();
         }).catch((error) => {
           reject();
        });
       }
     })
   }

   doLogoutA(){
    return new Promise((resolve, reject) => {
      if(this.afA.user){
        
        this.afA.auth.signOut()
        .then(() => {
          //this.firebaseService.unsubscribeOnLogOut();
          resolve();
        }).catch((error) => {
          reject();
       });
      }
    })
  }
}
