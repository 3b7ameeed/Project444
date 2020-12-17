import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {DataSrvService} from '../data-srv.service';
import{ViewPage} from '../view/view.page';
@Component({
  selector: 'app-welc',
  templateUrl: './welc.page.html',
  styleUrls: ['./welc.page.scss'],
})
export class WelcPage implements OnInit {

  constructor(public dataSrv:DataSrvService,public navCtrl:NavController,public modalCtrl:ModalController,) { }

  ngOnInit() {
  }
  /* async viewItem(i){
    
    //this.navCtrl.navigateForward('/view/'+i);
    let modal=await this.modalCtrl.create({
      component:ViewPage+i,
      backdropDismiss:false
    });
    return await modal.present();
  }

  addCart(i){
   // this.dataSrv.cart.push(this.dataSrv.list[i]);
    console.log(this.dataSrv.cart);
  }
  async Compare(i){
    //this.dataSrv.compare.push(this.dataSrv.list[i])
    const modal= await this.modalCtrl.create({
      component:ComPage,
      backdropDismiss:true
    });
    return await modal.present();
  }*/
}
