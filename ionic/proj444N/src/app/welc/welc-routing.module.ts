import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcPage } from './welc.page';

const routes: Routes = [
  {
    path: '',
    component: WelcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcPageRoutingModule {}
