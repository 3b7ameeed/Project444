import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComPageRoutingModule } from './com-routing.module';

import { ComPage } from './com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComPageRoutingModule
  ],
  declarations: [ComPage]
})
export class ComPageModule {}
