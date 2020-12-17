import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DataSrvService, Item } from '../data-srv.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  pros:Item;

  constructor(public dataSrv:DataSrvService,public alertCtrl:AlertController,public toastCtrl:ToastController) {
    this.pros = {} as Item;

   }

  ngOnInit() {
  }
 
  async DeleteItem(pros){
    this.dataSrv.removeFB(pros).then(() => {
            this.dataSrv.showToast('Item Deleted Sucessfully');
          }, err => {
            this.dataSrv.showToast('There was a problem deleted your item :(');
          });
        }
}
