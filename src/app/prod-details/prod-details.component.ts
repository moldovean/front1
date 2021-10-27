import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {


  // @ts-ignore
  id: Number = 0 | undefined;
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.id = productIdFromRoute;
    this.product = products[productIdFromRoute - 1];
  }

  getProdId(): Number {
    return this.id;
  }

  buyPhone(): void {
    window.alert("Thanks for buying "+this.product?.name)
  }
}
