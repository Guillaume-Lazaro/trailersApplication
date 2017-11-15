import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {PrefsPage} from "../pages/prefs/prefs";
import {FavorisPage} from "../pages/favoris/favoris";
import {LoginPage} from "../pages/login/login";
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;
  prefsPage:any = PrefsPage;
  favorisPage:any = FavorisPage;
  loginPage:any = LoginPage;
  isLogged:boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, public menuCtrl: MenuController, public toastCtrl:ToastController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.storage.get('auth')
      .then( (value:any) => {
        this.isLogged = value;
        console.log('Je suis loggé? =>',value);
      });
  }

  openPage(page) {
    //Ajout du "contexte" pour l'user loggué
    if(!this.isLogged && page==this.favorisPage) {
      let toast = this.toastCtrl.create({
        message: 'Nope! Il faut etre loggé!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if (this.isLogged && page==this.loginPage) {
      let toast = this.toastCtrl.create({
        message: 'Nope! Tu es déjà loggé!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if (page != this.rootPage) {
      this.nav.push(page);
      this.menuCtrl.close();
    }
  }
}

