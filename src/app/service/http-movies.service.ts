import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

export interface Movie{
  id?: number;
  title?: string;
  type?: Array<Types>;
  director?: string;
  productionYear?: string;
  description?: string;
  borrowsQuantity?: number;
  rate?: number;
}

export interface Types{
  name?:string;
}
