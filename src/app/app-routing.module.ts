import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {FullCarComponent} from './full-car/full-car.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent,
    children : [
      {path: ':id', component: FullCarComponent}
    ]
  },
  {path: 'all-cars', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'posts', loadChildren : () => import('./post-module/post.module').then(m => m.PostModule)}
];

// const routes2: Routes = [
//   {path: 'cars', components: CarsComponent,
//     children : [
//       {path: ':id', components: FullCarComponent}
//     ]
//   },
//   {path: 'all-cars', redirectTo: 'cars', pathMatch: 'full'}
// ];
//this is just to show that we can make a second one for more routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
