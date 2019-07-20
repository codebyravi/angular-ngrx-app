import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Car } from '../models/car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/state/app.state';
import {AddCar, LoadCars} from '../store/actions/car.actions';

@Component({
  selector: 'nx-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent implements OnInit {
  form: FormGroup;
  id = 2;

  constructor( private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      model: ['']
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
     this.id += 1;
     this.store.dispatch(new AddCar(new Car(
       this.form.get('name').value,
       this.form.get('model').value,
       moment().format('DD.MM.YY'),
       false,
       this.id
     )));
     this.form.reset();
    }
  }

  onLoad() {
    this.store.dispatch(new LoadCars());
  }

}
