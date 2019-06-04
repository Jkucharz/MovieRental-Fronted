import { AuthService } from './../service/auth.service';
import { RentalService } from './../service/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  logged;
  rentals;
  error;

  constructor(private authService :AuthService, private rentalService :RentalService) { }

  ngOnInit() {
    this.subcribeVariable();
    this.getUserRentals();
  }

  getUserRentals(){
    this.rentalService.getUserRentals().subscribe(value=>{
      this.rentals = value;
    },
    error => {
      this.error = error.error.message;
    });
  }

  private subcribeVariable(){
    this.authService.getLogged().subscribe(value=>{
      this.logged = value;
    });
  }

}
