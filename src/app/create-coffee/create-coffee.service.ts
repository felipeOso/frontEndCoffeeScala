import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { CoffeeModel } from '../model/coffee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CreateCoffeeService {

  constructor(private http:HttpClient) { }
  public save(coffee:CoffeeModel): void{

    console.log("entra servicio");
    this.http.post("http://localhost:9001/add", JSON.stringify(coffee),httpOptions)
    console.log("ya se ejecuto el post")
  }
}
