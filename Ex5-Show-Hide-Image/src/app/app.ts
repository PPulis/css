import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  //variables 
  protected isVisible:boolean = false;
  protected colour:string = "green";

  //read-only variables
  protected readonly instructions = "Please click the button to show or hide the image.";
  
  //constructor
  constructor() {
    console.log("App component loaded.");
  }

  //functions 
  protected showHide():void {
    this.isVisible = !this.isVisible;
    if(this.isVisible) {
      this.colour = "red";
    } else {
      this.colour = "green";
    }
    console.log(`Image visibility set to: ${this.isVisible}`);
  }
}
