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
    this.countElementsInCart();
  }

  getMovies() {
    this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    this.countElementsInCart();
    return this.cartMovies;
  }

  countElementsInCart(){
    if(localStorage.getItem('cart')){
      this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    }
    this.cartElementNumber.next(this.cartMovies.length);
  }

  getCartElementNumber(): Observable<number> {
    return this.cartElementNumber.asObservable();
  }
}
