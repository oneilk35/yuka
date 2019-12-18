import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yuka';


  playPhrase(phrase: string){
    const audio = new Audio();
    audio.src = phrase;
    audio.load();
    audio.play();
  }
}
