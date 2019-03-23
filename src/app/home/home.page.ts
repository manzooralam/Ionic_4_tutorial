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
    this.youtube.openVideo('KVngsAZ-VvA');
  }

}
