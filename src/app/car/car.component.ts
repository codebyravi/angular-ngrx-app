import { Component, Input } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'nx-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent {
  @Input() car: Car;

  constructor(private carService: CarService) { }

  onBuy(): void {
    this.carService.updateData(this.car);
  }

  onDelete(): void {
    this.carService.deleteData(this.car);
  }

}
