import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PrefsPage} from "../pages/prefs/prefs";
import {FavorisPage} from "../pages/favoris/favoris";
import {TrailerPage} from "../pages/trailer/trailer";
import {LoginPage} from "../pages/login/login";
import { ApiProvider } from '../providers/api/api';
import { TrailersProvider } from '../providers/trailers/trailers';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from "@ionic/storage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrefsPage,
    LoginPage,
    FavorisPage,
    TrailerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrefsPage,
    LoginPage,
    FavorisPage,
    TrailerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    TrailersProvider
  ]
})
export class AppModule {}
