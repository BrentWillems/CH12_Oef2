import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  id: number;
  private car: Car;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.route.params.subscribe(data => this.id = data.id);
    this.carService.getById(this.id).subscribe(data => this.car = data);
  }

  submit() {
    this.carService.editCar(this.car).subscribe(() => this.router.navigate(['']));
  }

}
