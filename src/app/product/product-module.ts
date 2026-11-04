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
import { ProductList } from './product-list/product-list';
import { MatCard } from "@angular/material/card";

@NgModule({
  declarations: [
    ProductDisplay,
    ProductForm,
    ProductList,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormField,
    MatCard
  ],
  exports: [
    ProductDisplay,
    ProductForm,
  ],
})
export class ProductModule {}
