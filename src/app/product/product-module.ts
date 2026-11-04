import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductDisplay } from './product-display/product-display';
import { UtilsModule } from '../utils/utils-module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductForm } from './product-form/product-form';
import { FormField } from '@angular/forms/signals';

@NgModule({
  declarations: [ProductDisplay, ProductForm],
  imports: [
    CommonModule,
    UtilsModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormField,
  ],
  exports: [
    ProductDisplay,
    ProductForm,
  ],
})
export class ProductModule {}
