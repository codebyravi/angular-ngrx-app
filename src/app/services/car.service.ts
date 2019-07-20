import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Car } from '../models/car.model';
import {AddCar, LoadCars} from '../store/actions/car.actions';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getData(): void {
    this.http.get(`${CarService.BASE_URL}cars`).subscribe((data: Car[]) => this.store.dispatch(new LoadCars(data)));
  }

  addData(car: Car): void {
    this.http.post(`${CarService.BASE_URL}cars`, car).subscribe((data: Car) => this.store.dispatch(new AddCar(data)));
  }
}
