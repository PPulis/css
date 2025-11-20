# Ex8 — Nested Components & Pipes

This folder contains an Angular example that demonstrates nesting components (parent + child), using built-in pipes, and simple parent/child communication via `@Input`/`@Output`.

What you'll find inside
- `src/product-list/`
	- `product-list.ts` — a standalone parent component that loads an in-memory list of products, exposes a text filter and computes the filtered list.
	- `product-list.html` — a table view that uses Angular pipes (`lowercase`, `titlecase`, `currency`, `date`) and renders a `<star-rating>` child component per row.
	- `product-list.css` — small styles for the product image.
- `src/star-rating/`
	- `star-rating.ts` — a reusable child component that accepts a `rating` via `@Input()` and emits a `notify` event via `@Output()` when clicked.
	- `star-rating.html` / `star-rating.css` — presentational template and styles for the star control.
- `src/dto/product.ts` — a small Product DTO (class) with getters/setters used by the example.
- `public/assets/images/` — sample product images (shovel, tractor, workbench) referenced by the example data.
- `src/app/` — minimal app wiring (`app.config.ts`, `app.routes.ts`) used to bootstrap the example.

Key concepts demonstrated
- Parent and child components (standalone components with imports)
- Built-in pipes: `currency`, `date`, `lowercase`, `titlecase` in templates
- Two-way-like view updates using `[(ngModel)]` in the filter input (note: FormsModule is imported in the parent component)
- Event communication: child component emits events that parent handles (`notify` -> `onNotify()`)

Quick start (Windows cmd)
```bat
cd Ex8-Nested-Components
npm install
npm start
```

Open http://localhost:4200/ and you should see the product table. Use the filter input to filter by code/name. Clicking the star area will trigger a notification (alert) emitted by the child component and handled by the parent.

Build / Test
```bat
npm run build
npm test
```

Notes
- Images are stored under `public/assets/images/` and are referenced by `Product` instances in `product-list.ts`.
- The project targets Angular 20.x and uses standalone component APIs. If you need a README section reworded or want cross-links back to the root `README.md`, tell me how you'd like them formatted.

