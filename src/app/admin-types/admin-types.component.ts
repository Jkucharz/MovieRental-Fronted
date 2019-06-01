import { TypeService } from './../service/type.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-types',
  templateUrl: './admin-types.component.html',
  styleUrls: ['./admin-types.component.css']
})
export class AdminTypesComponent implements OnInit {
  loggedAdmin;
  types;

  constructor(private authService: AuthService, private typeService: TypeService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllTypes();
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(value=>{
      this.types = value;
    });
  }

  private subcribeVariable(){
    this.authService.setUserName();
     this.authService.getLoggedAdmin().subscribe(value=>{
       this.loggedAdmin = value;
     });
  }

}
