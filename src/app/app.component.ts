import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged: boolean = false
  // isSpinner: boolean = false

  onActivate(componentReference) {
    if (componentReference.onChanged) {
      componentReference.onChanged.subscribe((value: boolean) => {
        this.isLogged = value;
      })
    }
  }
}
