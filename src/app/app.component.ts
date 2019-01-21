import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CH12Oef2';
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe(data => {this.cars = data; console.log(data); });
  }
}
