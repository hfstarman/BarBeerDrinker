import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, Drinker, drinkerOrders } from '../drinkers.service';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-orders',
  templateUrl: './drinker-orders.component.html',
  styleUrls: ['./drinker-orders.component.css']
})
export class DrinkerOrdersComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;

  items: MenuItem[];

  orders: drinkerOrders[];


  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      drinkerService.getDrinker(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Drinker not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server, please check the browser console.');
          }
        }
      );

      drinkerService.getDrinkerOrders(this.drinkerName).subscribe(
        data => {
          this.orders = data;

          const item = [];
          const amount = [];

          data.forEach(drinker => {
            item.push(drinker.item);
            amount.push(drinker.amount);
          });
          this.renderChart(item, amount);
        }
      );
      
    });
  }

  ngOnInit() {
    this.items = [
      {label: 'Back', routerLink: ['/drinker']},
      {label: 'Top Orders' }

    ]
  }
  renderChart(item: string[], amount: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Orders'
      },
      xAxis: {
        categories: item,
        title: {
          text: 'Item'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Bought'
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
        data: amount,
        name: 'Amount',
      }]
    });
  }

}
 