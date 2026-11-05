import { Routes } from '@angular/router';
import { ProductForm } from './product-form/product-form';
import { ProductList } from './product-list/product-list';
import { hasSavedGuard } from '../utils/guards/has-saved';

export const productRoutes: Routes = [{
  path: 'products',
  children: [
    {path: '', component: ProductList},
    {path: 'new', component: ProductForm, canDeactivate: [hasSavedGuard]},
    {path: 'new/:id', component: ProductForm, canDeactivate: [hasSavedGuard]},
  ]
}];