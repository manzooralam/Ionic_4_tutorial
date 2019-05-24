import { Component } from '@angular/core';
import { NavController, Platform, PopoverController } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalDetailsPagePage } from '../cal-details-page/cal-details-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 title:string
  eventSource=[]

  calendar={
    mode:'month',
     currentDate:new Date()
   }

  constructor(public navCtrl: NavController,  private plt: Platform,
    private popoverController:PopoverController) {

      // this.calendar.createCalendar('MyCalendar').then(
      //   (msg) => { alert(msg);},
      //   (err) => { console.log(err); }
      // );
    // this.plt.ready().then(() => {
    //   this.calendar.listCalendars().then(data => {
    //     this.calendars = data;
    //   });
    // })
  }
//   onViewTitleChanged(titleChanged){
//     this.title=titleChanged
//     console.log("titleChanged"+titleChanged)

//   }
// onEventSelected(onEventSelected){    console.log("onEventSelected"+onEventSelected)
// }
// onTimeSelected(onTimeSelected){ console.log("onTimeSelected"+onTimeSelected)}
// onCurrentDateChanged(onCurrentDateChanged){
//    console.log("onCurrentDateChanged"+onCurrentDateChanged)
// }

  // addEvent(cal) {
  //   let date = new Date();
  //   let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 };
 
  //   this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(res => {
  //   }, err => {
  //     console.log('err: ', err);
  //   });
  // }
 
//  async openCal(cal) {
//      // this.navCtrl.push('CalDetailsPage', { name: cal.name })

//     const modal = await this.popoverController.create({
//       component: CalDetailsPagePage,
//       translucent: true,
//       cssClass: 'my-child_popover',
//       componentProps: { name: cal.name }

//     });
//     await modal.present();

    

//   }

  async getCalendar(){
    const modal = await this.popoverController.create({
      component: CalDetailsPagePage,
      translucent: true,
      cssClass: 'my-child_popover',
      componentProps: { name: 123 }

    });
    await modal.present();
  }
}
