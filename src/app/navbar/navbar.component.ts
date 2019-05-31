import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged;
  loggedAs;

  constructor(private authService :AuthService) {}
   
   ngOnInit(){
    this.subcribeVariable();
   }

   private subcribeVariable(){
    this.authService.getLogged().subscribe(value=>{
      this.logged = value;
    });

    this.authService.getLoggedAs().subscribe(value=>{
      this.loggedAs = value;
    });
   }
}
