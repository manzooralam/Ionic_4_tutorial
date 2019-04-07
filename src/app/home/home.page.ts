import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count;

  constructor(public http:Http){

    http.get('https://us-central1-ionidemo.cloudfunctions.net/helloWorld')
    .subscribe((data) => {
      console.log('data', data);
    })

    http.get('https://us-central1-ionidemo.cloudfunctions.net/countTasks')
    .subscribe((data) => {
      console.log('data', data);
      this.count = data.json().count;
    })
  }

}
