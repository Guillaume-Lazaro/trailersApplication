import {Trailer} from "./Trailer";

export class Movie {
  title:string;
  releaseDate:string;
  studio:string;
  posterUrl:string;
  location:string;
  rating:string;
  genre:Array<string>;    //TODO enum de genres?
  directors:string;
  actors:Array<string>;   //TODO classe person?
  trailers:Array<Trailer>;

  constructor(title: string, releaseDate: string, studio: string, posterUrl: string, location: string, rating: string, genre: Array<string>, directors: string, actors: Array<string>, trailers: Array<Trailer>) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.studio = studio;
    this.posterUrl = posterUrl;
    this.location = location;
    this.rating = rating;
    this.genre = genre;
    this.directors = directors;
    this.actors = actors;
    this.trailers = trailers;
  }

  toString() {
    return `${this.title} réalisé par ${this.directors} avec ${this.actors} `;
  }
}
