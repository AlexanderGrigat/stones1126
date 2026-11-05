import { Component, computed, inject, output, signal } from '@angular/core';
import { Product } from '../product';
import { form, required, FormField } from '@angular/forms/signals';
import { alphaNum, positiv } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '../product-data';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface ProductFormModel {
  name: string;
  price: number;
  weight: number;
}

const emptyProduct = (): ProductFormModel => ({ name: '', price: 0, weight: 0 });

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    FormField,
    MatInput,
    MatButtonModule,
]
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
  protected readonly nameReversed = computed(() => this.productForm.name().value().split('').reverse().join(''));
  protected readonly nameLength = computed(() => this.productForm.name().value().length);
 
  constructor(){
      this.route.paramMap.subscribe(paramMap => {
        const idParam = paramMap.get('id');
        if(idParam){
          this.id = +idParam;
        }
      });
  }

  save() {
    if (this.productForm().invalid()) {
      return;
    }
    const { name, price, weight } = this.model();
    this.productData.addProduct({ name, price, weight }).subscribe();
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
