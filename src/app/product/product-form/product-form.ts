import { Component, inject, output, signal } from '@angular/core';
import { Product } from '../product';
import { form, required } from '@angular/forms/signals';
import { alphaNum, positiv } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '../product-data';

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
  private readonly route = inject(ActivatedRoute);
  private readonly model = signal<ProductFormModel>(emptyProduct());
  readonly saveProduct = output<Product>();
  private readonly productData = inject(ProductData)
  id = -1;

  protected readonly productForm = form(this.model, (path) => {
    required(path.name);
    alphaNum(path.name);
    required(path.price);
    positiv(path.price);
    required(path.weight);
    positiv(path.weight);
  });

  constructor(){
      this.route.paramMap.subscribe(paramMap => {
        const idParam = paramMap.get('id');
        if(idParam){
          this.id = +idParam;
        }
      })
  }

  save() {
    if (this.productForm().invalid()) {
      return;
    }
    const { name, price, weight } = this.model();
    this.productData.addProduct(new Product(
      this.id,
      name,
      price,
      weight
    ));
    this.productForm().reset(emptyProduct());
  }

  hasSaved(){
    const formValue = this.productForm().value;
    if(!formValue().name && !formValue().price && !formValue().weight){
      return true;
    } else{
      return confirm('Du hast ungespeicherte Daten, willst du die wirklich löschen?')
    }
  }
}
