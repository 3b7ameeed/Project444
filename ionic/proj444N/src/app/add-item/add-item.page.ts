import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';
import { DataSrvService, Item } from '../data-srv.service';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  pros:Item;
  selectedFile:any;
  private items:Observable<Item[]>;
  private itemsCollectionRef:AngularFirestoreCollection<Item>;
  constructor(public dataSrv:DataSrvService,
              public router:Router,
              public toastCtrl:ToastController,
              public storage:AngularFireStorage,
              public afs:AngularFirestore) {
    this.pros = {} as Item;
    this.itemsCollectionRef=this.afs.collection('Items');
    this.items=this.itemsCollectionRef.valueChanges();
   }

  ngOnInit() {
  }

  chooseFile(event){
    this.selectedFile=event.target.files;
  }
  async uploadFile(id,file):Promise<any>{
    if(file && file.length){
      const task= await this.storage.ref('images').child(id).put(file[0])
      return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
    }
  }
  add(){
    this.dataSrv.addItem(this.pros)
    .then(async resp=>{
      const photo=await this.uploadFile(resp.id,this.selectedFile);
      this.router.navigateByUrl('/admin');
      this.itemsCollectionRef.doc(resp.id)
    .update({
      id:resp.id,
      photo:photo || null
    });
  }).catch(error=>{
    console.log('error');
  });

  }
}
   /*add(pros){
     
    this.dataSrv.addItem(this.pros).then(async heap => {
            const imageUrl=await this.uploadFile(this.dataSrv. items.id,this.selectedFile);
            this.router.navigateByUrl('/admin');
            this.dataSrv.showToast('Item Added Sucessfully');
          }, err => {
            this.dataSrv.showToast('There was a problem adding your item :(');
          });
        }
     */
   

