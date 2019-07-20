import { Component, OnInit } from '@angular/core';
import {Car, Cars} from './models/car.model';
import { AppState } from './store/state/app.state';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public carState: Observable<Cars>;

  constructor( private store: Store<AppState>) {}

  ngOnInit(): void {
    this.carState = this.store.select('carPage');
  }

  onAdd(car: Car): void {
    // this.cars.push(car);
  }

  onDelete(id: number): void {
    // this.cars = this.cars.filter((el: Car) => el.id !== id);
  }
}
