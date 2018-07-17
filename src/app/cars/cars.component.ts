import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarsService } from '../cars.service';
import { _ } from 'underscore';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  sortByType = 'name';
  cars: Car[];
  callError: string;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carsService.getCars().subscribe(cars => this.cars = _.first(cars, 10), error => this.callError = error.message);
  }
}
