import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/parent/authservice';
import { Router } from '@angular/router';
import { FirebaseService } from '../api/parent/firebaseservice';
import { ChildFirebaseService } from '../api/child/ChildFirebaseService';
import { ModalController } from '@ionic/angular';
import { AddchildPage } from '../addchild/addchild.page';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { firestore } from 'firebase';

class Schools{
  id: number;
  name:string
}
@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.page.html',
  styleUrls: ['./parent-profile.page.scss'],
})
export class ParentProfilePage implements OnInit {
pt_info:Array<any>;
child_info: Array<any>;
school1:Schools[];
school2:Schools[]

 
  constructor(public modalController: ModalController,
              private authService: AuthService,
              public router:Router,
              private ch_firebaseService:ChildFirebaseService,
              private afs:AngularFirestore,
              //private afq: firebase.firestore.CollectionReference,
              private pt_firebaseService:FirebaseService,
            //  public query : firebase.firestore.Query
             ) { }


  ngOnInit() {  
   this.afs.collection('Schools',ref=>ref.where('name','==', 'k v Mumbai')).valueChanges()
   .subscribe(val=>{
     console.log(val)});

  //  this.afs.collection('Schools').valueChanges()
  //  .subscribe(val=>{
  //    console.log(val);

  // }
  //  )


  }

   ionViewWillEnter(){
   //  this.getData();
    // this.getParent();
    //  this.getChilds();
  
   }
   getParent(){
    this.pt_firebaseService.getTasks()
    .then(task => {
      this.pt_info = task;
    })
   }

   getChilds(){
    this.ch_firebaseService.getTasks()
    .then(tasks => {
      this.child_info = tasks;
    })

   }


  async addChild(){

    const modal = await this.modalController.create({
      component: AddchildPage,
      //componentProps: { value: 123 }
    });
     return await modal.present();
  }
  
  async logout(){
    console.log("hi from lout")
    this.authService.doLogoutA()
    .then(res => {

      console.log("hi from logout then res")
      this.router.navigate(['/parent-login']);//(['/parent-profile'])
    })
  }
}
 