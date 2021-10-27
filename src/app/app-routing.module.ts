import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Comp1Component} from "./comp1/comp1.component";
import {Comp2Component} from "./comp2/comp2.component";
import {HomeComponent} from "./home/home.component";
import {Comp3Component} from "./comp3/comp3.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent, pathMatch: 'full'},
  {path: 'comp1', component:Comp1Component, pathMatch: 'full'},
  {path: 'comp2', component:Comp2Component, pathMatch: 'full'},
  {path: 'comp3', component:Comp3Component, pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
