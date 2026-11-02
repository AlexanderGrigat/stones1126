import { Component, signal } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stones');
  
  product: Product = new Product(0, 'Grabstein Granit',20, 25);

  onPriceChange(newPrice: number): void {
    this.product.price = newPrice;
    alert('Der Preis hat sich geändert: ' + newPrice);
  }
}
