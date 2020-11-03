import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CardInterface } from '../types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: CardInterface[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.dataService.dataSource.subscribe(data => {
      this.cards = [...data]
    })
  }
}