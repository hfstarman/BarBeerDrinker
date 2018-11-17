import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Bar {
  name: string;
  address: string;
  state: string;
}

export interface barTopSpenders {
  drinker: string;
  barname: string;
  total: number;
}

export interface barTopSelling {
  item: string;
  num: number;
}

export interface barWeeklyFilter {
  day: string;
  numBills: number;
}

export interface barDailyFilter {
  time: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { } 

  getBars() {
    return this.http.get<Bar[]>('/api/bar')
  }

  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getTopSpenders(bar: string) {
    return this.http.get<barTopSpenders[]>('/api/topSpenders/' + bar);
  }

  getTopSelling(bar: string) {
    return this.http.get<barTopSelling[]>('/api/topSelling/' + bar);
  }

  getWeeklyFilter(bar: string) {
    return this.http.get<barWeeklyFilter[]>('/api/barWeeklyFilter/' + bar);
  }

  getDailyFilter(bar: string, day: string) {
    return this.http.get<barDailyFilter[]>('/api/barDailyFilter/' + bar + '/' + day);
  }
}
