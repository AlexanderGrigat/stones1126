import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  productParent = input.required<Product>();
  priceChange = output<number>();

   increasePrice(): void {
    this.productParent().price += 5; 
    this.priceChange.emit(this.productParent().price);
  }
}
