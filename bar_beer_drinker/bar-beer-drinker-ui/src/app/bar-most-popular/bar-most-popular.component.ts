import { Component, OnInit } from '@angular/core';
import { BarsService, Bar, barTopSelling} from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-most-popular',
  templateUrl: './bar-most-popular.component.html',
  styleUrls: ['./bar-most-popular.component.css']
})
export class BarMostPopularComponent implements OnInit {

  barName: string;
  topSelling: barTopSelling[];
  barDetails: Bar;

  items: MenuItem[];

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
    ) {
    
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
      
      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server, please check the browser console.');
          }
        });
      });
      
      this.barService.getTopSelling(this.barName).subscribe(
        data => {
          console.log(data);

          const beers = [];
          const counts = [];

          data.forEach(bar => {
            beers.push(bar.item);
            counts.push(bar.num);
          });
            this.renderChart(beers, counts);
        });
    }

  ngOnInit() {

    this.items = [
      {label: 'Back',routerLink: ['/bars/' + this.barName]},
      {label: 'Top Selling'},
      {label: 'Weekly Sales',routerLink: ['/barWeeklyFilter/' + this.barName]}, 
      {label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday']}
      ]
  }

  renderChart(beers: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most Popular Beers'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Beers'
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
        name: 'Number'
      }]
    });
  }
}
