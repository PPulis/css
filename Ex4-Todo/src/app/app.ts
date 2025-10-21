import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ex4-Todo Application - Part 1');
  protected readonly colour = "lime";
  protected readonly todos: any[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
    { id: 3, title: 'Master Signals', completed: false }
  ]

  protected deleteTodo(): void {
    alert("Delete will happen here");
  }
}
