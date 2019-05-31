import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerError: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subcribeVariable();
  }

  register(formData: NgForm){
    this.authService.register(formData.value.uname, formData.value.email, formData.value.psw, formData.value.rpsw);
  }

  private subcribeVariable(){
     this.authService.getRegisterError().subscribe(value=>{
       this.registerError = value;
     });
  }

}
