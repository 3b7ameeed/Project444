import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcPageRoutingModule } from './welc-routing.module';

import { WelcPage } from './welc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcPageRoutingModule
  ],
  declarations: [WelcPage]
})
export class WelcPageModule {}
