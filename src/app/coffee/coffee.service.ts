import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CoffeeModel } from '../model/coffee.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees:Array<CoffeeModel>;
  constructor(private http:HttpClient ) { }

  public getCoffee():Observable<CoffeeModel[]>{
    return this.http.get<CoffeeModel[]>("http://localhost:9001")
    
    
   /* .subscribe(res =>{
    this.coffees = res as CoffeeModel[];
    console.log("los datos que llega son"+this.coffees)
    });
    return this.coffees;*/
  }
}
