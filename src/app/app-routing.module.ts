import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'edit/:id', component: EditCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
