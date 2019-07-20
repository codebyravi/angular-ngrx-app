import { Component } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = [
    new Car('Ford', 'Focus', '12.05.2017', false, 1),
    new Car('Fiat', 'Fiesta', '13.05.2017', false, 2)
  ];

  onAdd(car: Car): void {
    this.cars.push(car);
  }

  onDelete(id: number): void {
    this.cars = this.cars.filter((el: Car) => el.id !== id);
  }
}
