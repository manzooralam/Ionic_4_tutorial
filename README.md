# IONIC_4 Chatting App
## It is a simple Chatting app to ask question and get answer
## screenshot:

<a href="https://ibb.co/y6YMRpX"><img src="https://i.ibb.co/fknKS92/chatt.png" alt="screenshot" border="0"></a>


## Code in .ts file

```
n_p:boolen=true;
 p_email: string='manzoor1@gmail.com';
  selected_ch:string='Alam'
  selected_act:string='Activity3'
  
  constructor(public afs:AngularFirestore) { }
  
  ngOnInit() {
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
```

## In .html file

```
<ion-header>
  <ion-toolbar>
    <ion-title>chatting</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding *ngIf="n_p">

    <ion-row>
          <ion-item>
            <ion-label>Select child :  {{b_ch_name}}</ion-label>
            <ion-select cancelText="Cancel" okText="Ok" [(ngModel)]="selected_ch">
              <ion-select-option *ngFor="let child of child_info">{{child_info.payload.doc.data().ChName}}</ion-select-option>
            </ion-select>
          </ion-item>
        
          <ion-item>
            <ion-label>Select Activity :   {{b_tac}}</ion-label>
            <ion-select cancelText="Cancel" okText="Ok" [(ngModel)]="selected_act">
              <ion-select-option *ngFor="let act of activity">{{act.payload.doc.data().name}}</ion-select-option>
            </ion-select>
          </ion-item>
    </ion-row>



  <ion-list>
      <div *ngFor="let msg of message">
         
        <div *ngIf="msg.payload.doc.data().messageType=='question'">
            <p class="ques">{{msg.payload.doc.data().message}}</p>

          </div>

          <div *ngIf="msg.payload.doc.data().messageType=='answer'">
            <p class="ans"> {{msg.payload.doc.data().message}}</p>
          </div>

      </div>
  </ion-list>

  <ion-footer>
    <ion-toolbar>

      <div class="elem">
        <ion-input type="text" placeholder="Type questions here" [(ngModel)]="message1"></ion-input>
      </div>

      <ion-button slot="start" fill="clear" (click)="openAttach()">
        <ion-icon slot="start" name="attach"></ion-icon>
      </ion-button>
      <ion-button slot="end" fill="clear" (click)="sendMessage()">
        <ion-icon slot="end" name="send"></ion-icon>
      </ion-button>

    </ion-toolbar>
  </ion-footer>
</ion-content>

```
