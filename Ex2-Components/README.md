## Client Side Scripting Unit - 2025 - Paul Pulis

# Ex2 - Components 

This project demonstrates **nested components** in Angular and how to compose applications using reusable component architecture.

## What This Example Shows

This example illustrates the fundamentals of Angular component composition:

### Component Structure
- **Parent Component** (`App`): The root container that orchestrates child components
- **Child Components**: Three separate components (`FirstChild`, `SecondChild`, `ThirdChild`) that are imported and nested within the parent

### Key Concepts Demonstrated

1. **Component Imports**: Using Angular's standalone component imports to include child components
2. **Component Nesting**: Embedding child components using their selectors in the parent template
3. **Component Isolation**: Each component has its own TypeScript logic, HTML template, and CSS styles
4. **Signals**: Modern Angular state management using `signal()` for reactive data

## How to Create Nested Components

### Step 1: Create the Child Component
```bash
ng generate component components/my-child
```

### Step 2: Define the Child Component
Each component needs:
- A unique **selector** (e.g., `app-my-child`)
- A **template** (HTML file or inline)
- Optional **styles** (CSS file or inline)

```typescript
@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.html',
  styleUrl: './my-child.css'
})
export class MyChild { }
```

### Step 3: Import the Child in the Parent
```typescript
import { MyChild } from './components/my-child/my-child';

@Component({
  selector: 'app-root',
  imports: [MyChild],  // Add to imports array
  templateUrl: './app.html'
})
export class App { }
```

### Step 4: Use the Child Component in Parent Template
```html
<app-my-child></app-my-child>
```

## Project Structure
```
src/
  ├── containers/
  │   └── app/              # Parent container component
  │       ├── app.ts
  │       ├── app.html
  │       └── app.css
  └── components/           # Reusable child components
      ├── first-child/
      ├── second-child/
      └── third-child/
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

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
