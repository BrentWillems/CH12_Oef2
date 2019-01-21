import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CH12Oef2';
  cars;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
  }
}
