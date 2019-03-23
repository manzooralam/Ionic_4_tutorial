
FCM (Firebase Cloud Messaging) is an excellent way to keep our users engaged with our app,
and it also helps them by notifying them of important things that are happening.

#Step 1:
Create New Ionic Application
``` 
$ionic start project_name template_name
```
Step 2:
#Install the Cordova and Ionic Native plugins

``` 
ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated
npm install @ionic-native/fcm
```

Step 3:
#Now go into your app.module.ts file and import FCM and add it to the providers array:
```
import { FCM } from '@ionic-native/fcm';

@NgModule({
   
  providers: [
     FCM  
   ],
})
```

Step 4 :

#Register project to firebase console and get api key and google-services.json file:

Like this
<img src="https://docs.microsoft.com/en-us/azure/includes/media/notification-hubs-enable-firebase-cloud-messaging/specify-package-name-fcm-settings.png">

and download the google-services.json file

Step 5:
#Updating package name inside ionic project:

 inside-> config.xml
 
 Step 6: 
#Past google-services.json file:

inside the 
 platform -> android folder
 
 Step 7: 
#Open your app.component.ts file and import the FCM plugin

```
import { FCM } from '@ionic-native/fcm';
//Inject it into the constructor:
constructor( public fcm: FCM ) {}

this.fcm.getToken().then(token => {
    backend.registerToken(token);
});

//Receiving push notification data
this.fcm.onNotification().subscribe(data => {
  if(data.wasTapped){
  
    //true , means the user tapped the notification from the notification tray and that’s how he opened the app.
    console.log("Received in background");
    
  } 
  else {
  
     // false , means that the app was in the foreground (meaning the user was inside the app at that moment)
    console.log("Received in foreground");
  };
});

this.fcm.onTokenRefresh().subscribe(token => {
  backend.registerToken(token);
});


```
#More details :

[https://ionicframework.com/docs/native/fcm](https://ionicframework.com/docs/native/fcm)

[https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated)

[https://javebratt.com/ionic-push-notification/](https://javebratt.com/ionic-push-notification/)


#Issues  & resolved:

<a href="https://ibb.co/3hpt2Rt"><img src="https://i.ibb.co/12rH1zH/errors1.png" alt="errors1" border="0"></a>


<a href="https://ibb.co/427SfC8"><img src="https://i.ibb.co/w7RQL8S/errors2.png" alt="errors2" border="0"></a>

Changing these versions:

``` 
dependencies {
        classpath 'com.android.tools.build:gradle:3.+'
        classpath 'com.google.gms:google-services:3.+'
    }
    
    ```
#Inside the plugin -> cordova-plugin-fcm-with-dependecy-updated -> src -> android ->FCMPlugin.gradle
 
 According to 

[https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated/blob/master/src/android/FCMPlugin.gradle](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated/blob/master/src/android/FCMPlugin.gradle)

and 

#Platforms -> android ->project.properties:

changed to this:
```
target=android-27
android.library.reference.1=CordovaLib
android.library.reference.2=app
cordova.system.library.1=com.google.android.gms:play-services-auth:10.+
cordova.system.library.2=com.google.android.gms:play-services-identity:10.+
cordova.system.library.3=com.android.support:support-annotations:27.+
cordova.system.library.4=com.android.support:appcompat-v7:23+
cordova.gradle.include.1=cordova-plugin-telerik-imagepicker/auth-ignorelinterrors.gradle
cordova.gradle.include.2=cordova-plugin-telerik-imagepicker/auth-androidtarget.gradle
cordova.system.library.5=com.android.support:support-v4:24.1.1+
cordova.system.library.6=com.android.support:exifinterface:25+
cordova.system.library.7=com.google.firebase:firebase-core:10.+
cordova.system.library.8=com.google.firebase:firebase-messaging:10.+
cordova.gradle.include.3=cordova-plugin-fcm-with-dependecy-updated/auth-FCMPlugin.gradle

```

