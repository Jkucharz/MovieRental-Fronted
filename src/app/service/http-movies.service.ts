import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/movies.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('http://localhost:8080/getAllMovies');
  }
}
