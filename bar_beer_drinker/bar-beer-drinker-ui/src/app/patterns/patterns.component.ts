import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BarsService, pattern1 } from '../bars.service'
import { ActivatedRoute } from '@angular/router';

declare const Highcharts: any;

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  pattern1Details: pattern1;

  pattern1: string;
  pattern2: string;

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    this.barService.getPattern1().subscribe(
      data => {
        const id = [];
        const total = [];

        data.forEach(bar => {
          id.push(bar.violateID);
          id.push(bar.total);
        });
        this.renderChart(id, total)
      }
    )

    if (this.barService.getPattern1() == null) {
      this.pattern2 = "false";
    }
    if (this.barService.getPattern2() == null) {
      this.pattern2 = "false";
    }


      
  }

  ngOnInit() {
  }
  renderChart(beers: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: "Pattern 1"
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'ViolationID'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Violations'
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
