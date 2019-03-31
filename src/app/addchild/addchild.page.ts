import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { AngularFirestore } from '@angular/fire/firestore';
import { ChildFirebaseService } from '../api/child/ChildFirebaseService';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';
import { Router } from '@angular/router';

class School {
  public id: number;
  public name: string;
}


@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.page.html',
  styleUrls: ['./addchild.page.scss'],
})
export class AddchildPage implements OnInit {
 
  ch_name:string = '';
  ch_age:number=0
  ch_class:string;
  ch_school:string='';
  ch_userid:string;
  ch_password:string;
  notfoundschool:string=''
  userForm:FormGroup;
  sch_info :Array<any>
  sch_name:string='welcome'


  async childDetailsSubmit(){

     if(this.ch_school==''){
       this.ch_school= this.notfoundschool;

     }
    console.log(this.ch_name)

    const toast = await this.toastController.create({
      message: " Name: "+this.ch_name +
       "\n School :"+this.ch_school + 
       "\n clsass std :"+this.ch_class +
       "\n age :"+this.ch_age+
      "\n user id:"+this.ch_userid+
      "\npassword "+ this.ch_password,
      duration: 5000
    });
    toast.present();
  
  }

  list:any[];
  schools: School[];
  schools1: School[];
  schools2: School[];


  fetchschool:string[]

  ngOnInit(){
    // this.afs.collection('Schools').valueChanges()
  //  .subscribe(val=>{
  //   console.log(val);
        this.schfirebaserservice.getSchool()
            .then(tasks => {
                     for (let p of tasks) {

                      this.schools2 =[
                        { id: p.payload.doc.data().id, name: p.payload.doc.data().name }];
                    
                 this.schools1 =this.schools1.concat(this.schools2);
             }
            this.schools= this.schools1;
    })

  
  }

  
  
  constructor(  private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private afs: AngularFirestore,
    private router:Router,
    private schfirebaserservice:ChildFirebaseService) {
        
    this.schools1 = [
      { id: 0, name: 'R. k high school' },
      // { id: 2, name: 'K.V. bangalore' },
      // { id: 3, name: 'D.A.V. delhi' },
      // { id: 4, name: 'Bangalore high school' },
      // { id: 5, name: 'Delhi high school' },
      // { id: 6, name: 'Marathalli kids school' },
      // { id: 7, name: 'D.A.V. salmari' },
      // { id: 8, name: 'D.A.V. nimol' },
    ];
  }
  ionViewWillEnter(){
    //  this.getData();
    console.log('after nooninit')
      this.getData();
    }
  getData(){
     
    }

  schoolChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    // if(event.component.onClear==null){
    //   return
    // }
    this.ch_school=event.value.name;
    console.log('School:', event.value.name);
    this.notfoundschool=''
  }

  addNewSchool(event: {
    component: IonicSelectableComponent,
    value:any
  }) {
    event.component.onClear
    this.ch_school=''
      this.notfoundschool=(event.component.searchText);

      console.log("school name: " +this.notfoundschool)
      
      event.component.close();
  }
  
 
//  start form validation

validation_messages = {

  'ch_name': [
    { type: 'required', message: 'Name is required.' },
    { type: 'minlength', message: 'Child must be at least 5 characters long.' }
  ],
  'ch_userid': [
    { type: 'required', message: 'Userid is required.' },
    { type: 'minlength', message: 'Child must be at least 5 characters long.' }
  ],

  'ch_password': [
    { type: 'required', message: 'password is required.' },
    { type: 'minlength', message: 'Child must be at least 5 characters long.' }
  ],
};


}


//   title:string=""
//   emailid;
//   car:string=''

//  constructor(
//           private alertController: AlertController,
//           private modalController:ModalController,
//            private afA:AngularFireAuth,
//              private afS:AngularFirestore,
//              public afservice: FirebaseService,
//             public ch_FirebaseService: ChildFirebaseService){}

//   validation_messages = {
//     'emailid': [
//       { type: 'required', message: 'Email is required.' },
//       { type: 'pattern', message: 'Please enter a valid email.' }
//     ],

//     'password': [
//       { type: 'required', message: 'Password is required.' },
//       { type: 'minlength', message: 'Password must be at least 5 characters long.' }
//     ]
//   };
   
//   formdata = new FormGroup({
//     emailid: new FormControl('',
//      Validators.compose([
//        Validators.required,
//        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
//     ])),
//    passwd : new FormControl('', 
//     Validators.compose([
//       Validators.minLength(5),
//       Validators.required
//     ])),
//  });


//   //for child
//   child_validation_msg = {
//     'ch_name': [
//       { type: 'required', message: 'Name is required.' },
//       { type: 'minLength', message: 'Please enter full name.' }
//     ],
//    'ch_city': [
//       { type: 'required', message: 'City is required.' },
//       { type: 'minLength', message: 'City must be at least 5 characters long.' }
//     ],
//     'ch_age': [
//       { type: 'required', message: 'Age is required.' },
//       { type: 'pattern', message: 'Age must be at two digit.' }
//     ],
//     'ch_userid': [
//       { type: 'required', message: 'User id is required.' },
//       { type: 'pattern', message: 'User id must be end @child.com' }
//     ],
//     'ch_password': [
//       { type: 'required', message: 'Password is required.' },
//       { type: 'minlength', message: 'Password must be at least 5 characters long.' }
//     ]
//   }; 


//  //for childs
//  ch_formdata = new FormGroup({
//   ch_name: new FormControl('',
//    Validators.compose([
//     Validators.minLength(5),
//      Validators.required
//   ])),
//   ch_city: new FormControl('',
//   Validators.compose([
//     Validators.required,
//     Validators.minLength(5)
//  ])),
//  ch_age: new FormControl('',
//  Validators.compose([
//    Validators.required,
//    Validators.pattern('^[0-9]|[0-2][0-9]|3[0-6]$')
// ])),
//  ch_userid: new FormControl('',
//  Validators.compose([
//    Validators.required, 
//    Validators.pattern('^[a-zA-Z0-9_.+-]+@?(child)\.com$')
// ])),
//  ch_password : new FormControl('', 
//   Validators.compose([
//     Validators.minLength(5),
//     Validators.required
//   ])),
// });



