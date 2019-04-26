# Get Device Latitude, Longitude and Address using Geolocation and Native Geocoder Services in Ionic 4 Native Application

#### Using Geolocation service we can get Lattitude, Longitude, Accuracy of location, Speed, Altitude etc of the device. After that Latitude and Longitude can be used to get Addresses available on these coordinates. To fetch address from coordinates of the device, we use Geocoder service

(More details)[https://medium.com/enappd/using-geolocation-and-beacon-plugins-in-ionic-4-754b41304007]

## Step 1:
Create a new Ionic Application
Install latest version of Ionic and Cordova CLI.
`npm install -g ionic cordova `
Now we will create a new blank application

`$ ionic start ProjectName `

## Step 2: 
 Install the Cordova and Ionic Native plugins
 
 >Geolocation:
 ```
 $ ionic cordova plugin add cordova-plugin-geolocation
$ npm install @ionic-native/geolocation
```
This plugin will use device location service to fetch latitude, longitude, accuracy, altitude, altitudeAccuracy, altitudeAccuracy, heading, speed

 >Geocoder:
 ```
 $ionic cordova plugin add cordova-plugin-nativegeocoder
$ npm install @ionic-native/native-geocoder
```
It will return address for provided coordinates, and also do reverse geocoding.


## Step 3: 
Add this plugin in the application’s module file
In app.module.ts, import plugin and add in imports array.

```
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Geolocation,
    NativeGeocoder,
  
  ],

```

## Step 4: 
In home.page.html, add following HTML

```
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic 4 Geolocation & Geocoder
    </ion-title>
  </ion-toolbar>
</ion-header>
 
<ion-content padding>
  <h1>Get Location</h1>
 
  <ion-button (click)="getGeolocation()">
    Get Location
  </ion-button>
  <ion-button (click)="watchLocation()">
    Watch Location Updates
  </ion-button>
  <ion-button (click)="stopLocationWatch()">
    Stop Location Watch
  </ion-button>
 
  <div *ngIf="geoLatitude">
    <p>Latitude : {{geoLatitude}}</p>
    <p>Longitude : {{geoLongitude}}</p>
    <p>Accuracy : {{geoAccuracy}}</p>
    <p class="address-text">
 
      <span class="watch-text" *ngIf="isWatching; else notWatching">
        Watching Location
      </span>
      <ng-template #notWatching>
        Location Watch Stopped
      </ng-template>
 
      <br>Address : {{geoAddress }}
    </p>
  </div>
 
</ion-content>
```
Here we have three buttons to fetch location coordinates, Watch location updates and stop location updates. After successfully fetching we are showing information returned.


## Step 5:
Update component with methods
Replace below code in home.page.ts file

```
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder/ngx';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
 
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
 
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
  }
 
  
    //Get current coordinates of device
    getGeolocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
       }).catch((error) => {
         alert('Error getting location'+ JSON.stringify(error));
       });
    }
  
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude,longitude){
      this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderReverseResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location'+ JSON.stringify(error));
      });
    }
  
    //Return Comma saperated address
    generateAddress(addressObj){
        let obj = [];
        let address = "";
        for (let key in addressObj) {
          obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
          if(obj[val].length)
          address += obj[val]+', ';
        }
      return address.slice(0, -2);
    }
  
  
    //Start location update watch
    watchLocation(){
      this.isWatching = true;
      this.watchLocationUpdates = this.geolocation.watchPosition();
      this.watchLocationUpdates.subscribe((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      });
    }
  
    //Stop location update watch
    stopLocationWatch(){
      this.isWatching = false;
      this.watchLocationUpdates.unsubscribe();
    }
}
```
Above code is having inline comments to explain methods. Geolocation and Geocoder methods with configuration definitions.


## Step 6:
 Pinch of CSS styling in home.page.scss
```
page-home {
    .address-text{
        text-align: center;
        font-size: 20px;
    }
    .watch-text{
        font-size: 18px;
    }
}
```

>> That’s it you can now test your application in a real device after building apk using this command $ ionic cordova build android 
 

## Issued And Resolved:
<a href="https://ibb.co/M6V5rPf"><img src="https://i.ibb.co/M6V5rPf/Screenshot-10.png" alt="Screenshot-10" border="0"></a>
