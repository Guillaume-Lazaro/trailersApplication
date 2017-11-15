import {Component, ViewChild} from '@angular/core';
import {List, NavController} from 'ionic-angular';
import {Movie} from "../../model/Movie";
import {TrailersProvider} from "../../providers/trailers/trailers";
import {TrailerPage} from "../trailer/trailer";
//import {TrailerPage} from "../trailer/trailer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('listMovies') list: List;
  movies: Array<Movie> = [];

  constructor(public navCtrl: NavController, public trailerProvider: TrailersProvider) {

  }

  ionViewDidLoad() {
    this.trailerProvider.getTrailersPromise()
      .then(() => {
        this.movies = this.trailerProvider.getClone();
        console.log('src=',this.movies[0].posterUrl);
      });
  }

  goToMovie(movie: Movie) {
    this.navCtrl.push(TrailerPage, {movie: movie});
  }
}
