import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { alphaNum, positiv } from './custom-validators';

describe('custom validators', () => {
  it('alphaNum accepts only alphanumeric values', () => {
    TestBed.runInInjectionContext(() => {
      const model = signal({ name: 'abc123' });
      const f = form(model, (p) => alphaNum(p.name));
      expect(f.name().valid()).toBe(true);
      f.name().value.set('ab c!');
      expect(f.name().errors()[0].kind).toBe('alphaNum');
    });
  });

  it('positiv accepts only values greater than 0', () => {
    TestBed.runInInjectionContext(() => {
      const model = signal({ price: 1 });
      const f = form(model, (p) => positiv(p.price));
      expect(f.price().valid()).toBe(true);
      f.price().value.set(0);
      expect(f.price().errors()[0].kind).toBe('positiv');
    });
  });
});
