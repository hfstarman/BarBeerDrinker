import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Drinker {
  name: string;
  email: string;
  address: string;
  state: string;
}

export interface drinkerTransactions {
  item: string;
  barname: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http: HttpClient
  ) { }

  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinker')
  }

  getDrinker(drinker: string) {
    return this.http.get<Drinker>('/api/drinker/' + drinker)
  }

  getDrinkerTransactions(drinker: string) {
    return this.http.get<drinkerTransactions[]>('/api/drinkerTransactions/' + drinker)
  }







}
