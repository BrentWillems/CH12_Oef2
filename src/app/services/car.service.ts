import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.apiUrl + 'cars');
  }

  removeCarById(id) {
    // console.log(id);
    return this.http.delete(environment.apiUrl + 'cars/' + id);
  }
}
