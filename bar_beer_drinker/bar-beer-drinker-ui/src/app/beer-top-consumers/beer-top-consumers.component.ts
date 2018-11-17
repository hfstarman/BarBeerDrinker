import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService, Beer, beerTopConsumers } from '../beers.service';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-beer-top-consumers',
  templateUrl: './beer-top-consumers.component.html',
  styleUrls: ['./beer-top-consumers.component.css']
})
export class BeerTopConsumersComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;

  items: MenuItem[];

  topConsumers: beerTopConsumers[];

  filterOptions: SelectItem[];

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      beerService.getBeer(this.beerName).subscribe(
        data => {
          this.beerDetails = data;
        },

        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server, please check the browser console.');
          }
        });

        beerService.getTopConsumers(this.beerName).subscribe(
          data => {
            this.topConsumers = data;
          }
        );
    });
  }

  ngOnInit() {
    this.items = [
      {label: 'Back', routerLink: ['/beers']},
      {label: 'Weekly Filter', routerLink: ['/beerWeeklyFilter/' + this.beerName]},
      {label: 'Top Consumers'}
    ]
  }

}
