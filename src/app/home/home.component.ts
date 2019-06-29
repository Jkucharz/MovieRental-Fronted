import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpMoviesService } from '../service/http-movies.service';
import { CartService } from '../service/cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged;
  movies;

  sortBy = 'title';
  sortType;

  constructor(private authService: AuthService, private cartService: CartService, private movieService: HttpMoviesService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
    this.movieService.sortMovies('');
  }

  sort() {
    if(this.sortBy=='title'){
      if(this.sortType=='desc'){
        this.movieService.sortMovies('titleDescending');
      }
      if(this.sortType=='asc'){
        this.movieService.sortMovies('titleAscending');
      }
    }
    if(this.sortBy=='rate'){
      if(this.sortType=='desc'){
        this.movieService.sortMovies('rateDescending');
      }
      if(this.sortType=='asc'){
        this.movieService.sortMovies('rateAscending');
      }
    }
  }

  selectOption(event) {
    this.sortBy = event;
    this.sort();
  }

  inputOption(value) {
    this.sortType = value;
    this.sort();
  }

  addMovieToCart(movie) {
    this.cartService.addMovie(movie);
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(value => {
      this.movies = value;
    });
  }

  private subcribeVariable() {
    this.authService.setUserName();
    this.authService.getLogged().subscribe(value => {
      this.logged = value;
    });
  }

}