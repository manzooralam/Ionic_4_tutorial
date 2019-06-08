# IonicFramework:

(See about document)[https://ionicframework.com/docs]

(See about component)[https://ionicframework.com/docs/components]

(See about native)[https://ionicframework.com/docs/native]

(See ionic 4 lifecycle)[https://ionicframework.com/docs/lifecycle/angular]

This is a basic ionic 4 tutorials
>Ionic framework provides tools & services for developing hybrid mobile apps using web technologies like- Css, Html5 and Sass etc.

>Ionic is builds on top of AngularJS and Apache cordova by using javascript technology.


## -----------------****************************----------------------


## Ionic-4 tutorial  contents :
* [Calendar_ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/Calendar_ionic_4)
* [FCM_Ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/FCM_Ionic_4)
* [Chatting_QA_Ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/Chatting_QA_Ionic_4)
* [FetchAddressCoordinates_Ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/FetchAddressCoordinates_Ionic_4)
* [FirebaseCloudFunction_ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/FirebaseCloudFunction_ionic_4)
* [OneSignalNotification_Ionic_4](https://github.com/manzooralam/Ionic_4_tutorial/tree/OneSignalNotification_Ionic_4)




## -----------------****************************----------------------



## status bar color changes:

 <a href="https://imgbb.com/"><img src="https://i.ibb.co/7nLTNzX/appbarcolor.png" alt="appbarcolor" border="0"></a>
 
 #### Step 1:
    Add platform
    
    ` $ ionic cordova platform add android `
    
  #### Step 2:
    Then add cordova plugin add cordova-plugin-statusbar
    
    ` $ cordova plugin add cordova-plugin-statusbar `
    
  #### Step 3:
   Now Comes config.xml file 
   add following lines in your preference list.
```
<preference name=”StatusBarOverlaysWebView” value=”true”/>
<preference name=”StatusBarBackgroundColor” value=”green”/>
<preference name=”StatusBarStyle” value=”lightcontent”/>  
 ```
you can use either words or color codes like(#387ef5) in value of StatusBarBackgroundColor.

` Exampe: <preference name=”StatusBarBackgroundColor” value=”#387ef5″/> `


  
##  --------------*************************************--------------------   


## Icon & splash screen changes:

 #### step 1: 
   Takes icon size: 1024 * 1024 pixel, splash screen size: 2732 * 2732 pixel
   
 #### Step 2:
    Put these inside the resources folder 
    
 #### Step 3:   
    ` ionic cordova platform add android `
    
 #### Step 4:
 Changes package_name and name of app
 
 inside the config.xml file
 
 #### Step 5:   
   Run 
   ` $cordova prepare`
   
  #### Step 6:  
  then run 
  ` $ cordova platform update android `
  
   #### Step 7: 
   ` $ cordova platform rm android `
   
  #### Step 8:   
  Again run 
  ` $ cordova platform add android `
  
  #### Step 9:  
  
  ` $ ionic cordova resources `
  
   #### Step 10:
   
   ` $ cordova prepare `
   
   #### Step 11:
   
   ` $ cordova run android `
 


## Adding Ion Loading:

 <a href="https://imgbb.com/"><img src="https://i.ibb.co/9cm0sz4/loader.png" alt="loader" border="0"></a>
 
  It is similar to the progress bar in native android app
   with loader icon and message.
   eg. progressDialog = new ProgressDialog(this);
   
   
  Ionic loading component is available in @ionic/angular so we don’t need to use any plugin for that. We simply need to import LoadingController in component or service.
#### Step 1:

  ```
  import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(
    public loadingController: LoadingController
  ) {
  }
 
    ...
    ...
  
}
```
We have two methods available create and dismiss, these return promises as callbacks

```
   this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 20000,
      cssClass:'custom-loader-class'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
   
   ```
   
#### Step 3:
changes in css

```
.custom-loader-class{
    --background:#F4B004;
    --spinner-color:#F94701;
}
```

#### Another eg when call api/ server

```
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
   loaderToShow: any;
 
  constructor(
    public loadingController: LoadingController
  ) {
  }
 
  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'This Loader will Not AutoHide'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
  
}

```
 


  
    
