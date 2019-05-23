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
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
