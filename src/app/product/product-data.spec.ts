import { TestBed } from '@angular/core/testing';
import { ProductData } from './product-data';
import { Product } from './product';

describe('ProductData', () => {
  let service: ProductData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getList should productList', () => {
    expect(service.getList()[0].id).toEqual(0);
  });

  it('newProduct should save new product', () => {
    const newProduct = new Product(1, 'test', 20, 40);
    service.addProduct(newProduct);
    expect(service.getList()[0]).toEqual(newProduct);
  });
});
