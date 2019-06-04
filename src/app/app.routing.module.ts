import { AdminRentalsComponent } from './admin-rentals/admin-rentals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminTypesComponent } from './admin-types/admin-types.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { RentalsComponent } from './rentals/rentals.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
    {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'rentals',
    component: RentalsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent
  },
  {
    path: 'admin/types',
    component: AdminTypesComponent
  },
  {
    path: 'admin/movies',
    component: AdminMoviesComponent
  },
  {
    path: 'admin/rentals',
    component: AdminRentalsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
