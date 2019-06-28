import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './http-movies.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient, private router: Router) { }

  getUserRentals(): Observable<Array<Rental>> {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<Rental>>('http://localhost:8080/rental',{headers: headers});
  }

  removeRental(id:number){
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token')).set('Content-Type', 'application/json');
    const rentalRemove: RentalRemove = ({
      id:id
    });
    this.http.post('http://localhost:8080/admin/rental/remove', rentalRemove, { headers: headers }).subscribe(post => {
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/admin/rentals"]));
    });
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

export interface RentalRemove {
  id:number;
}