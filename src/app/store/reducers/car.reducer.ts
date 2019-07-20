import { Car } from '../../models/car.model';
import {AddCar, CAR_ACTION} from '../actions/car.actions';

const initialState = {
  cars: [
    new Car('Ford', 'Focus', '12.05.2017', false, 1),
    new Car('Fiat', 'Fiesta', '13.05.2017', false, 2)
  ]
};

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
}
