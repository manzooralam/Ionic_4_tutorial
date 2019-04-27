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
(See refference)[https://medium.com/enappd/using-geolocation-and-beacon-plugins-in-ionic-4-754b41304007]
