import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  value=0;
  loggedAs;

  constructor(private authService :AuthService) {}
   
  ngOnInit(){
    this.subcribeVariable();
   }

   private subcribeVariable(){
     this.authService.setUserName();
    this.authService.getLoggedAs().subscribe(value=>{
      this.loggedAs = value;
    });
   }

}
