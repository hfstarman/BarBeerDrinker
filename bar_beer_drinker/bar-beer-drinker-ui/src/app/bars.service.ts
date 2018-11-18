import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface pattern1 {
  violateID: string;
  total: number;
}
export interface pattern2 {
  drinker: string;
}

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

export interface barTopManu {
  manufacture: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { } 

  getPattern1() {
    return this.http.get<pattern1[]>('/api/patterns/pattern1')
  }

  getPattern2() {
    return this.http.get<pattern2[]>('/api/patterns/pattern2')
  }

  getBars() {
    return this.http.get<Bar[]>('/api/bar')
  }

  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getBarTopManu(bar: string) {
    return this.http.get<barTopManu[]>('/api/barTopManu/' + bar)
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
