# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` (`ng serve`): dev server on http://localhost:4200
- `npm run build`: production build into `dist/`
- `npm test` (`ng test`): unit tests via the `@angular/build:unit-test` builder with Vitest and jsdom
- Single spec: `ng test --include src/app/product/product-form/product-form.spec.ts`
- Formatting: Prettier (`printWidth` 100, single quotes, Angular parser for `*.html`)

## Architecture

"Stones" is an Angular 22 shop app for offering and buying gravestones (Grabsteine). The UI language is German. Code, identifiers and comments are English.

- **Bootstrap:** `src/main.ts` uses `bootstrapApplication(App, …)` with `provideRouter(appRoutes)`. There are no NgModules.
- **Routing:** `app.routes.ts` redirects `''` to `products` and spreads in `product/product.routes.ts`. That file defines `products` (`ProductList`), `products/new` and `products/new/:id` (both `ProductForm`). The form routes are protected by `hasSavedGuard` (`utils/guards/has-saved.ts`), a `canDeactivate` guard that calls `ProductForm.hasSaved()`. It asks for a `confirm()` when the form holds unsaved values.
- **Data:** `product/product-data.ts` holds `ProductData`, declared with `@Service()`. It wraps `HttpClient` against a remote REST backend (GET list, POST add); the URL is defined in that file. `MockProductService` in the same file is the test double for specs.
- **Model:** `Product` is a class (`id`, `name`, `price`, `weight`) in `product/product.ts`.
- **Forms:** `ProductForm` uses Angular Signal Forms (`form`, `required`, `FormField` from `@angular/forms/signals`), bound with `[formField]`. Custom validators (`alphaNum`, `positiv`) in `utils/validators/custom-validators.ts` return `{ kind: '…' }` errors. The template switches on `error.kind` to show `mat-error` messages.
- **UI:** Angular Material, with the theme in `src/material-theme.scss`. Components are in `src/app/product/` (`product-form`, `product-list`, `product-display`). Each has its own `.html`, `.css` and `.spec.ts`.

## Conventions

### TypeScript

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Components

- Standalone components only. Do NOT set `standalone: true` in decorators (default in Angular v20+).
- Always set `changeDetection: ChangeDetectionStrategy.OnPush`
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Do NOT use `@HostBinding` / `@HostListener`; use the `host` object of `@Component` / `@Directive`
- Prefer inline templates for small components; external template/style paths are relative to the component TS file
- File names have no `.component` suffix (e.g. `product-form.ts`)
- Use `NgOptimizedImage` for static images (not for inline base64 images)
- Lazy load feature routes

### State

- Use signals for local component state and `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals; use `update` or `set`
- Convert observables with `toSignal()`; use the async pipe only when a signal is not practical

### Forms

- Use Signal Forms (`@angular/forms/signals`) with `[formField]`
- No classic Reactive or Template-driven forms

### Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`), not `*ngIf`, `*ngFor`, `*ngSwitch`
- Do NOT use `ngClass` / `ngStyle`; use `class` / `style` bindings
- Do not call globals such as `new Date()` in templates; expose values from the component instead

### Services

- Single responsibility per service
- Singleton services: follow the existing `@Service()` declaration in `product-data.ts`
- Use `inject()` instead of constructor injection

### Accessibility

- MUST pass all AXE checks
- MUST follow WCAG AA minimums, including focus management, color contrast and ARIA attributes

### Testing and commits

- Every component has a `.spec.ts` (Vitest). Use `MockProductService` instead of real HTTP.
- Commit messages follow Conventional Commits; use the `conv-commit` skill.
