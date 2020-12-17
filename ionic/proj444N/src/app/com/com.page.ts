import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {DataSrvService} from '../data-srv.service';
import {ComparePage} from '../compare/compare.page';

@Component({
  selector: 'app-com',
  templateUrl: './com.page.html',
  styleUrls: ['./com.page.scss'],
})
export class ComPage implements OnInit {

  constructor(public dataSrv:DataSrvService, public navCtrl:NavController,public modalCtrl:ModalController ) { }

  ngOnInit() {
  }
  async Compare1(i){
    // this.dataSrv.compare.push(this.dataSrv.list[i]);
     const modal=await this.modalCtrl.create({
       component:ComparePage,
       backdropDismiss:true
     });
     return await modal.present();
   }
}
