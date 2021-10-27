import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
