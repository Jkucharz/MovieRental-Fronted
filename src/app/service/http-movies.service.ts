import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('http://localhost:8080/getAllMovies');
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
