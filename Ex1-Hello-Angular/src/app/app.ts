// Import necessary Angular modules and decorators
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Define the root component with its metadata
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// Root component of the Angular application
export class App {
  protected readonly title = signal('Ex1-Hello-Angular');// Application title as a reactive signal
}
