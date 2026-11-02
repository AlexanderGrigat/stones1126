import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplay } from './product-display';

describe('ProductDisplay', () => {
  let component: ProductDisplay;
  let fixture: ComponentFixture<ProductDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raisePrice should raise price by 5', () => {
    const oldPrice = component.product.price;
    component.increasePrice();
    expect(component.product.price).toBe(oldPrice + 5);
  });
});
