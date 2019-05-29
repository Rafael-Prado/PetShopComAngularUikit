import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html'
})
export class ProductsCardComponent implements OnInit {

 @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
