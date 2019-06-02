import { HttpMoviesService } from './../service/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {
  loggedAdmin;
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
     this.authService.getLoggedAdmin().subscribe(value=>{
       this.loggedAdmin = value;
     });
  }

}
