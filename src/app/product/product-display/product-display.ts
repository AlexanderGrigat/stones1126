import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  product: Product = new Product(0, 'Grabstein Granit',20, 25);

   increasePrice(): void {
    this.product.price += 5; 
    alert(this.product.price);
  }
}
