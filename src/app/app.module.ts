import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'


import { AppRountingModule } from './app-rouuting.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CreateCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
