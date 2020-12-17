import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataSrvService, Item } from '../data-srv.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
pros:Item={} as Item;
index;
  constructor(public dataSrv:DataSrvService,
              public ActivatedRoute:ActivatedRoute,
              public alertCtrl:AlertController,
              private toastCtrl: ToastController,
              private route:Router) {}

  ngOnInit() {}
  ionViewWillEnter(){
    let id=this.ActivatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.dataSrv.getItem(id).subscribe(pros=>{this.pros=pros});
    }
  }
  showToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:2000
    }).then(toast=>toast.present());
  }
  async update(){
    
    this.dataSrv.updateFB(this.pros).then(()=>{
      this.showToast('Updated Successfully');
      this.route.navigateByUrl('/admin');
    },
    err=>{this.showToast('There was a problem updating your idea');
    });
    
    let Data=await this.alertCtrl.create({
      header:'Delete Item',
      message:'Done',
      buttons:['Ok']
    });
  }
}
