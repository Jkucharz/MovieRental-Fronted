import { Injectable } from '@angular/core';
import { Movie } from './http-movies.service';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartMovies = new Array<Movie>();
  cartElementNumber = new Subject<number>();


  constructor(private http: HttpClient) { }

  addMovie(movie: Movie) {
    this.cartMovies.push(movie);
    localStorage.setItem('cart', JSON.stringify(this.cartMovies));
    this.countElementsInCart();
  }

  removeMovie(x: Movie) {
    this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    const index = this.cartMovies.findIndex(movie => movie.id === x.id);
    this.cartMovies.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartMovies));
    this.countElementsInCart();
  }

  removeAllMovies() {
    localStorage.removeItem('cart');
    this.cartMovies = null;
  }

  getMovies() {
    this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    this.countElementsInCart();
    return this.cartMovies;
  }

  borrowMovies() {
    this.cartMovies = JSON.parse(localStorage.getItem('cart'));
    let titles = new Array();
    for (var item of this.cartMovies) {
      titles.push({
        "title": item.title
      });
    }
    const moviesToBorrow: MoviesToBorrow = ({
      movies: titles
    });
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    this.http.post('http://localhost:8080/rental/add', moviesToBorrow, { headers: headers }).subscribe(post => {
      this.removeAllMovies();
    });
  }

  countElementsInCart() {
    if (localStorage.getItem('cart')) {
      this.cartMovies = JSON.parse(localStorage.getItem('cart')); 
      this.cartElementNumber.next(this.cartMovies.length);
    }
    this.cartElementNumber.next(this.cartMovies.length);
  }

  getCartElementNumber(): Observable<number> {
    return this.cartElementNumber.asObservable();
  }
}

export interface MoviesToBorrow {
  movies;
}