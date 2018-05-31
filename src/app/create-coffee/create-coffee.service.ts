import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { CoffeeModel } from '../model/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CreateCoffeeService {

  constructor(private http:HttpClient) { }
  public save(coffee:CoffeeModel): void{

    console.log("entra servicio");
    this.http.post("http://localhost:9001/add", coffee);
  }
}
