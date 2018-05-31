import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
const routes: Routes =[
  {path: '', redirectTo:'/coffeeComponent', pathMatch:'full'},
  {path:'appComponent', component: AppComponent }, 
  {path:'coffeeComponent', component: CoffeeComponent },
  {path:'createCoffeeComponent', component: CreateCoffeeComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule { }

