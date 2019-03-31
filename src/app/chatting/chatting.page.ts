import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChildFirebaseService } from '../api/child/ChildFirebaseService';
import { FirebaseService } from '../api/parent/firebaseservice';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.page.html',
  styleUrls: ['./chatting.page.scss'],
})
export class ChattingPage implements OnInit {
  snapshotChangesSubscription
  base64Image: string='';
  
  display:string;
  parent1: string;
  message1:string=''
  children: Array<any>;
  answer:Array<any>;
  a:Array<any>

  b_tac:string;
  b_ch_name:string
  doc_id:string

  message:Array<any>
  messageContent:string=''
  myMSG:string=''
  a1:string=''
  q1:string=''


  p_email: string='manzoor1@gmail.com';
  selected_ch:string='Alam'
  selected_act:string='Activity3'
  n_p:boolean=true
  child_info:Array<any>
  activity:Array<any>;

  constructor(public afs:AngularFirestore,
    private ch_firebaseService:ChildFirebaseService,
    private pt_firebaseService:FirebaseService,) { }

  ngOnInit() {

    this.getParent();
    this.getChilds();
    this.getActivity();
     this.hasRoom() .then(room => {

    for(let a of room){

        
            
                    let doc_id= a.payload.doc.id;
                    this.b_tac = a.payload.doc.data().participant.tac;
                    this.b_ch_name= a.payload.doc.data().participant.child_name;

                      //getting mgs
                      this.getMessage(doc_id)

               
            
            
     
   }
})




}


//for chatting---
hasRoom(){

 return new Promise<any>((resolve, reject) => {
   //let currentUser = this.fir.auth.currentUser
   this.snapshotChangesSubscription = this.afs.collection('Rooms').snapshotChanges()
   .subscribe(snapshots => {
     console.log(snapshots)
     resolve(snapshots),
     err => reject(err)
    })
 });
 
}

getMessage(room1:any){


   //let currentUser = this.fir.auth.currentUser
   this.snapshotChangesSubscription = this.afs.collection('Rooms').doc(room1).collection('chat',ref=>ref.orderBy('date','asc')).snapshotChanges()
   .subscribe(snapshots => {
    this.message=snapshots
    })
 
 
}


sendMessage() {
  
    if(this.selected_ch=='' || this.selected_act==''||this.message1=='' ){
      alert ('Oops...Please fill all the fields!')
      return
    }
    let randomId = Math.random().toString(36).substr(2, 5);

    this.myMSG=this.message1;
     this.message1=''
      
          try { 
            this.afs.collection("Rooms").doc(this.selected_ch.concat(this.selected_act)).set({
              participant:{
                child_name:this.selected_ch,
                parent_email:this.p_email,
                tac:this.selected_act,
                date:new Date(),
              }
            })

            this.afs.collection("Rooms").doc(this.selected_ch.concat(this.selected_act)).collection("chat").add({
              message:this.myMSG,
              messageType:"question",
              date:new Date(),
            })
           
  
              }
       catch (err) { }
      }
  //end chatting--

  getParent(){
    this.pt_firebaseService.getTasks()
    .then(task => {
      this.p_email = task.payload.data().email;
    })
   }

   getChilds(){
    this.ch_firebaseService.getTasks()
    .then(tasks => {
      this.child_info = tasks;
    })

   }
   getActivity(){
    this.ch_firebaseService.getActivity()
    .then(activity=>{
      this.activity=activity;
    })
  }
}
