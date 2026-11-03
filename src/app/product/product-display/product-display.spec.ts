import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplay } from './product-display';
import { Product } from '../product';
import { By } from '@angular/platform-browser';
import { UtilsModule } from '../../utils/utils-module';

describe('ProductDisplay', () => {
  let component: ProductDisplay;
  let fixture: ComponentFixture<ProductDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDisplay],
      imports: [UtilsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDisplay);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('productParent', new Product(12, 'SuperStein', 1, 1));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly show name in DOM', () => {
    const liName = fixture.debugElement.query(By.css('#name'));
    expect(liName.nativeElement.textContent).toContain(component.productParent().name);
  });

  it('raisePrice should raise price by 5', () => {
    const oldPrice = component.productParent().price;
    component.increasePrice();
    expect(component.productParent().price).toBe(oldPrice + 5);
  });
});
