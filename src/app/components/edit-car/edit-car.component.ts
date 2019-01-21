import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  id: number;
  private car: Car;

  constructor(private route: ActivatedRoute, private location: Location, private carService: CarService) { }

  ngOnInit() {
    this.route.params.subscribe(data => this.id = data.id);
    this.carService.getById(this.id).subscribe(data => this.car = data);
  }

  navigateBack() {
    this.location.back();
  }

  submit() {
    this.carService.editCar(this.car).subscribe(() => this.navigateBack());
  }

}
