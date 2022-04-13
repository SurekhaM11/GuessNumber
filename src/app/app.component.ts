import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guess_number';
  
  deviation :number =0;
  nooftries: number =0;
  random : number =0;
  original:number = Math.floor(Math.random()*10);

  constructor(){
    console.log(this.original);
    //this.guessNumber();

  }

  guessNumber(){
    this.deviation = this.original - this.random ;
    	if(this.original == this.random){
        console.log("Your guess is correct");
      }
      else
      console.log("your guess is wrong");

  }
}