import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {Movie} from "../../model/Movie";
//import {Trailer} from "../../model/Trailer";

@Injectable()
export class TrailersProvider {

  movies:Array<Movie> = [];

  constructor(private apiProvider: ApiProvider) {
  }

  getTrailersPromise() {
    return new Promise((resolve, reject) => {
      this.apiProvider.get()
        .subscribe((result: any) => {

          /*(<any>result).forEach( function(m:any) {
            let t:any = m.trailers[0];
            let newTrailer:Trailer = new Trailer(t.postdate, t.url, t.type, t.exclusive, t.hd);

            let trailers:Array<Trailer> = [];
            trailers.push(newTrailer);

            let newMovie:Movie = new Movie(m.title, m.releasedate, m.studio, m.poster, m.location, m.rating, m.genre, m.directors, m.actors, trailers);
            this.movies.push(newMovie);
          });
          */

          this.movies = result.map((movie) => new Movie(movie.title, movie.studio, movie.releasedate,
            movie.poster, movie.location, movie.rating, movie.genre, movie.directors, movie.actors));

        }, () => {
          console.log('error depuis trailerProvider');
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
