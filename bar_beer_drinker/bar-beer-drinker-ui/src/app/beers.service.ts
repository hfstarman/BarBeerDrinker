import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer {
  name: string;
  manufacture: string;
}

export interface beerTopConsumers {
  drinker: string;
  amount: number;
}

export interface beerTopSelling {
  barname: string;
  amount: number;
}

export interface beerWeeklyFilter {
  day: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    public http: HttpClient
  ) { }

  getBeers() {
    return this.http.get<Beer[]>('/api/beer')
  }

  getBeer(beer: string) {
    return this.http.get<Beer>('/api/beer/' + beer)
  }

  getTopConsumers(beer: string) {
    return this.http.get<beerTopConsumers[]>('/api/topConsumers/' + beer);
  }

  getTopSellingBeer(beer: string) {
    return this.http.get<beerTopSelling[]>('/api/topSellingBeer/' + beer);
  }

  getBeerWeeklyFilter(beer: string) {
    return this.http.get<beerWeeklyFilter[]>('/api/beerWeeklyFilter/' + beer)
  }

}
