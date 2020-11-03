import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isLogged: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.logged$.subscribe(data => this.isLogged = data)
  }
}