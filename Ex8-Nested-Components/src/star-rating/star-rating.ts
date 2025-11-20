import { Component, Input, Output,  OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
//NOTE THAT CHILD COMPONENTS ARE NOT TO BE CONFUSED WITH CHILD CLASSES 
export class StarRating implements OnChanges {


  //This is the INPUT to our CHILD COMPONENT => NOTE YOU CANNOT HAVE THIS AS A PROTECTED VARIABLE 
  @Input({ required: true }) rating!: number; //REQUIRED => THE INPUT NEEDS TO BE PROVIDED WHEN USING THE COMPONENT 
  @Output() notify: EventEmitter<string> = new EventEmitter();

  protected starWidth: number = 48;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 24;
  }

  onClick() {
    this.notify.emit("Clicked! " + this.rating );
    // console.log("clicked"); //To Test out whether your event is working put in a console.log ....
  }

}