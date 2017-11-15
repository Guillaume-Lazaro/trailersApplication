import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../model/Movie";

@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage {

  movie:Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = this.navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');
  }

}
