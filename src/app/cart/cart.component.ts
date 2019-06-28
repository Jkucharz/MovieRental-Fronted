import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpMoviesService } from '../service/http-movies.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  movies;


  constructor(private authService: AuthService, private cartService: CartService, private movieService: HttpMoviesService) { 
  }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
  }

  borrow(){
    this.cartService.borrowMovies();
  }

  removeMovie(movie){
    this.cartService.removeMovie(movie);
    this.getAllMovies();
  }

  getAllMovies() {
    this.movies = this.cartService.getMovies();
  }

  private subcribeVariable() {
    this.authService.setUserName();

  }

}
