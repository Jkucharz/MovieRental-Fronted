import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllTypes(): Observable<Array<Type>> {
    return this.http.get<Array<Type>>('http://localhost:8080/movie/type', {});
  }

  addMovieType(name: string) {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    const addType: Type = ({
      name: name,
    });
    this.http.post<Type>('http://localhost:8080/admin/movie/type/add', addType, { headers: headers }).subscribe(post => {
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
        this.router.navigate(["/admin/types"]));
    });
  }

  deleteMovieType(name: string) {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    const deleteType: Type = ({
      name: name,
    });
    this.http.post<Type>('http://localhost:8080/admin/movie/type/delete', deleteType, { headers: headers }).subscribe(post => {
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/admin/types"]));
    });
  }
}

export interface Type {
  name?: string;
  selected?:boolean;
}
