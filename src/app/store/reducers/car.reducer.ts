import { Car } from '../../models/car.model';
import { CAR_ACTION, CarsAction} from '../actions/car.actions';

const initialState = {
  cars: [
    new Car('Ford', 'Focus', '12.05.2017', false, 1),
    new Car('Fiat', 'Fiesta', '13.05.2017', false, 2)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter((el: Car) => el.id !== action.payload)]
      };
    case CAR_ACTION.BUY_CAR:
      return {
        ...state,
        cars: [...state.cars.map((el: Car) => {{
          return {
            ...el,
            isSold: el.id === action.payload
          };
        }})]
      };
    default:
      return state;
  }
}
