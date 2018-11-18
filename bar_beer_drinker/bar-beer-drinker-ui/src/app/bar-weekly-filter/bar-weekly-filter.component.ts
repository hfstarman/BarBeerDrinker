import { Component, OnInit } from '@angular/core';
import { BarsService, Bar, barTopSelling} from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { renderDetachView } from '@angular/core/src/view/view_attach';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-weekly-filter',
  templateUrl: './bar-weekly-filter.component.html',
  styleUrls: ['./bar-weekly-filter.component.css']
})
export class BarWeeklyFilterComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  dayName: string;

  items: MenuItem[];

  days;
  counts;
  


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

      this.barService.getWeeklyFilter(this.barName).subscribe(
        data => {
          console.log(data);

         this.days = [];
         this.counts = [];

          data.forEach(bar => {
            this.days.push(bar.day);
            this.counts.push(bar.numBills);

          });
          this.renderChart(this.days, this.counts);
        });

  }

  ngOnInit() {
    this.items = [
      {label: 'Back',routerLink: ['/bars/' + this.barName]},
      {label: 'Top Selling',routerLink: ['/topSelling/' + this.barName]},
      {label: 'Weekly Sales'},
      {label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday']},
      {label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName]}
    ]
  }

  renderChart(day: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Number of Transactions by Weekday'
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
          text: 'Number of Transactions'
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
        name: 'Number',
      }]
    });
  }

}
