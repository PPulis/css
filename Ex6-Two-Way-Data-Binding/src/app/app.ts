import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  text: string = "Hello World";
  protected changeTitle(text:string):void{
    this.text = text;
  }
}
