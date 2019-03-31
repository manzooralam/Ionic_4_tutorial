import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
      //fcm code start 
      this.fcm.getToken().then((token)=>{
        localStorage.setItem("token",token);
       // alert(token)

    }, (err)=>{
          alert(JSON.stringify(err));
    })

    this.fcm.onNotification().subscribe((data)=>{
      if(data.wasTapped){
         
      }
      else{
         alert(data.message);
      }
    })


    this.fcm.onTokenRefresh().subscribe((token)=>{
      localStorage.setItem("token",token)
    })
 //fcm code end
    });
  }
}
