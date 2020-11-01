import { Injectable } from '@angular/core';
import * as datas from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class GetJson {

  get(): any {
    return datas['default']
  }
}