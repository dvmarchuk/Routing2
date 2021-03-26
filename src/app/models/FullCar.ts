import {Car} from './Car';

export interface FullCar extends Car{
  Year: number;
  Trim: string;
  Views: string;

}
