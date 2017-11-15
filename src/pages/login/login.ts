import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Storage } from '@ionic/storage';
//import {TrailersPage} from "../trailers/trailers";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userEmail:string;
  userPassword:string;
  rememberMe:boolean=false;

  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  rememberMeFormControl: FormControl;
  userFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private storage: Storage, private toastCtrl: ToastController, public navCtrl : NavController,
              public events: Events) {
    this.emailFormControl = formBuilder.control('', [Validators.email, Validators.required]);
    this.passwordFormControl = formBuilder.control('', [ Validators.required]);
    this.rememberMeFormControl = formBuilder.control('');

    this.userFormGroup = formBuilder.group({
      userEmail: this.emailFormControl,
      userPassword: this.passwordFormControl,
      rememberMe: this.rememberMeFormControl
    });
  }

  doLogin() {
    let auth = false;

    this.userPassword = this.passwordFormControl.value;
    if (this.userPassword === '123456') {
      auth = true;
    }

    if(auth){
      this.storage.set('auth', auth);
      this.storage.set('email', this.userEmail);

      let toast = this.toastCtrl.create({
        message: 'Cool! Tu es maintenant loggé',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      this.goToHomePage();
    }else{
      let toast = this.toastCtrl.create({
        message: 'Mauvais password :/',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  goToHomePage(){
    this.events.publish('user:login');
    this.navCtrl.pop();
  }
}
