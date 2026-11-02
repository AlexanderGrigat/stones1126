import { Component, input, output } from '@angular/core';
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
  showPrice = false; 

  styleConfig = {
    borderStyle: 'dashed',
  }

   increasePrice(): void {
    this.productParent().price += 5; 
    this.priceChange.emit(this.productParent().price);
  }

  togglePrice(){
    this.showPrice = !this.showPrice;
  }

  changePrice(newPrice: number): void {
    this.productParent().price = newPrice;
    this.priceChange.emit(this.productParent().price);
  }
}
