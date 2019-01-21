import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCarComponent } from './components/new-car/new-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarListComponent,
    EditCarComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
