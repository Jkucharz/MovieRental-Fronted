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

  logged;
  movies;
  showBorrowButton = false;

  constructor(private authService: AuthService, private cartService: CartService, private movieService: HttpMoviesService) {

  }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
  }

  borrow() {
    this.cartService.borrowMovies();
    this.cartService.removeAllMovies();
    window.location.reload();
  }

  removeMovie(movie) {
    this.cartService.removeMovie(movie);
    this.getAllMovies();
  }

  getAllMovies() {
    this.movies = this.cartService.getMovies();
  }

  private subcribeVariable() {
    this.authService.setUserName();
    this.authService.getLogged().subscribe(value=>{
      this.logged = value;});
    this.cartService.getCartElementNumber().subscribe(value => {
      if(value==0){
        this.showBorrowButton = false;
      }else{
        this.showBorrowButton = true;
      }
    });

  }
}



