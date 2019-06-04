import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  changePermission(userName: string,role: string){
    let headers = new HttpHeaders().set('Authorization', 'bearer  ' + localStorage.getItem('token'));
    const changeRole: ChangeRole = ({
      userName: userName,
      roles: [
        {
          name: role
        }
      ]
    });
    this.http.post<ChangeRole>('http://localhost:8080/admin/user/setRole', changeRole, { headers: headers }).subscribe(post => {
      window.location.reload();  
    });
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

export interface ChangeRole{
  userName:string;
  roles:Array<UserRoles>;
}

export interface UserRoles{
  name:string;
}
