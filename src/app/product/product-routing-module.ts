import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductForm } from './product-form/product-form';
import { ProductList } from './product-list/product-list';

const routes: Routes = [{
  path: 'products',
  children: [
    {path: '', component: ProductList},
    {path: 'new', component: ProductForm},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
