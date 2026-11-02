import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  @Input({required: true}) productParent!: Product;
  @Output() priceChange = new EventEmitter<number>();

   increasePrice(): void {
    this.productParent.price += 5; 
    this.priceChange.emit(this.productParent.price);
  }
}
