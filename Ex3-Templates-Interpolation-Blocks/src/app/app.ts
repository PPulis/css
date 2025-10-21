import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
[x: string]: any;
  protected readonly title = signal('Ex3-Templates-Interpolation-Blocks');
  protected readonly curly = "C U R L Y ... B R A C E S";
  protected readonly numOne = 10;
  protected readonly numTwo = 20;
  protected readonly showMessage = signal(true);
  protected readonly items = signal(['Apple', 'Banana', 'Cherry', 'Date']);
}
