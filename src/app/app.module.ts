import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './api/parent/authservice';
import { FirebaseService } from './api/parent/firebaseservice';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from './api/parent/user.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddchildPage } from './addchild/addchild.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { ChildFirebaseService } from './api/child/ChildFirebaseService';
import { AddchildPageModule } from './addchild/addchild.module';
import { FCM } from '@ionic-native/fcm/ngx';

const config = {
  //ionicdemo
  // apiKey: "AIzaSyD1Hdh_xG8KZPiVnpw6AeF3EqyEBX7LyTE",
  // authDomain: "ionicdemo-33e24.firebaseapp.com",
  // databaseURL: "https://ionicdemo-33e24.firebaseio.com",
  // projectId: "ionicdemo-33e24",
  // storageBucket: "ionicdemo-33e24.appspot.com",
  // messagingSenderId: "51814017590"
  
  //developer.manzoor123@gmail.com Api key
     apiKey: "AIzaSyB6x5B0jvBz2xhU66lu61jmJ7HX0wGGTe8",
    authDomain: "ionidemo.firebaseapp.com",
    databaseURL: "https://ionidemo.firebaseio.com",
    projectId: "ionidemo",
    storageBucket: "ionidemo.appspot.com",
    messagingSenderId: "712135941752"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(config),
    
	  AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    AddchildPageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    UserService,
    FirebaseService,
    AuthService,
    ChildFirebaseService,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
