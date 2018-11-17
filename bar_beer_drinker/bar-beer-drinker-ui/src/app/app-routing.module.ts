import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BarMostPopularComponent } from './bar-most-popular/bar-most-popular.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BarSearchComponent } from './bar-search/bar-search.component';
import { BeerComponent } from './beer/beer.component';
import { BarWeeklyFilterComponent } from './bar-weekly-filter/bar-weekly-filter.component';
import { BarDailyFilterComponent } from './bar-daily-filter/bar-daily-filter.component';
import { BeerTopConsumersComponent } from './beer-top-consumers/beer-top-consumers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerWeeklyFilterComponent } from './beer-weekly-filter/beer-weekly-filter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: BarComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'topSelling/:bar',
    pathMatch: 'full',
    component: BarMostPopularComponent
  },
  {
    path: 'bar-search',
    pathMatch: 'full',
    component:BarSearchComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeerComponent
  },
  {
    path: 'barWeeklyFilter/:bar',
    pathMatch: 'full',
    component: BarWeeklyFilterComponent
  },
  {
    path: 'barDailyFilter/:bar/:day',
    pathMatch: 'full',
    component: BarDailyFilterComponent
  },
  {
    path: 'topConsumers/:beer',
    pathMatch: 'full',
    component: BeerTopConsumersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'beerWeeklyFilter/:beer',
    pathMatch: 'full',
    component: BeerWeeklyFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }