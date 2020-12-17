import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {DataSrvService} from '../data-srv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cons=0;

  constructor(public dataSrv:DataSrvService,public modalCtrl:ModalController,public alertCtrl:AlertController) { }

  ngOnInit() {
  }
  /*
  deleteItem(i){
    this.dataSrv.cart.splice(1,i);
  }
 async checkOut(){
   if(this.dataSrv.cart.length==0){
    let alert= await this.alertCtrl.create({
      header:'Error',
      message:'The card is empty',
      buttons:['Ok']
    });
    alert.present();
   }
   else{
    for(var i=0;i<this.dataSrv.cart.length;i++){
      this.cons+=this.dataSrv.cart[i].price;
    }
    let alert= await this.alertCtrl.create({
      header:'Total Price',
      message:'tot',
      buttons:['Ok']
    });
    alert.present();
  }
}*/
}
