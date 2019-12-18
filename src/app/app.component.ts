import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yuka';


  playPhrase(){
    const audio = new Audio();
    audio.src = '../assets/tilltherewasyou.m4a';
    audio.load();
    audio.play();
  }
}
