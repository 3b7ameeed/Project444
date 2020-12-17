import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalCtrl:ModalController) {}
  /*async login(){
    const log=await this.modalCtrl.create({
      component:LoginPage,
      backdropDismiss:true,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    
      
    });
    return await log.present();
  }
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }*/
}
