(More details)[https://medium.com/enappd/using-geolocation-and-beacon-plugins-in-ionic-4-754b41304007]
# Geolocation:
The most famous and familiar location feature — Geolocation is the ability to track a device’s whereabouts using GPS, cell phone towers,
WiFi access points or a combination of these. Since devices are used by individuals, 
geolocation uses positioning systems to track an individual’s whereabouts down to latitude and longitude coordinates, or more practically,
a physical address. Both mobile and desktop devices can use geolocation.
Geolocation can be used to determine time zone and exact positioning coordinates, such as for tracking wildlife or cargo shipments.

## Geocoding: 
Geocoding is the process of transforming a street address or other description of a location into a (latitude, longitude) coordinate.

## Reverse geocoding:
Reverse geocoding is the process of transforming a (latitude, longitude) coordinate into a (partial) address. 
The amount of detail in a reverse geocoded location description may vary, 
for example one might contain the full street address of the closest building, 
while another might contain only a city name and postal code.

## Let’s see briefly how we can use Geolocation in our Ionic 4 app. To install the plugin use:

```
ionic cordova plugin add cordova-plugin-geolocation
npm install @ionic-native/geolocation
```
For all plugins, the step to import the plugin in a component will remain common (just change the plugin name)

```
import { Geolocation } from '@ionic-native/geolocation/ngx';

constructor(private geolocation: Geolocation) {}
```
Once the plugin is imported, (and make sure the deviceReady has fired), you can find current location using
```
this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});
```
If you want a continuous tracking of your location, use this instead
```
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
```
(See Reference)[https://medium.com/enappd/using-geolocation-and-beacon-plugins-in-ionic-4-754b41304007]



## This small demo project, we will discuss How to Turn on Device GPS option from Ionic 4 Application itself, so that user does not need to leave application. We will use Cordova and Ionic Native plugin, which will prompt the user to turn on GPS.

## Step 1:
 Create a new Ionic 4 Application
 ` ionic start application_name `
 
## Step 2:
 Install Plugins for Application
 Here we used three plugins:
 > A: Cordova-plugin-android-permissions: 
 Get permissions by showing the permission dialogue. We will use this plugin to get Geolocation access permission, but this can be used for any type of permission
 ```
  $ ionic cordova plugin add cordova-plugin-android-permissions
  $ npm install @ionic-native/android-permissions
```

> B: Cordova-plugin-request-location-accuracy: 
Shows a dialogue to the user to turn on GPS we show in the image below so that the user does not need to leave the app or go to setting.
```
$ ionic cordova plugin add cordova-plugin-request-location-accuracy
$ npm install @ionic-native/location-accuracy
```

> C: Cordova-plugin-geolocation:
Finally after getting location access permission and turning on device GPS, we will fetch accurate device Geolocation coordinates using this Geolocation plugin.
```
$ ionic cordova plugin add cordova-plugin-geolocation
$ npm install @ionic-native/geolocation
```
## Step 3: 
Now, we need to inject these plugin in the app.module.ts file then add in providers array

```
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

providers: [
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
  ],
```

## Step 4:
Now we will use these in the application’s home component. In the home.component.ts file, we will add the following methods.

Check if the application is having permission to access device location by calling below method 
> checkGPSPermission()
```
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
```

If not then we will call requestGPSPermission() method to get location permission on the fly from the user.
> requestGPSPermission()
```
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
```

If the application is having location access permission then we will call askToTurnOnGPS() method. This is the method for which we are here this show GPS turn on dialogue in application

```
   askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
  ```
  
  After the user successfully turns on GPS then we will call getLocationCoordinates() method to get an accurate location of the device.
  ```
  / Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }
  ```
  
  ## Step 5:
  
  After adding the above methods our complete Home Component ts file will look like this
  
  ```
  import { Component } from '@angular/core';
 
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
 
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
  locationCoords: any;
  timetest: any;
 
  constructor(
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy
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
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }
 
 
}
```

## Step 6:
In Home components’ HTML template we will just have a button which will call checkGPSPermission method which we added in ts file above and also show Geolocation Coordinates received back.

```
<ion-grid fixed>
  <ion-row>
    <ion-col text-center>
      <ion-button (click)="checkGPSPermission()">
        Request GPS Accuracy
      </ion-button>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="4">Longitude</ion-col>
    <ion-col> {{locationCoords.longitude}}</ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="4">Latitude</ion-col>
    <ion-col>{{locationCoords.latitude}}</ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="4">Accuracy</ion-col>
    <ion-col>{{locationCoords.accuracy}}</ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="4">Timestamp</ion-col>
    <ion-col>{{locationCoords.timestamp | date:'medium'}}</ion-col>
  </ion-row>
</ion-grid>
```
>>This tutorial we got to know How to get user device Geolocation permission with more accuracy by turning on device GPS after providing Geolocation permission to an application.
  





