import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { ToastController } from '@ionic/angular';
import{AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';


export interface client{
  id?:string,
  fn:string,
  ln:string,
  un:string,
  ps:string,
  gender:string,
  email:string
}

export interface Item{
  id?:string;
  type:string;
  brand:string;
  disSize:string;
  os:string;
  pc:number;
  hard:string;
  ram:number;
  price:number;
  photo:string;
}
export interface hnono{
  name:string;
  desc:string;
  quan:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataSrvService {
  
  public user:Observable<client[]>;
  usersCollectionRef:AngularFirestoreCollection<client>;
  
  private items:Observable<Item[]>;
  private itemsCollectionRef:AngularFirestoreCollection<Item>;
  
  constructor(private afs:AngularFirestore,
              public toastCtrl:ToastController,
              private afAuth:AngularFireAuth,
              public router:Router) { 
    this.usersCollectionRef=this.afs.collection('Users');
    this.user=this.usersCollectionRef.valueChanges();

    this.itemsCollectionRef=this.afs.collection<Item>('Items');
    
    this.items = this.itemsCollectionRef
    .snapshotChanges()
    .pipe( map( (actions) =>
    actions.map( a =>
      {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id,...data};
      }
)
));
}
showToast(msg){
  this.toastCtrl.create({
    message:msg,
    duration:2000
  }).then(toast=>toast.present());
}

 getItem(id: string): Observable<Item> {
      return this.itemsCollectionRef.doc<Item>(id).valueChanges().pipe(
        map(item => {
          item.id = id;
          return item
        })
      );
    }
  
getItems():Observable<Item[]>{
  return this.items;
}
  addItem(pros:Item):Promise<any>{
    return this.itemsCollectionRef.add(pros);
    
  }
  addUser(user:client):Promise<any>{
    return this.usersCollectionRef.add(user);
  }
  removeFB(item:Item):Promise<any>{
    return this.itemsCollectionRef.doc(item.id).delete();
  }
  updateFB(item:Item):Promise<void>{
    return this.itemsCollectionRef.doc(item.id)
    .update({
      brand:item.brand,
      disSize:item.disSize,
      hard:item.hard,
      os:item.os,
      pc:item.pc,
      photo:item.photo,
      price:item.price,
      ram:item.ram,
      type:item.type
    });
  }
  getItemByIndex(index){
    return this.items[index];
  }
  public compare=[];
  //public newList:Item;
  public cart=[];

  signIn(email:string,password:string):Promise<any>
  {
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  
  signOut():Promise<void>{
    return this.afAuth.signOut();
  }
  signUpUser(email:string,password:string):Promise<any>
  {
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }
  
  /*signIn(email:string,password:string):Promise<any>{
    this.router.navigateByUrl('/admin');
    return this.afauth.signInWithEmailAndPassword(email,password);
    .then((Response)=>this.showToast('Welcome to our home'))
    .catch((err)=>this.showToast('Invalid Email or Password'));
  }*/
  
}
