import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FCM } from '@ionic-native/fcm/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  //ionicdemo
  apiKey: "AIzaSyD1Hdh_xG8KZPiVnpw6AeF3EqyEBX7LyTE",
  authDomain: "ionicdemo-33e24.firebaseapp.com",
  databaseURL: "https://ionicdemo-33e24.firebaseio.com",
  projectId: "ionicdemo-33e24",
  storageBucket: "ionicdemo-33e24.appspot.com",
  messagingSenderId: "51814017590"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule
    ],
  providers: [
    FCM,
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
