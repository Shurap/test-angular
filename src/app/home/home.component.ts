import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

export interface CardInterface { //all interfaces out types/index.ts
  title: string
  content: string
  imageUrl: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: CardInterface[] = [];

  // if isLogged = false then go home!

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataSource.subscribe(data => {
      this.cards = [...data]
    })
  }

}