import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './car';
import { _ } from 'underscore';

@Pipe({
  name: 'orderByList'
})
export class OrderByListPipe implements PipeTransform {
  transform(cars: Car[], args?: string): Car[] {
    return _.sortBy(cars, args);
  }
}
