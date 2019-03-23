#Demo screenshot:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/qM4wncV/youtube.png" alt="youtube" border="0"></a>


#Step 1:
Create New Ionic Application
``` 
$ionic start project_name template_name
```

#step 2:
Install the Cordova and Ionic Native plugins
```
$ionic cordova plugin add cordova-plugin-youtube-video-player 
$npm install @ionic-native/youtube-video-player
```
#Step 3:
Add preference for YouTube API KEY in config.xml file.
```
<preference name="YouTubeDataApiKey" value="AIzaSyA2thzZ2XXXXXXXXXXXXXXXXXXX50Ras_A" />
```

#Step 4:
Import plugin in app.module.ts file

```
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
   
  providers: [
    YoutubeVideoPlayer
   ],
})

```

#Step: 5
Add button HTML in home.page.html file
```
//for embed video
<iframe 
     src="//www.youtube.com/embed/KVngsAZ-VvA?rel=0&showinfo=0&autohide=1"
     
      frameborder="0" allow="accelerometer; 
      autoplay; encrypted-media; gyroscope; 
      picture-in-picture" 
    allowfullscreen>
  </iframe>
	
	//for api 
<ion-button size="small" (click)="openVideo()">Open Video Player</ion-button>
```

#Step: 6
Now add this method in home.page.ts

```
import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private youtube: YoutubeVideoPlayer
  ) {}
 
  openVideo(){
    this.youtube.openVideo('videoID');
  }

}
```

#Step: 7
Add platform 
```
$ionic cordova platform add android
```
#Step: 8
Now run the project

```
$ionic cordova run android
```
#For more details:

[https://ionicframework.com/docs/native/youtube-video-player](https://ionicframework.com/docs/native/youtube-video-player)

[https://developers.google.com/youtube/v3/getting-started](https://developers.google.com/youtube/v3/getting-started)

