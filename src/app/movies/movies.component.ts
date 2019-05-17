import { Component, OnInit } from '@angular/core';

import { HttpMoviesService } from './../service/http-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies;

  constructor(private httpMoviesService: HttpMoviesService) { }

  ngOnInit() {
    this.showAllMovies();
  }

  showAllMovies(){
    this.httpMoviesService.getAllMovies().subscribe(movies =>{
      this.movies = movies;
    });
  }

}

export interface Movie{
  id?: number;
  name?: string;
  type?: string;
  director?: string;
  productionYear?: string;
  description?: string;
  borrowsQuantity?: number;
  rate?: number;
}
