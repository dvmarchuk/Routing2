import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';
import {FullCar} from '../models/FullCar';
let vals;

@Injectable({
  providedIn: 'root'
})


export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('https://next.json-generator.com/api/json/get/4kNE1mkbc');
  }

  async getCar(id): Promise<FullCar> {
    await this.getCars().subscribe(cars => {
      vals = cars.find(value => value.id === id);
      console.log(vals);
    });
    return vals;
  }
}
