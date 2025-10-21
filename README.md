## Client Side Scripting Unit – Angular Examples (2025)

This repository contains a set of small Angular projects used during the Client Side Scripting unit. Each example focuses on a specific concept and builds progressively.

Folders:
- `Ex1-Hello-Angular` – First contact with Angular and the app bootstrap flow
- `Ex2-Components` – Building and composing standalone components (parent/children)
- `Ex3-Templates-Interpolation-Blocks` – Modern template syntax: interpolation and block directives
- `Ex4-Todo` – Todo App (Part 1): list UI with property binding, interpolation, and control flow

All projects target Angular 20.3.x and use standalone APIs.

### Prerequisites
- Node.js (LTS recommended)
- npm (bundled with Node.js)

You do NOT need a global Angular CLI; each project includes the CLI as a dev dependency and exposes npm scripts.

### How to run an example (Windows cmd)
Run one example at a time in a new terminal:

```bat
cd Ex1-Hello-Angular
npm install
npm start
```

Then open http://localhost:4200/

Repeat for the other folders by changing directory to `Ex2-Components`, `Ex3-Templates-Interpolation-Blocks`, or `Ex4-Todo`.

---

## Ex1 – Hello Angular
Purpose:
- Understand project layout, bootstrap with `bootstrapApplication`, and basic rendering.

Look at:
- `src/main.ts` – bootstraps the root component
- `src/app/` – root component and template
- `src/index.html` – mounts `<app-root>`

Run:
```bat
cd Ex1-Hello-Angular
npm install
npm start
```

Build/Test:
```bat
npm run build
npm test
```

---

## Ex2 – Components
Purpose:
- Compose UIs from standalone components; import and nest child components.

Look at:
- `src/containers/app/` – parent container (root)
- `src/components/first-child|second-child|third-child/` – child components

Run:
```bat
cd Ex2-Components
npm install
npm start
```

Build/Test:
```bat
npm run build
npm test
```

---

## Ex3 – Templates, Interpolation, Blocks
Purpose:
- Use modern template features (Angular 17+ syntax): `@if/@else`, `@for`, and interpolation; intro to signals.

Look at:
- `src/app/app.html` – shows `@if`/`@for` and interpolation
- `src/app/app.ts` – defines signals/values bound in the template

Run:
```bat
cd Ex3-Templates-Interpolation-Blocks
npm install
npm start
```

Build/Test:
```bat
npm run build
npm test
```

---

## Ex4 – Todo Application (Part 1)
Purpose:
- Build a simple Todo list UI; demonstrate property binding, interpolation, and control flow. Actions are stubs for now.

Behavior (current):
- Renders a list of static todos with checkbox, Edit, and Delete buttons.
- Delete triggers an alert (stub) to be implemented in later parts.

Look at:
- `src/app/app.ts` – sample data and `deleteTodo()` stub
- `src/app/app.html` – uses `@if` and `@for (item of todos; track item.id)`
- `src/app/app.css` – list styling

Run:
```bat
cd Ex4-Todo
npm install
npm start
```

Build/Test:
```bat
npm run build
npm test
```

Note: The provided unit spec is a placeholder and may need updating to match the current headings in the template.

---

## Tips and troubleshooting
- If port 4200 is busy, the CLI will offer another port or you can pass `--port 4300` to `ng serve`.
- If `ng` isn’t recognized, ensure you’re using `npm start` (which runs the local CLI) after `npm install`.
- Clear caches when in doubt: delete the project’s `node_modules` and run `npm install` again.

## Useful links
- Angular Docs: https://angular.dev
- Angular CLI: https://angular.dev/tools/cli

