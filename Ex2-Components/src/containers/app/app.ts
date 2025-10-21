import { Component, signal } from '@angular/core';
import { ThirdChild } from '../../components/third-child/third-child';
import { SecondChild } from '../../components/second-child/second-child';
import { FirstChild } from '../../components/first-child/first-child';

@Component({
  selector: 'app-root',
  imports: [FirstChild, SecondChild, ThirdChild],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ex2 - Components');
}
