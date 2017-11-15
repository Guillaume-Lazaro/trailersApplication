import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrefsPage } from './prefs';

@NgModule({
  declarations: [
    PrefsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrefsPage),
  ],
})
export class PrefsPageModule {}
