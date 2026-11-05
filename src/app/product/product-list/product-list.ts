import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductData } from '../product-data';
import { ProductDisplay } from "../product-display/product-display";
import { MatCard } from "@angular/material/card";
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stn-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
  imports: [
    ProductDisplay,
    MatCard,
    AsyncPipe,
    RouterLink,
    MatButtonModule,
]
})
export class ProductList {
  products: Observable<Product[]> = inject(ProductData).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
