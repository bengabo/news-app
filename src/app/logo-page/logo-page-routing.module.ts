import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoPagePage } from './logo-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoPagePageRoutingModule {}
