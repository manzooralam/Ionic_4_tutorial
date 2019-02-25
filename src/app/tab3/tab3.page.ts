import { Component } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

class School {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ch_name:string = '';
  ch_age:number=0
  ch_class:string;
  ch_school:any;
  ch_userid:string;
  ch_password:string;

  userForm:FormGroup
  async childDetailsSubmit(){
    console.log(this.ch_name)
    const toast = await this.toastController.create({
      message: this.ch_name +this.ch_class +this.ch_age+ this.ch_school+
      this.ch_userid+ this.ch_password,
      duration: 3000
    });
    toast.present();
  
  }
  
  schools: School[];
  school: School;
  
  constructor(  private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController) {

    this.schools = [
      { id: 1, name: 'R. k high school' },
      { id: 2, name: 'K.V. bangalore' },
      { id: 3, name: 'D.A.V. delhi' },
      { id: 4, name: 'Bangalore high school' },
      { id: 5, name: 'Delhi high school' },
      { id: 6, name: 'Marathalli kids school' },
      { id: 7, name: 'D.A.V. salmari' },
      { id: 8, name: 'D.A.V. nimol' },
    ];
  }

  schoolChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.ch_school=event.value.name;
    console.log('School:', event.value.name);
  }

//  start form validation

// validation_messages = {

//   'ch_name': [
//     { type: 'required', message: 'Name is required.' },
//     { type: 'minlength', message: 'Child must be at least 5 characters long.' }
//   ],
//   'ch_userid': [
//     { type: 'required', message: 'Userid is required.' },
//     { type: 'minlength', message: 'Child must be at least 5 characters long.' }
//   ],

//   'ch_password': [
//     { type: 'required', message: 'password is required.' },
//     { type: 'minlength', message: 'Child must be at least 5 characters long.' }
//   ],
// };


}
