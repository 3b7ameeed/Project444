import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComPage } from './com.page';

const routes: Routes = [
  {
    path: '',
    component: ComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComPageRoutingModule {}
