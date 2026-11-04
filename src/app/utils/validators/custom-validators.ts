import { SchemaPathTree, validate } from '@angular/forms/signals';

export function alphaNum(path: SchemaPathTree<string>) {
  validate(path, ({ value }) => {
    return /^[a-zA-Z0-9]+$/.test(value()) ? null : { kind: 'alphaNum' };
  });
}

export function positiv(path: SchemaPathTree<number>) {
  validate(path, ({ value }) => {
    return Number(value()) > 0 ? null : { kind: 'positiv' };
  });
}
