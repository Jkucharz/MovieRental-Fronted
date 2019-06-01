import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient){ }
  
  getAllTypes(): Observable<Array<Type>> {
    //let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<Type>>('http://localhost:8080/movie/type',{});
  }
}

export interface Type{
  name?: string;
}
