import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';

import { NgCalendarModule  } from 'ionic2-calendar';


@Component({
  selector: 'app-cal-details-page',
  templateUrl: './cal-details-page.page.html',
  styleUrls: ['./cal-details-page.page.scss'],
})
export class CalDetailsPagePage implements OnInit {
  calName = '';
  events = [];
  selectedDate:string

  title:string
  eventSource=[]
  

  calendar={
    mode:'month',
     currentDate:new Date()
   }
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private plt: Platform) {

    this.calName = navParams.get('name');
 
     }
  ngOnInit() {
  }
  onViewTitleChanged(titleChanged){
    this.title=titleChanged
    console.log("titleChanged"+titleChanged)

  }
onEventSelected(onEventSelected){  
    console.log("onEventSelected"+onEventSelected)
}
onTimeSelected(onTimeSelected){
   console.log("onTimeSelected"+onTimeSelected)
  }
onCurrentDateChanged(onCurrentDateChanged){
  
  this.selectedDate=this.convert(onCurrentDateChanged)
 // month=onCurrentDateChanged.month
   console.log("onCurrentDateChanged"+onCurrentDateChanged)
}

 convert(str) {
  var currentDate = new Date(str);
      // mnth = ("0" + (date.getMonth()+1)).slice(-2),
      // day  = ("0" + date.getDate()).slice(-2);
      var day = currentDate.getDate();
      var month = currentDate.getMonth();    //Be careful! January is 0 not 1
      var year = currentDate.getFullYear();
  
     // this.todayDocId = date + "-" + (month + 1) + "-" + year;
      
      return [ day ,month +1,year].join("-");
}

//convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)");
}
