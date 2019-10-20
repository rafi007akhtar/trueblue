import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trueblue';

  menu = ['traveler details', 'trip contact', 'select seats', 'payment'];
  counter = 1;
  count(menu_item) {
    // this.counter = this.counter+1;
    return this.menu.indexOf(menu_item) + 1 + ".";
  }
}
