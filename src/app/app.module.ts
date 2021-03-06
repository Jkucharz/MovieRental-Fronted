import { CartService } from './service/cart.service';
import { AppRoutingModule } from './app.routing.module';
import { HttpMoviesService } from './service/http-movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './service/auth.service';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminTypesComponent } from './admin-types/admin-types.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { RentalsComponent } from './rentals/rentals.component';
import { AdminRentalsComponent } from './admin-rentals/admin-rentals.component';
import { AddfilmComponent } from './addfilm/addfilm.component';
import { EditfilmComponent } from './editfilm/editfilm.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    AdminComponent,
    NavbaradminComponent,
    ExampleComponent,
    UserComponent,
    NavbaruserComponent,
    LoginComponent,
    SignupComponent,
    AdminUsersComponent,
    AdminTypesComponent,
    AdminMoviesComponent,
    RentalsComponent,
    AdminRentalsComponent,
    AddfilmComponent,
    EditfilmComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpMoviesService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
