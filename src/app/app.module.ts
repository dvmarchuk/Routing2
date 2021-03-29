import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { FullCarComponent } from './full-car/full-car.component';
import { CarComponent } from './car/car.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations:  [
    AppComponent,
    HomeComponent,
    CarsComponent,
    FullCarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
