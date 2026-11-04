import { Component, output, signal } from '@angular/core';
import { Product } from '../product';
import { form, required } from '@angular/forms/signals';
import { alphaNum, positiv } from '../../utils/validators/custom-validators';

interface ProductFormModel {
  name: string;
  price: number;
  weight: number;
}

const emptyProduct = (): ProductFormModel => ({ name: '', price: 0, weight: 0 });

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  private readonly model = signal<ProductFormModel>(emptyProduct());
  readonly saveProduct = output<Product>();

  protected readonly productForm = form(this.model, (path) => {
    required(path.name);
    alphaNum(path.name);
    required(path.price);
    positiv(path.price);
    required(path.weight);
    positiv(path.weight);
  });

  save() {
    if (this.productForm().invalid()) {
      return;
    }
    const { name, price, weight } = this.model();
    this.saveProduct.emit(new Product(-1, name, price, weight));
    this.productForm().reset(emptyProduct());
  }
}
