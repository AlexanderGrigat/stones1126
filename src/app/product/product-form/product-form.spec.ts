import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForm } from './product-form';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormField } from '@angular/forms/signals';

describe('ProductForm', () => {
  let component: ProductForm;
  let fixture: ComponentFixture<ProductForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductForm],
      imports: [FormField, MatFormFieldModule, MatInputModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
