import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';

@Component({
  selector: 'stn-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = inject(ProductData).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
