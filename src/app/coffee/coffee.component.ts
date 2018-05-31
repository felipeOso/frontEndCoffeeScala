import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { CoffeeModel } from '../model/coffee.model';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  providers:[CoffeeService]
})
export class CoffeeComponent implements OnInit {
  private coffees:Array<CoffeeModel>;
  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.loadCoffee();
  }

  private loadCoffee():void{
    this.coffeeService.getCoffee().subscribe(res =>{
      this.coffees = res;
      console.log("los datos que llega son"+res)
      });
  }

}
