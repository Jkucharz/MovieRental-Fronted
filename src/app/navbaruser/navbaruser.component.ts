import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  cartsElementsNumber = 0;
  loggedAs;
  loggedAdmin;

  constructor(private authService: AuthService, private cartService: CartService) {
    this.subcribeVariable();
  }

  ngOnInit() {
    this.subcribeVariable();
  }

  logout() {
    this.authService.logout();
  }

  private subcribeVariable() {
    this.authService.setUserName();
    this.authService.getLoggedAs().subscribe(value => {
      this.loggedAs = value;
    });
    this.authService.getLoggedAdmin().subscribe(value => {
      this.loggedAdmin = value;
    });

    this.cartService.countElementsInCart();
    this.cartService.getCartElementNumber().subscribe(value => {
      this.cartsElementsNumber = value;
    });
  }

}
