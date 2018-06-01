import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CoffeeModel } from './../model/coffee.model';
import { CreateCoffeeService } from './create-coffee.service';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css'],
  providers: [CreateCoffeeService]
})
export class CreateCoffeeComponent implements OnInit {

  private coffee: CoffeeModel;
  
  private isValid:boolean= true;
  private message:String ="";

  constructor(private createCoffeeService: CreateCoffeeService, private router:Router) { 
    this.coffee = new CoffeeModel();
  }

  ngOnInit() {
  }

  public save():void{
    this.createCoffeeService.save(this.coffee)
    this.router.navigate(['/coffeeComponent'])
  }

}
