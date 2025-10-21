## Client Side Scripting Unit - 2025 - Paul Pulis

# Ex4 - Todo Application - Part 1

This project was generated using the Angular CLI (v20.3.5).

## What this exercise builds
Part 1 sets up a simple Todo list UI and demonstrates modern Angular template features:

- Property binding: `[style.color]="colour"`
- Interpolation: `style.color={{colour}}` and `{{ item.title }}`
- Block directives: `@if`/`@else` for conditional rendering and `@for` with `track` for iteration

The app renders a static in-memory list of todos with a checkbox, Edit, and Delete actions per item. The Delete button is currently a stub (shows an alert) to be implemented in later parts.

## Where to look in the code
- `src/app/app.ts` – standalone root component with sample data and a `deleteTodo()` stub
- `src/app/app.html` – template using `@if`/`@for`, property binding, and interpolation
- `src/app/app.css` – styles for the todo list UI
- `src/app/app.routes.ts` – placeholder (no routes yet)
- `src/app/app.config.ts` – application providers and router setup

## Current behavior (actual solution)
- Shows two headings demonstrating property binding and interpolation for styling
- If no todos exist, displays “No todos available”; otherwise lists todos using `@for (item of todos; track item.id)`
- Each list item shows id, title, completion checkbox bound via `[checked]="item.completed"`, and Edit/Delete buttons
- Clicking Delete calls `deleteTodo()` which currently shows an alert

## How it boots
1. `src/main.ts` bootstraps the standalone `App` component with providers from `app.config.ts`
2. The root outlet `<app-root>` is placed in `src/index.html` (which also contains a page-level heading)

## Run it locally (Windows cmd)
These commands are optional documentation in case you don’t already have a dev server running:

```bat
npm install
npm start
```

Then open http://localhost:4200/ in your browser. Hot reload is enabled.

If you prefer using the CLI directly:

```bat
npx ng serve
```

## Build

```bat
npm run build
```

The production build outputs to `dist/`.

## Tests
Unit tests are scaffolded with Karma/Jasmine:

```bat
npm test
```

Note: the provided spec is a placeholder and may fail until the UI header expectation matches the current template. You can either add an `<h1>` to the component template or adjust the spec to assert against the existing headings in `app.html`.

## Notes and next steps
- The Delete and Edit actions are stubs in Part 1. In later parts, you’ll wire state updates (e.g., remove/toggle/edit) and possibly adopt Angular signals for reactive state.
- Routing is intentionally empty for now.

## Angular CLI reference
See the Angular CLI docs: https://angular.dev/tools/cli
