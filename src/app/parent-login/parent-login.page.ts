import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../api/parent/user.service';
import { AlertController } from '@ionic/angular';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.page.html',
  styleUrls: ['./parent-login.page.scss'],
})
export class ParentLoginPage implements OnInit {
    email: string = ""
	password: string = ""
  
  constructor(
		public afAuth: AngularFireAuth,
		public router: Router,
		public userservice: UserService,
		public alertController :AlertController) { }

		validation_messages = {
			'emailid': [
			  { type: 'required', message: 'Email is required.' },
			  { type: 'pattern', message: 'Please enter a valid email.' }
			],
		
			'password': [
			  { type: 'required', message: 'Password is required.' },
			  { type: 'minlength', message: 'Password must be at least 5 characters long.' }
			]
		  };
		   
		  formdata = new FormGroup({
			emailid: new FormControl('',
			 Validators.compose([
			   Validators.required,
			   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
			])),
		   passwd : new FormControl('', 
			Validators.compose([
			  Validators.minLength(5),
			  Validators.required
			])),
		 });

	ngOnInit() {
	}

	async login() {
		console.log('hi')
		//const value={email:this.email,password: this.password};
		const { email, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(email , password)
						

			 if(res.user) {
					 
				this.showingAlert('Welcome to ThinkTac',res.user.email)
        this.router.navigate(['/parent-profile']) 
	
			
			}
		
		} catch(err) {
			console.dir(err);
			if(err.code === "auth/user-not-found") {
				this.showingAlert('Errors', 'Not register this email id')
				console.log("User not found");
			}
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

	// async googleLogin() {
	// 	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	// 	let user= this.afAuth.user
	// 	this.router.navigate(['/profile'])  	

	// 	//this.showingAlert('Welcome','user.displayName');
	//   }


}
