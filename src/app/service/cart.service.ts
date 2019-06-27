import { Injectable } from '@angular/core';
import { Movie } from './http-movies.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartMovies = new Array<Movie>();
  cartElementNumber = new Subject<number>();


  constructor() { }

  addMovie(movie: Movie) {
    this.cartMovies.push(movie);
    localStorage.setItem('cart', JSON.stringify(this.cartMovies));
  }

  getMovies() {
    this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    return this.cartMovies;
  }

  getcartElementNumber(): Observable<number> {
    return this.cartElementNumber.asObservable();
  }
}
