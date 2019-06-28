import { RentalService } from './../service/rental.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-rentals',
  templateUrl: './admin-rentals.component.html',
  styleUrls: ['./admin-rentals.component.css']
})
export class AdminRentalsComponent implements OnInit {
  loggedAdmin;
  rentals;
  error;
 
  

  constructor(private authService: AuthService, private rentalService :RentalService,) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getAllRentals();

  }

  getAllRentals(){
    this.rentalService.getAllRentals().subscribe(value=>{
      this.rentals = value;
      this.setRentalShows();
    },
    error => {
      this.error = error.error.message;
    });
  }

   showMovies(rental){
    if(rental.rentalShow==false){
      rental.rentalShow = true;
    }else{
      rental.rentalShow = false;
    }
  }

  removeRental(id: number){
    this.rentalService.removeRental(id);
  }

  setRentalShows(){
    for (var item of this.rentals) {
     item.rentalShow = false;
  }
  }

  private subcribeVariable(){
    this.authService.setUserName();
     this.authService.getLoggedAdmin().subscribe(value=>{
       this.loggedAdmin = value;
     });
  }
}
