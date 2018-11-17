import { Component, OnInit } from '@angular/core';

import { BeersService, Beer } from '../beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers:Beer[];

  constructor(
    public beerService: BeersService
  ) {
    this.getBeers()
   }
   
  ngOnInit() {
  }

  getBeers(){
    this.beerService.getBeers().subscribe(
      data => {
        this.beers = data;
      },
      error => {
        alert('Could not retrieve a list of bars');
      }
    );
  }

}
