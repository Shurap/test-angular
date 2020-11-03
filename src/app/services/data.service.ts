import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as dataFromJson from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  isLogged: boolean = false;
  data: string[] =[];

  private loggedSource = new Subject<boolean>();
  logged$ = this.loggedSource.asObservable();

  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();

  changeLogged(data: boolean) {
    this.isLogged = data;
    return this.loggedSource.next(this.isLogged);
  }

  getJson(): any {
    console.log(this.data);
    this.data = this.data.concat(dataFromJson['default']);
    console.log(this.data);
    return this.dataSource.next(this.data);
  }


}