import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, barTopSpenders } from '../bars.service';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;

  items: MenuItem[];

  topSpenders: barTopSpenders[];

  filterOptions: SelectItem[];
  
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

        barService.getTopSpenders(this.barName).subscribe(
          data => {
            this.topSpenders = data;
          }
        );
    });
  }

  ngOnInit() {
    this.items = [
      {label: 'Back',routerLink: ['/bars']},
      {label: 'Top Selling',routerLink: ['/topSelling/' + this.barName]},
      {label: 'Weekly Sales',routerLink: ['/barWeeklyFilter/' + this.barName]},
      {label: 'Daily Sales',routerLink: ['/barDailyFilter/' + this.barName + '/Sunday']}
    ]
  }



}
