import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  product = input.required<Product>();
  priceChange = output<number>();
  showPrice = true; 

  styleConfig = {
    borderStyle: 'dashed',
  }

   increasePrice(): void {
    this.product().price += 5; 
    this.priceChange.emit(this.product().price);
  }

  togglePrice(){
    this.showPrice = !this.showPrice;
  }

  changePrice(newPrice: number): void {
    this.product().price = newPrice;
    this.priceChange.emit(this.product().price);
  }
}
