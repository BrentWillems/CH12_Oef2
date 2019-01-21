import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  myForm: FormGroup;
  constructor(private carService: CarService, private formBuilder: FormBuilder, private location: Location) {  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      wiki: ['/']
    });
  }

  onSubmit() {
    const car: Car = <Car>this.myForm.value;
    this.carService.addCar(car).subscribe(_ => this.location.back());
  }

}
