import { Component, OnInit } from '@angular/core';
import { BarsService, Bar, barTopManu} from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-top-manu',
  templateUrl: './bar-top-manu.component.html',
  styleUrls: ['./bar-top-manu.component.css']
})
export class BarTopManuComponent implements OnInit {

  barName: string;
  topManu: barTopManu[];
  barDetails: Bar;

  items: MenuItem[];

  constructor(
    private barService: BarsService,
    private route:ActivatedRoute
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

      this.barService.getBarTopManu(this.barName).subscribe(
        data => {
          const manufacture = [];
          const total = [];

          data.forEach(bar => {
            manufacture.push(bar.manufacture);
            total.push(bar.total);
          });
          this.renderChart(manufacture, total);
        }
      );

   }

  ngOnInit() {
    this.items = [
      {label: 'Back',routerLink: ['/bars/' + this.barName]},
      {label: 'Top Selling'},
      {label: 'Weekly Sales',routerLink: ['/barWeeklyFilter/' + this.barName]}, 
      {label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday']},
      {label: 'Top Manufacture'}
      ]
  }
  renderChart(beers: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: "Top Manufacture's At This Bar"
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Manufacture'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Amount Sold'
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
