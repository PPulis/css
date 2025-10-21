## Client Side Scripting Unit - 2025 - Paul Pulis

# Ex1 - Hello Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Description 
This is a simple Angular application that serves as an introduction to Angular development. It demonstrates the basic structure of an Angular application, including components, modules, and services.

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
