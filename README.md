# IonicFramework:
(See more api)[https://ionicframework.com/docs/api/button]

This is a basic ionic 4 tutorials
>Ionic framework provides tools & services for developing hybrid mobile apps using web technologies like- Css, Html5 and Sass etc.

>Ionic is builds on top of AngularJS and Apache cordova by using javascript technology.


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
 

 


  
    
