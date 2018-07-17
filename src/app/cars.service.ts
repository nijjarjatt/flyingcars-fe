import { Injectable } from '@angular/core';
import { Car } from './car';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  private carsUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }
}
