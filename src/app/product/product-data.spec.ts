import { TestBed } from '@angular/core/testing';
import { ProductData } from './product-data';
import { Product } from './product';
import { provideHttpClient } from '@angular/common/http';

describe('ProductData', () => {
  let service: ProductData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient()],
    });
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
