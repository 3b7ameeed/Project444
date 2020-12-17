import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataSrvService,Item} from '../data-srv.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  pros:Item={} as Item;
  index;
  constructor(public dataSrv:DataSrvService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {}
  ionViewWillEnter(){
    let id=this.ActivatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.dataSrv.getItem(id).subscribe(pros=>{this.pros=pros});
    }
  }
}
