import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminTypesComponent } from './admin-types/admin-types.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
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
