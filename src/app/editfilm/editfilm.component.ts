import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/type.service';
import { HttpMoviesService } from '../service/http-movies.service';

@Component({
  selector: 'app-editfilm',
  templateUrl: './editfilm.component.html',
  styleUrls: ['./editfilm.component.css']
})
export class EditfilmComponent implements OnInit {
  types;
  typeName;
  movies;
  

  constructor(private typeService: TypeService, private movieService :HttpMoviesService,) { }

  ngOnInit() {
    this.getAllTypes();
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(value=>{
      this.movies = value;
    });
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(value=>{
      this.types = value;
    });
  }

}
