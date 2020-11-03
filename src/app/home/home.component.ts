import { Component, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';
// import * as data from '../../assets/data.json';

export interface CardInterface {
  title: string
  content: string
  imageUrl: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent {

  // cards: CardInterface[] = data['default'];
  cards: CardInterface[] = [];

  constructor(private dataService: DataService, private changeDetection: ChangeDetectorRef, private ngZone: NgZone) {
    this.dataService.data$.subscribe(data => {
      this.ngZone.run(() => {
        this.cards = [...data]
      });
      // this.cards = data.concat(this.cards)
      // console.log('data', data[0])
      // const obj=data[0]
      // this.cards.push(data[0])
      this.changeDetection.detectChanges();

      console.log('card', this.cards)
    })
  }

  // trackElement(index: number, element: any) {
  //   return element.trackId;
  // }
}