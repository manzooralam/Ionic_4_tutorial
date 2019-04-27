import { Component } from '@angular/core';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
 import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

//import {  NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  locationCoords: any;
  timetest: any;
  locationAddress:any;
  
  constructor(
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
     private nativeGeocoder: NativeGeocoder
     ) {
    
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();
  }
 
 
  //Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
 
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
 
          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }
 
  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }
 
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
 
  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;

     this.reverseGeocode(this.locationCoords.latitude, this.locationCoords.longitude);

    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

reverseGeocode(lat : number, lng : number) : Promise<any>
  {
   return new Promise((resolve, reject) =>
   {
      this.nativeGeocoder.reverseGeocode(lat, lng)
      .then((result) =>
      {  
        //let newResult: NativeGeocoderResultModel = JSON.parse(JSON.stringify(result));
         this.locationAddress  = JSON.parse(JSON.stringify(result));
         resolve(this.locationAddress);
      })
      .catch((error: any) =>
      {
         reject(error);
      });
   });
}

//   getLocationAddress(lat,long){

//     this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, { useLocale: true, maxResults: 1 });
 
//     function success(result) {
//          var firstResult = result[0];
//            console.log("First Result: " + JSON.stringify(firstResult));
//   }
 
//     function failure(err) {
//               console.log(err);
//   }
// }

// /////
//     let options: NativeGeocoderOptions = {
//       useLocale: true,
//       maxResults: 5
//   };
//  // this.nativeGeocoder.reverseGeocode(success, error,lat, long, options)
//   }

  

}
