## Client Side Scripting Unit - 2025 - Paul Pulis

# Ex3 - Template, Interpolation and Blocks 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Description 
This example focuses on three core Angular template concepts using the modern syntax (Angular 17+):

- Templates: external template file with structured sections and markup
- Interpolation: binding values and expressions directly in the view
- Block directives: control flow with `@if/@else` and iteration with `@for`

It also uses Angular signals for simple, reactive state.

### Where to look
- `src/app/app.html` – the template demonstrating interpolation and block directives
- `src/app/app.ts` – the component defining signals used by the template

### What it demonstrates (concretely)
- Interpolation of values and expressions: `{{ title() }}`, `{{ numOne + numTwo }}`
- Conditional display with blocks:
	- `@if (showMessage()) { ... } @else { ... }`
- Iteration with index using the new `@for` syntax:
	- `@for (item of items(); let i = $index) { ... }`

### Code highlights
TypeScript (signals):
```ts
import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	protected readonly title = signal('Ex3-Templates-Interpolation-Blocks');
	protected readonly curly = 'C U R L Y ... B R A C E S';
	protected readonly numOne = 10;
	protected readonly numTwo = 20;
	protected readonly showMessage = signal(true);
	protected readonly items = signal(['Apple', 'Banana', 'Cherry', 'Date']);
}
```

Template (interpolation + blocks):
```html
<h1>This is {{ title() }}</h1>

<!-- Interpolation of values and expressions -->
<p>Example: {{ numOne }} + {{ numTwo }} = {{ numOne + numTwo }}</p>

<!-- Conditional block -->
@if (showMessage()) {
	<p>The showMessage signal is true, so this message is displayed.</p>
} @else {
	<p>The showMessage signal is false, so this message is hidden.</p>
}

<!-- Iteration with index using @for -->
@for (item of items(); let i = $index) {
	<div>Index: {{ i }} - Value: {{ item }}</div>
}
```

## Lifecycle of Angular Apps

The lifecycle of an Angular application involves several key phases:
1. **Bootstrap**: The application starts by bootstrapping the root module, which initializes the application.
2. **Component Rendering**: The root component is rendered, and any child components are initialized    and rendered as needed.
3. **Data Binding**: Angular's data binding mechanism connects the component's data to the template, allowing for dynamic updates.
4. **Change Detection**: Angular continuously monitors for changes in the application state and updates the view accordingly.          

## Sequence of Events When Running the Application
1. The application is bootstrapped using the `bootstrapApplication` function in `main.ts`.
2. The root component (`App`) is loaded and rendered in the `index.html` file.
3. Any additional components or services defined in the application are initialized and rendered as needed.     

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
