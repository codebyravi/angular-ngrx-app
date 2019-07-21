import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Car } from '../models/car.model';
import { AddCar, BuyCar, DeleteCar, LoadCars } from '../store/actions/car.actions';

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

  deleteData(car: Car): void {
    this.http.delete(`${CarService.BASE_URL}cars/${car.id}`).subscribe(() => this.store.dispatch(new DeleteCar(car)));
  }

  updateData(car: Car): void {
    car.isSold = true;
    this.http.put(`${CarService.BASE_URL}cars/${car.id}`, car).subscribe(() => this.store.dispatch(new BuyCar()));
  }
}
