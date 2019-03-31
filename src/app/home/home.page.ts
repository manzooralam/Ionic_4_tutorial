import { Component } from '@angular/core';
import { ParentLoginPage } from '../parent-login/parent-login.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 constructor(private modalController :ModalController,
            private router:Router){

 }

  async parentLogin(){

    // const modal = await this.modalController.create({
    //   component: ParentLoginPage,
    //   //componentProps: { value: 123 }
    // });
    //  await modal.present();

    this.router.navigate(['/parent-login'])
  }

  async childLogin(){

    // const modal = await this.modalController.create({
    //   component: ParentLoginPage,
    //   //componentProps: { value: 123 }
    // });
    //  await modal.present();

    this.router.navigate(['/child-login'])
  }
}
