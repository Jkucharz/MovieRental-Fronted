import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Array<User>> {
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    return this.http.get<Array<User>>('http://localhost:8080/admin/users',{ headers: headers });
  }
}

export interface User{
  id?: number;
  userName?: string;
  email?: string;
  roles?: Array<Role>;
}

export interface Role{
  id?:number;
  name:string;
}
