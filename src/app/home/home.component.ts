import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpMoviesService } from '../service/http-movies.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged;
  movies;


  constructor(private authService: AuthService, private cartService: CartService, private movieService :HttpMoviesService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
  }

  addMovieToCart(movie){
    this.cartService.addMovie(movie);
    console.log(this.cartService.getMovies());
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(value=>{
      this.movies = value;
    });
  }

  private subcribeVariable(){
    this.authService.setUserName();
     this.authService.getLogged().subscribe(value=>{
       this.logged = value;
     });
  }

}