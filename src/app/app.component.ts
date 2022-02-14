import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material-with-Mosh';

  isSubscribed = false;
  favoriteSeason = "";
  carMake = "";

  makes = [ 
    'Mercedes Benz',
    'Audi',
    'Toyota',
    'Hyundai',
    'GMC',
    'Honda',
    'Nissan',
    'Lincoln',
    'Ford'
  ]

  onChange() {
    this.isSubscribed = (this.isSubscribed)? false : true;
  }
}
