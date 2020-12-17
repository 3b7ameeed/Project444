import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {DataSrvService} from '../data-srv.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss'],
})
export class ComparePage implements OnInit {

  constructor(public dataSrv:DataSrvService,public navCtrl:NavController) { }

  ngOnInit() {
  }
  addCart(i){
    //this.dataSrv.cart.push(this.dataSrv.list[i]);
    //console.log(this.dataSrv.cart);
    
  }
}
