import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getData() {
    this.http.get(`${CarService.BASE_URL}cars`).subscribe(data => console.log(data));
  }
}
