import { UserService } from './../service/user.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  loggedAdmin;
  users;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(value=>{
      this.users = value;
    });
  }

  private subcribeVariable(){
    this.authService.setUserName();
     this.authService.getLoggedAdmin().subscribe(value=>{
       this.loggedAdmin = value;
     });
  }



}
