import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Car } from '../models/car.model';

@Component({
  selector: 'nx-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  id = 2;
  @Output() addCar = new EventEmitter<Car>();

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      model: ['']
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
     this.id += 1;
     const newCar = new Car(
        this.form.get('name').value,
        this.form.get('model').value,
        moment().format('DD.MM.YY'),
        false,
        this.id
     );
     this.addCar.emit(newCar);
     this.form.reset();
    }
  }

}
