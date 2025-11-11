import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  text: string = "Hello World";
  protected secondText: string = "Hello World";
  protected thirdText: string = "Hello World";
  protected width:number = 20;
  protected height:number = 20;

  protected changeTitle(text:string):void{
    this.text = text;
  }

  protected changeSecondTitle(secondText:string):void{
   this.secondText = secondText;
  }

  
}
