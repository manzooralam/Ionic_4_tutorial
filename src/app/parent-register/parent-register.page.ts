import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from '../api/parent/user.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms'
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-parent-register',
  templateUrl: './parent-register.page.html',
  styleUrls: ['./parent-register.page.scss'],
})
export class ParentRegisterPage implements OnInit {
  name:string=""
  email: string = ""
password: string = ""
rpassword: string = ""

constructor(
  public afAuth: AngularFireAuth,
  public afstore:AngularFirestore,
  public alertController: AlertController,
  public router :Router,
  public user:UserService
  ) { }

  validation_messages = {
    'email_vn': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],

    'password_vn': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'password_rvn': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
   
  formdata = new FormGroup({
    email_vn: new FormControl('',
     Validators.compose([
       Validators.required,
       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
   password_vn : new FormControl('', 
    Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    password_rvn : new FormControl('', 
    Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
 });


ngOnInit() {
}

async register() {
  const { name,email, password, rpassword }=this

  if(password !== rpassword) {

    this.showingAlert("Errors","Passwords don't match");
    return console.error("Passwords don't match")
  }

  try {
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(email , password)
      
    //  this.afstore.doc(`users/${res.user.uid}`).set({
    //   name,
    //   email,
    //   password
    // })

     if(res.user){

     
    this.afstore.collection('Users').doc(res.user.uid).update({
                name:name,
                parent_uid:res.user.uid,
                email: email,
                fcm_token:localStorage.getItem("token")
              

    })
  }
         this.user.setUser({
       name: name,
       email: email,
       uid: res.user.uid
     });

    //this.presentAlert('Success', 'You are registered!')
   //	this.router.navigate(['/tabs'])
   this.showingAlert("Success", "Thanks for registration : " )
       this.router.navigate(['/parent-login'])

  } catch(error) {

    console.dir(error)
    this.showingAlert("Errors ",error.message)
  }
}

async showingAlert(title: string, content: string) {
  const alert = await this.alertController.create({
    header: title,
    message: content,
    buttons: ['OK']
  })

  await alert.present()
}


}
