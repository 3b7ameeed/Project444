import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import{Router} from '@angular/router';
import {DataSrvService,client} from '../data-srv.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:client;
  constructor(public dataSrv:DataSrvService,public router:Router,public fauth:AngularFireAuth) {
    this.user={} as client;
   }

  ngOnInit() {
  }
  signin(){
    this.dataSrv.addUser(this.user).then((Data)=>{
      this.router.navigateByUrl('/welc');
      //this.fauth.signInWithEmailAndPassword(this.user.email,this.user.ps);
      this.fauth.createUserWithEmailAndPassword(this.user.email,this.user.ps);
      this.dataSrv.showToast('Register Successfully')
      
    }).catch((err)=>{
      this.dataSrv.showToast('Error..')
      alert("Error..");
    });
  }
}
