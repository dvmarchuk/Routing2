import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../services/car.service';
import {FullCar} from '../models/FullCar';

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent implements OnInit {


  fullCar: FullCar;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(() => {
      this.fullCar = history.state;
    });
  }

  // constructor(
  //   private carService: CarService,
  //   private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(value => {
  //     this.carService.getCar(value.id).then(car => {
  //       this.fullCar = car;
  //     });
  //   });
  // }

  ngOnInit(): void {
  }

}
