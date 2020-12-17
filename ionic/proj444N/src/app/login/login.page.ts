import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { DataSrvService } from '../data-srv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:{email:string,password:string};

  constructor(public dataSrv:DataSrvService,public router:Router) { }

  ngOnInit() {}

  checkLog(email,password){
  
    this.dataSrv.signIn(email,password).then(authdata=>{
      alert('succesfully login');
      this.router.navigateByUrl('/welc');
    },error=>{alert('error');
 });

    }
  
  }

