import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoPagePageRoutingModule } from './logo-page-routing.module';

import { LogoPagePage } from './logo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoPagePageRoutingModule
  ],
  declarations: [LogoPagePage]
})
export class LogoPagePageModule {}
