import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService, Beer, beerTopSelling } from '../beers.service';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-beer-weekly-filter',
  templateUrl: './beer-weekly-filter.component.html',
  styleUrls: ['./beer-weekly-filter.component.css']
})
export class BeerWeeklyFilterComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;

  items: MenuItem[];

  days;
  counts;

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

        this.beerService.getBeerWeeklyFilter(this.beerName).subscribe(
          data => {
            console.log(data);
  
           this.days = [];
           this.counts = [];
  
            data.forEach(bar => {
              this.days.push(bar.day);
              this.counts.push(bar.total);
  
            });
            this.renderChart(this.days, this.counts);
          });
    });
   }

  ngOnInit() {
    this.items = [
      {label: 'Back', routerLink: ['/beers']},
      {label: 'Weekly Filter'},
      {label: 'Top Consumers', routerLink: ['/topConsumers/' + this.beerName]}
    ]
  }

  renderChart(day: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Number of Beers Bought by Weekday'
      },
      xAxis: {
        categories: day,
        title: {
          text: 'Day'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number Bought'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts,
        name: 'total',
      }]
    });
  }

}
