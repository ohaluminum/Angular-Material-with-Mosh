import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material-with-Mosh';

  isSubscribed = false;

  onChange() {
    this.isSubscribed = (this.isSubscribed)? false : true;
  }
}
