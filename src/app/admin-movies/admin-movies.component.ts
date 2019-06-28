import { HttpMoviesService } from './../service/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {
  loggedAdmin;
  movies;

  constructor(private authService: AuthService, private movieService :HttpMoviesService, private router: Router) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(value=>{
      this.movies = value;
    });
  }

  removeMovie(movie){
    this.movieService.removeMovie(movie);
    this.getAllMovies();
  }

  private subcribeVariable(){
    this.authService.setUserName();
     this.authService.getLoggedAdmin().subscribe(value=>{
       this.loggedAdmin = value;
     });
  }

}
