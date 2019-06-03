import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './http-movies.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getAllRentals(): Observable<Array<Rental>> {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<Rental>>('http://localhost:8080/rental',{headers: headers});
  }
}

export interface Rental{
movies?:Array<Movie>;
rentalTime?:string;
returnTime?:string;
}