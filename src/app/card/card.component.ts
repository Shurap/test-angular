import { Component, Input } from '@angular/core';
import { CardInterface } from '../types/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: CardInterface
}