import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpMoviesService } from '../service/http-movies.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  movies;
  

  constructor(private authService: AuthService, private movieService :HttpMoviesService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(value=>{
      this.movies = value;
    });
  }

  private subcribeVariable(){
    this.authService.setUserName();
    
  }

}
