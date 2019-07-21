import { Car } from '../../models/car.model';
import { CAR_ACTION, CarsAction } from '../actions/car.actions';

const initialState = {
  cars: []
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
        cars: [...state.cars.filter((el: Car) => el.id !== action.payload.id)]
      };
    case CAR_ACTION.BUY_CAR:
      return {
        ...state,
        // cars: [...state.cars.map((el: Car) => {{
        //   return {
        //     ...el,
        //     isSold: el.id === action.payload.id
        //   };
        // }})]
      };
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state;
  }
}
