import { Component } from '@angular/core';
import * as data from '../../assets/data.json';
// import Card from '../card/card.component';

export interface CardInterface {
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

  cards: CardInterface[] = data['default'];

  ngOnInit(): void {
    console.log(data['default'])
  }
}