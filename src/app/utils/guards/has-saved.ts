import { CanDeactivateFn } from '@angular/router';
import { ProductForm } from '../../product/product-form/product-form';

export const hasSavedGuard: CanDeactivateFn<ProductForm> = 
(component) => {
  return component.hasSaved();
};