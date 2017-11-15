import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {PrefsPage} from "../pages/prefs/prefs";
import {FavorisPage} from "../pages/favoris/favoris";
import {TrailerPage} from "../pages/trailer/trailer";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;
  prefsPage:any = PrefsPage;
  favorisPage:any = FavorisPage;
  loginPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    if (page != this.rootPage) {
      this.nav.push(page);
    } else {
      console.log('Tes con ou quoi?!');
    }
  }
}

