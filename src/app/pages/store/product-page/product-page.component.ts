import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { Observable } from 'rxjs';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
