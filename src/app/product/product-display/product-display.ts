import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormField } from '@angular/forms/signals';
import { NettoPipe } from '../../utils/netto-pipe';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NettoPipe,
    CurrencyPipe,
    MatButtonModule,
    MatInput,
  ]
})
export class ProductDisplay {
  product = input.required<Product>();
  priceChange = output<number>();
  showPrice = true;

  styleConfig = {
    borderStyle: 'dashed',
  };

  increasePrice(): void {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }

  togglePrice() {
    this.showPrice = !this.showPrice;
  }

  changePrice(newPrice: number): void {
    this.product().price = newPrice;
    this.priceChange.emit(this.product().price);
  }
}
