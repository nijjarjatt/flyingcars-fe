import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Component } from '@angular/core';
import { CarsComponent } from './cars.component';
import { CarComponent } from '../car/car.component';
import { FormsModule } from '@angular/forms';

@Pipe({name: 'orderByList'})
class OrderByList implements PipeTransform {
  transform() {
    return null;
  }
}

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CarsComponent, OrderByList, CarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
