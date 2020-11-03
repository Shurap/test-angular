import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import dataFromJson from '../../assets/data.json';
import { CardInterface } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public dataSource = new BehaviorSubject<CardInterface[]>(dataFromJson);

}