import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'nx-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    this.car.isSold = true;
  }

  onDelete(): void {
    this.deleteCar.emit(this.car.id);
  }

}
