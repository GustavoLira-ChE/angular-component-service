import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-component-service';
  newMessage = "";

  onLoaded(img: String){
    console.log("parent log")
    console.log(img);
  }
}
