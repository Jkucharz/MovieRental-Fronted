import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  logged = new Subject<boolean>();
  loggedError = new Subject<string>();
  loggedAs = new  Subject<string>();
  loggedAdmin = new Subject<boolean>();

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
     this.loggedError.next('Niepoprawne dane logowania');
    });
  }

   setUserName(){
      let headers = new HttpHeaders().set( 'Authorization', 'bearer  '+localStorage.getItem('token'));
      this.http.get('http://localhost:8080/getUsername', { headers: headers, responseType: 'text'},).subscribe(get => {
      this.logged.next(true);
      this.loggedAs.next(get);
      this.getLoggedAs().subscribe(value=>{
        this.checkIfAdmin(value);
      });
    },
      error=>{
        this.logged.next(false);
        this.loggedAs.next('');
        localStorage.clear();
      }
    );
  }

  checkIfAdmin(name:string){
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json');
    this.http.post<boolean>('http://localhost:8080/checkUserAdmin',{'name':name},{ headers: headers}).subscribe(get => {
    this.loggedAdmin.next(get);
     });
  }

  register() {

  }

  logout() {
    let headers = new HttpHeaders().set( 'Authorization', 'Basic '+btoa("my-trusted-client:secret"));
    this.http.get('http://localhost:8080/logouts?access_token='+localStorage.getItem('token'),{headers: headers},).subscribe(get => {
     });
    localStorage.clear();
    this.setUserName();
  }

  getLogged(): Observable<boolean>{
    return this.logged.asObservable();
  }

  getLoggedError(): Observable<string>{
    return this.loggedError.asObservable();
  }

  getLoggedAs(): Observable<string>{
    return this.loggedAs.asObservable();
  }

  getLoggedAdmin(): Observable<boolean>{
    return this.loggedAdmin.asObservable();
  }
}

export interface Token{
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}