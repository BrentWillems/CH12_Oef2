import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { NewCarComponent } from './components/new-car/new-car.component';

const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'edit/:id', component: EditCarComponent},
  {path: 'new', component: NewCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
