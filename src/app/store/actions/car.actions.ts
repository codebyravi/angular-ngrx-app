import { Action } from '@ngrx/store';
import { Car } from '../../models/car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const BUY_CAR = 'BUY_CAR';
  export const LOAD_CARS = 'LOAD_CARS';
}

export class AddCar implements Action {
  public readonly type = CAR_ACTION.ADD_CAR;
  constructor(public payload: Car) {}
}

export class DeleteCar implements Action {
  public readonly type = CAR_ACTION.DELETE_CAR;
  constructor( public payload: Car) {}
}

export class BuyCar implements Action {
  readonly type = CAR_ACTION.BUY_CAR;
}

export class LoadCars implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;
  constructor( public payload: Car[]) {}
}

export type CarsAction = AddCar | DeleteCar | BuyCar | LoadCars;
