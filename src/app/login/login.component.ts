import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedError;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subcribeVariable();
  }

  login(formData: NgForm){
    this.authService.login(formData.value.uname, formData.value.psw);
  }

  private subcribeVariable(){
    this.authService.getLoggedError().subscribe(value=>{
      this.loggedError = value;
    });
  }
}