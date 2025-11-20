# Ex9 — Online Supermarket (example)

This folder contains a small Angular example that demonstrates component composition, simple DTO usage, pipes and event communication between components.

What you'll find inside
- `src/app/`
	- `app.ts` — root component that holds a small in-memory list of `Item` objects, computes a running `total`, and exposes `addToTotal()` and `resetTotal()` handlers.
	- `app.html` / `app.css` — application template and styles. The template renders a header, a list of `app-single-item` components and a card showing the total (uses the `currency` pipe).
- `src/single-item/`
	- `single-item.ts` — a child component (`app-single-item`) that accepts an `Item` via `@Input()` and emits its price via an `@Output()` event when the "Add to Cart" button is clicked.
	- `single-item.html` / `single-item.css` — presentational markup that displays item details and an Add-to-Cart button.
- `src/header/`
	- `header.ts` / `header.html` — simple header component used by the app.
- `src/dto/`
	- `item.ts` — small `Item` DTO class with getters/setters for `Id`, `Name` and `Price`.
- `public/` — static assets (contains `favicon.ico` for this example).

Key concepts demonstrated
- Parent/child component composition and the standalone component `imports` pattern.
- Component communication with `@Input` (pass data to child) and `@Output` (child emits events to parent).
- Using built-in pipes in templates (example uses the `currency` pipe to format prices).
- Simple state kept in the root component (`total`), updated by child events.

Quick start (Windows cmd)
```bat
cd Ex9-Online-Supermarket
npm install
npm start
```

Then open http://localhost:4200/ — you should see a header, a list of items, and a Total card; clicking "Add to Cart" on an item will add its price to the total. Use the "Reset Total" button to clear it.

Build / Test
```bat
npm run build
npm test
```

Notes
- This example uses a small hard-coded dataset in `app.ts` (see `ngOnInit()`).
- The template uses the modern `@for` block syntax for iteration (check `app.html`).
- The project targets Angular 20.x and uses standalone components.

If you want, I can add a short section with exact file references and line numbers, or add a link back to the root `README.md`.
