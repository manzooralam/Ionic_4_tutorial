import { Injectable } from "@angular/core";
import 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/storage';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class FirebaseService {

  private snapshotChangesSubscription: any;
  constructor(public afs: AngularFirestore,
              public fir:AngularFireAuth){}
  
    createTask(value){
      return new Promise<any>((resolve, reject) => {
        let currentUser = this.fir.auth.currentUser;
        this.afs.collection('Users').doc(currentUser.uid).update({

          parent_uid: currentUser.uid,
          parent_name: value.name,
          city:value.city,
          userid:value.userid,
          password: value.password
         // image: value.image
        })
        .then(
          res => resolve(res),
          err => reject(err)
        )
      })
        }
        
   getTasks(){
    return new Promise<any>((resolve, reject) => {
      // let currentUser = firebase.auth.currentUser;
       let currentUser = this.fir.auth.currentUser
       this.snapshotChangesSubscription = this.afs.collection('Users').doc(currentUser.uid).snapshotChanges()
       .subscribe(snapshots => {
         resolve(snapshots);
       })
     });
   }

   unsubscribeOnLogOut(){
     //remember to unsubscribe from the snapshotChanges
     // debugger;
     this.snapshotChangesSubscription.unsubscribe();
   }

   updateTask(taskKey, value){
     return new Promise<any>((resolve, reject) => {
       let currentUser = this.fir.auth.currentUser;
       this.afs.collection('Users').doc(currentUser.uid +`/taskKey`).set(value)
       .then(
         res => resolve(res),
          err => reject(err)
       )
     })
   }

   deleteTask(taskKey){
     return new Promise<any>((resolve, reject) => {
       let currentUser = this.fir.auth.currentUser;
       this.afs.collection('Users').doc(currentUser.uid+`/taskKey`).delete()
       .then(
         res => resolve(res),
         err => reject(err)
       )
     })
   }

   encodeImageUri(imageUri, callback) {
     var c = document.createElement('canvas');
     var ctx = c.getContext("2d");
     var img = new Image();
     img.onload = function () {
       var aux:any = this;
       c.width = aux.width;
       c.height = aux.height;
       ctx.drawImage(img, 0, 0);
       var dataURL = c.toDataURL("image/jpeg");
       callback(dataURL);
     };
     img.src = imageUri;
   };

   uploadImage(imageURI, randomId){
     return new Promise<any>((resolve, reject) => {
       let storageRef = firebase.storage().ref();
       let imageRef = storageRef.child('image').child(randomId);
       this.encodeImageUri(imageURI, function(image64){
         imageRef.putString(image64, 'data_url')
         .then(snapshot => {
           snapshot.ref.getDownloadURL()
           .then(res => resolve(res))
         }, err => {
           reject(err);
         })
       })
     })
   }
}
