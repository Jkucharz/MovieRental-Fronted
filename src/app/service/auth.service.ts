import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  logged = new  Subject<boolean>();
  loggedError:boolean = false;
  loggedAs = new  Subject<string>();

  constructor(private http: HttpClient) { 
    this.setUserName();
  }

  login(user: string, password: string) {
    let headers = new HttpHeaders().set( 'Authorization', 'Basic '+btoa("my-trusted-client:secret"));

    this.http.post<Token>('http://localhost:8080/oauth/token?grant_type=password&username='+user+'&password='+password,{}, { headers: headers }).subscribe(post => {
      localStorage.clear();
      localStorage.setItem('token',post.access_token);
      this.setUserName();
    },
    error=>{
     console.log("blad");
    });
  }

   setUserName(){
      let headers = new HttpHeaders().set( 'Authorization', 'bearer  '+localStorage.getItem('token'));
      this.http.get('http://localhost:8080/getUsername', { headers: headers, responseType: 'text'},).subscribe(get => {
        this.logged.next(true);
      this.loggedAs.next(get);
    },
      error=>{
        this.logged.next(false);
        this.loggedAs.next('');
        localStorage.clear();
      }
    );
  }

  register() {

  }

  logout() {
    localStorage.clear();
    this.setUserName;
  }

  getLogged(): Observable<boolean>{
    return this.logged.asObservable();
  }

  getLoggedAs(): Observable<string>{
    return this.loggedAs.asObservable();
  }
}

export interface Token{
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}


