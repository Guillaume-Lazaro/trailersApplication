import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {Movie} from "../../model/Movie";
import Trailer from "../../../../../Angular/tp1.3/Trailer";

/*
  Generated class for the TrailersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrailersProvider {

  movies:Array<Movie>;

  constructor(private apiService: ApiProvider) {
  }

  getTrailerListPromise() {
    return new Promise((resolve, reject) => {
      this.apiService.get()
        .subscribe((result: any) => {

          //test:
          (<any>result).forEach( function(m:any) {
            let t:any = m.trailers[0];
            let newTrailer:Trailer = new Trailer(t.postdate, t.url, t.type, t.exclusive, t.hd);

            let trailers:Array<Trailer> = [];
            trailers.push(newTrailer);

            let newMovie:Movie = new Movie(m.title, m.releasedate, m.studio, m.poster, m.location, m.rating, m.genre, m.directors, m.actors, trailers);
            this.movies.push(newMovie);
          });
          //

          /*
          this.movies = result.map((movie) => new Movie(movie.title, movie.studio, movie.releasedate,
            movie.poster, movie.location, movie.rating, movie.genre, movie.directors, movie.actors));
          */
        }, () => {
          console.log('error');
          reject();
        }, () => {
          resolve();
        });
    });
  }

  getClone() {
    return ([...this.movies]);
  }
}
