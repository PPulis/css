# Angular ToDo List Example

This project demonstrates a modern Angular ToDo list application using the latest Angular features (v17+), including:

## Features Covered
- **Standalone Components**: No traditional NgModules; components and pipes are imported directly.
- **Bootstrap Integration**: Styling and layout using Bootstrap CSS and JS.
- **Table Rendering**: Uses the new `@for` control flow block directly on `<tr>` for table rows, ensuring correct layout and browser compatibility.
- **Edit/Delete Actions**: Inline edit and delete buttons for each todo item.
- **Custom Pipe**: `NewLabelPipe` prepends `(new)` to each todo title, showing how to create and use custom pipes.
- **Component Structure**: Clean folder organization for components, containers, pipes, and models.
- **Best Practices**: Demonstrates the recommended approach for table row rendering in Angular, and explains the limitations of nested `<tr>` components.
- **Animations**: Fade-in 

## Educational Notes
- Highlights the importance of using `@for` (or `*ngFor`) directly on `<tr>` for reliable table rendering.
- Demonstrates how to integrate custom pipes in standalone components.
- Explains why using a nested component for `<tr>` is not recommended for production.

## How to Run
1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. View the app in your browser and explore the features.

---
This example is designed for teaching and demonstration purposes, covering both best practices and common pitfalls in Angular table rendering and component architecture.
