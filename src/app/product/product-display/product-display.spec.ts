import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplay } from './product-display';
import { Product } from '../product';
import { By } from '@angular/platform-browser';

describe('ProductDisplay', () => {
  let component: ProductDisplay;
  let fixture: ComponentFixture<ProductDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDisplay);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', new Product(12, 'SuperStein', 1, 1));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly show name in DOM', () => {
    const liName = fixture.debugElement.query(By.css('#name'));
    expect(liName.nativeElement.textContent).toContain(component.product().name);
  });

  it('raisePrice should raise price by 5', () => {
    const oldPrice = component.product().price;
    component.increasePrice();
    expect(component.product().price).toBe(oldPrice + 5);
  });
});
