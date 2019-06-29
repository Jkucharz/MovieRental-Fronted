import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  movies = new Subject<Movie>();

  constructor(private http: HttpClient, private router: Router) { }

  getAllMovies(): Observable<Movie> {
    return this.movies.asObservable();
  }

  sortMovies(sortType: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const sort: Sort = ({
      sortType: sortType
    });
    this.http.post<Movie>('http://localhost:8080/getAllMovies', sort, { headers: headers }).subscribe(post => {
      this.movies.next(post);
    });
  }

  removeMovie(movie: Movie) {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token')).set('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/admin/movie/remove', JSON.stringify(movie), { headers: headers }).subscribe(post => {
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
        this.router.navigate(["/admin/movies"]));
    });
  }
}

export interface Movie {
  id?: number;
  title?: string;
  type?: Array<Types>;
  director?: string;
  productionYear?: string;
  description?: string;
  borrowsQuantity?: number;
  rate?: number;
}

export interface Types {
  name?: string;
}

export interface Sort {
  sortType: string;
}