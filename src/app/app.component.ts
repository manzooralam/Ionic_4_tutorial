import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  signal_app_id:string='b0ab9e92-fc14-4bda-be54-286c77e82a9a'
  firebase_id:string='51814017590'
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal:OneSignal
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.oneSignal.startInit(this.signal_app_id, this.firebase_id);

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

         this.oneSignal.handleNotificationReceived().subscribe((res) => {
              // do something when notification is received
               console.log(res)
         });

         this.oneSignal.handleNotificationOpened().subscribe((res) => {
              // do something when a notification is opened
              console.log(res)
      });

         this.oneSignal.endInit();

    });
  }
}
