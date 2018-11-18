import { Component, OnInit } from '@angular/core';
import { BarsService, Bar, barTopSelling} from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-daily-filter',
  templateUrl: './bar-daily-filter.component.html',
  styleUrls: ['./bar-daily-filter.component.css']
})
export class BarDailyFilterComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  dayName: string;

  items: MenuItem[];

  dayMonday = [];
  countsMonday = [];

  dayTuesday = [];
  countsTuesday = [];

  dayWednesday = [];
  countsWednesday = [];

  dayThursday = [];
  countsThursday = [];
  
  dayFriday = [];
  countsFriday = [];

  daySaturday = [];
  countsSaturday = [];

  daySunday = [];
  countsSunday = [];

  hour = ['00:00', '01:00', '02:00', '03:00', '04:00', '00:00', '01:00', '02:00', '03:00', '04:00', '00:00', '01:00', '02:00', '03:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']


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

      this.barService.getDailyFilter(this.barName, 'Monday').subscribe(
        data => {
          console.log(data)

          this.dayMonday = [];
          this.countsMonday = [];

          data.forEach(bar => {
            this.dayMonday.push(bar.time);
            this.countsMonday.push(bar.total);

          });
          this.renderChartMonday(this.dayMonday, this.countsMonday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Tuesday').subscribe(
        data => {
          console.log(data)

          this.dayTuesday = [];
          this.countsTuesday = [];

          data.forEach(bar => {
            this.dayTuesday.push(bar.time);
            this.countsTuesday.push(bar.total);

          });
          this.renderChartTuesday(this.dayTuesday, this.countsTuesday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Wednesday').subscribe(
        data => {
          console.log(data)

          this.dayWednesday = [];
          this.countsWednesday = [];

          data.forEach(bar => {
            this.dayWednesday.push(bar.time);
            this.countsWednesday.push(bar.total);

          });
          this.renderChartWednesday(this.dayWednesday, this.countsWednesday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Thursday').subscribe(
        data => {
          console.log(data)

          this.dayThursday = [];
          this.countsThursday = [];

          data.forEach(bar => {
            this.dayThursday.push(bar.time);
            this.countsThursday.push(bar.total);

          });
          this.renderChartThursday(this.dayThursday, this.countsThursday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Friday').subscribe(
        data => {
          console.log(data)

          this.dayFriday = [];
          this.countsFriday = [];

          data.forEach(bar => {
            this.dayFriday.push(bar.time);
            this.countsFriday.push(bar.total);

          });
          this.renderChartFriday(this.dayFriday, this.countsFriday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Saturday').subscribe(
        data => {
          console.log(data)

          this.daySaturday = [];
          this.countsSaturday = [];

          data.forEach(bar => {
            this.daySaturday.push(bar.time);
            this.countsSaturday.push(bar.total);

          });
          this.renderChartSaturday(this.daySaturday, this.countsSaturday)
        }
      );

      this.barService.getDailyFilter(this.barName, 'Sunday').subscribe(
        data => {
          console.log(data)

          this.daySunday = [];
          this.countsSunday = [];

          data.forEach(bar => {
            this.daySunday.push(bar.time);
            this.countsSunday.push(bar.total);

          });
          this.renderChartSunday(this.daySunday, this.countsSunday)
        }
      );
   }

  ngOnInit() {
    this.items = [
      {label: 'Back',routerLink: ['/bars/' + this.barName]},
      {label: 'Top Selling',routerLink: ['/topSelling/' + this.barName]},
      {label: 'Weekly Sales',routerLink: ['/barWeeklyFilter/' + this.barName]},
      {label: 'Daily Sales'},
      {label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName]}
    ]
  }

  renderChartMonday(days: string[], cMonday: number[]) {
    Highcharts.chart('Monday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Monday',
      }]
    });
  }

  renderChartTuesday(days: string[], cMonday: number[]) {
    Highcharts.chart('Tuesday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Tuesday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Tuesday',
      }]
    });
  }
  renderChartWednesday(days: string[], cMonday: number[]) {
    Highcharts.chart('Wednesday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Wednesday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Wednesday',
      }]
    });
  }
  renderChartThursday(days: string[], cMonday: number[]) {
    Highcharts.chart('Thursday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Thursday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Thursday',
      }]
    });
  }
  renderChartFriday(days: string[], cMonday: number[]) {
    Highcharts.chart('Friday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Friday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Friday',
      }]
    });
  }
  renderChartSaturday(days: string[], cMonday: number[]) {
    Highcharts.chart('Saturday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Saturday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Saturday',
      }]
    });
  }
  renderChartSunday(days: string[], cMonday: number[]) {
    Highcharts.chart('Sunday', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sunday'
      },
      xAxis: {
        categories: days,
        title: {
          text: 'Average Time Throughout the Day'
        }
      },
      yAxis: {
        title: {
          text: 'Number of transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      credits: {
        enabled: false
      },
      series: [{
        data: cMonday,
        name: 'Sunday',
      }]
    });
  }
}
