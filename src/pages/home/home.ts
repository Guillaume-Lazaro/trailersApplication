import {Component, ViewChild} from '@angular/core';
import {List, NavController} from 'ionic-angular';
import {Movie} from "../../model/Movie";
import {TrailersProvider} from "../../providers/trailers/trailers";
import {TrailerPage} from "../trailer/trailer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('listMovies') list: List;
  listMovies: Array<Movie> = [];

  constructor(public navCtrl: NavController, public trailerService: TrailersProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailersPage');
    this.trailerService.getTrailerListPromise()
      .then(() => {
        this.listMovies = this.trailerService.getClone();
      });
  }

  /*
  gotToMovie(movie) {
    this.navCtrl.push(TrailerPage, {movie: movie});
  }
  */

}
