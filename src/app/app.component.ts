import { Component } from '@angular/core';
import { trigger, state, style, transition,  animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   trigger('clickedDiv', [
     state('start', style({
       backgroundColor: 'blue',
       width:'150px',
       height: '150px', 
     })),
     state('end',style({
      backgroundColor: 'red',
       width:'300px',
       height: '300px', 
     })),
     state('active', style({
      width:'170px',
      height: '170px', 
      backgroundColor: 'orange',
     })),
     transition('start <=> end', animate(800)), //перехід від одного стану до іншого
   //  transition('end => start', animate(800)),// animate('800ms 0.5s ease-out') - 800ms - виконати за 800 мілісекунд,  0.5s - затримка анімації 500 мілісекундб 
     transition('start => active', animate(400)),
     transition('active => end', animate(400))
    ]) 
  ]
})
export class AppComponent {
  clickedDivState = 'start';

changeDivState(){
  this.clickedDivState='end';
  setTimeout(()=>{
this.clickedDivState = 'start';
  },3000)
}


}
