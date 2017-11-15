import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,) { }

  doLogin() {

    if (this.account.password === '123456') {
      let toast = this.toastCtrl.create({
        message: 'Cool! Tu es maintenant loggé',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Mauvais password :/',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
}
