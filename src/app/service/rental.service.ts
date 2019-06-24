import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './http-movies.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getUserRentals(): Observable<Array<Rental>> {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<Rental>>('http://localhost:8080/rental',{headers: headers});
  }

  getAllRentals(): Observable<Array<Rental>> {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<Rental>>('http://localhost:8080/admin/rental',{headers: headers});
  }
}

export interface Rental{
user?:Array<User>;
movies?:Array<Movie>;
rentalTime?:string;
returnTime?:string;
rentalShow?:boolean;
}

export interface User{
  userName?:string;
  email?:string;
}