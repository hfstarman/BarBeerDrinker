import { Component, OnInit } from '@angular/core';

import { DrinkersService, Drinker } from '../drinkers.service'

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {

  drinkers:Drinker[];

  constructor(
    public drinkerService: DrinkersService
  ) {
    this.getDrinkers();
   }

  ngOnInit() {
  }


  getDrinkers() {
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve a list of drinkers')
      }
    );
  }

}
