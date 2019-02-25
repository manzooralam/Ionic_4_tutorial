import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import {Validators} from '@angular/forms'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 title:string=""
  emailid;
  car:string=''

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


  //for child
  child_validation_msg = {
    'ch_name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minLength', message: 'Please enter full name.' }
    ],
   'ch_city': [
      { type: 'required', message: 'City is required.' },
      { type: 'minLength', message: 'City must be at least 5 characters long.' }
    ],
    'ch_age': [
      { type: 'required', message: 'Age is required.' },
      { type: 'pattern', message: 'Age must be at two digit.' }
    ],
    'ch_userid': [
      { type: 'required', message: 'User id is required.' },
      { type: 'pattern', message: 'User id must be end @child.com or @parent.com' }
    ],
    'ch_password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  }; 


 //for childs
 ch_formdata = new FormGroup({
  ch_name: new FormControl('',
   Validators.compose([
    Validators.minLength(5),
     Validators.required
  ])),
  ch_city: new FormControl('',
  Validators.compose([
    Validators.required,
    Validators.minLength(5)
 ])),
 ch_age: new FormControl('',
 Validators.compose([
   Validators.required,
   Validators.pattern('^[0-9]|[0-2][0-9]|3[0-6]$')
])),
 ch_userid: new FormControl('',
 Validators.compose([
   Validators.required, 
   Validators.pattern('^[a-zA-Z0-9_.+-]+@?(child|parent)\.com$')
])),
 ch_password : new FormControl('', 
  Validators.compose([
    Validators.minLength(5),
    Validators.required
  ])),
});


 onClickSubmit(data) {this.emailid = data.emailid;}
  
 customPopoverOptions: any = {
  header: 'Hair Color',
  subHeader: 'Select your hair color',
  message: 'Only select your dominant hair color'
};

}
