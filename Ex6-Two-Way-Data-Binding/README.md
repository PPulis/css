# Ex6 – Two‑Way Data Binding

This example shows how user input can update component state and immediately reflect back in the view — the essence of two‑way data binding — using the “manual” approach (event binding + interpolation) instead of `[(ngModel)]`.

## What the app does

- You type in the input box.
- On every keyup, the component method `changeTitle(...)` runs and updates a `text` property.
- The current `text` value is rendered in an `<h1>` via interpolation, so it updates live as you type.

UI (from `src/app/app.html`):

```
<input #titleInput (keyup)="changeTitle(titleInput.value)" type="text"/>
<h1> {{text}} </h1>
```

Component (from `src/app/app.ts`):

```
protected text: string = 'Hello World';
protected changeTitle(text: string): void {
	this.text = text;
}
```

## Concepts used in this example

- Standalone component: `App` is bootstrapped without an `NgModule` using `bootstrapApplication` (see `src/main.ts`).
- Template reference variable: `#titleInput` gives direct access to the input’s current value in the template.
- Event binding (one‑way to source): `(keyup)="changeTitle(titleInput.value)"` pushes data from the view to the component.
- Interpolation (one‑way to view): `{{ text }}` renders the component property back to the DOM.
- Two‑way effect without `ngModel`: combining event binding + interpolation achieves the same user experience as two‑way binding.
- Router setup: `provideRouter(routes)` is configured, though the routes array is empty in this example.
- Change detection tuning: `provideZoneChangeDetection({ eventCoalescing: true })` enables event coalescing for performance.
- Error handling: `provideBrowserGlobalErrorListeners()` wires global error listeners.

## Run it locally

Use the Angular CLI dev server:

```bash
ng serve
```

Then open http://localhost:4200 and start typing in the input to see the heading update in real time.

## What’s next

In the next example, we’ll show the “Angular way” of two‑way binding using the Forms package and `[(ngModel)]` — an alternative to the manual approach demonstrated here.
