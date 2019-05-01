# IonicFramework:
(See more api)[https://ionicframework.com/docs/api/button]

This is a basic ionic 4 tutorials
>Ionic framework provides tools & services for developing hybrid mobile apps using web technologies like- Css, Html5 and Sass etc.

>Ionic is builds on top of AngularJS and Apache cordova by using javascript technology.



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
 

 


  
    
