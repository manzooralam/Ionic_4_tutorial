import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	name: string,
	email:string,
	uid: string,
}

@Injectable()
export class UserService {
	private user: user

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}

	getName(): string {
		return this.user.name
	}
	reAuth(email: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email , password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail )
	}

	getUID(): string {
		return this.user.uid
	}
	setUID(uid:string){
		this.user.uid = uid
	  }
	setEmail(email:string){
      this.user.email = email
	}
	getEmail(): string {
		return this.user.email
	}
	
	// async isAuthenticated() {
	// 	if(this.user) return true

	// 	const user = await this.afAuth.authState.pipe(first()).toPromise()

	// 	if(user) {
	// 		this.setUser({
	// 			//username: user.email.split('@')[0],
	// 			name: user.displayName,
	// 			email: user.email
	// 			uid: user.uid
	// 		})

	// 		return true
	// 	}
	// 	return false
	// }

}