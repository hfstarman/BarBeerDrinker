import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BarMostPopularComponent } from './bar-most-popular/bar-most-popular.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BeerComponent } from './beer/beer.component';
import { BarWeeklyFilterComponent } from './bar-weekly-filter/bar-weekly-filter.component';
import { BarDailyFilterComponent } from './bar-daily-filter/bar-daily-filter.component';
import { BeerTopConsumersComponent } from './beer-top-consumers/beer-top-consumers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerWeeklyFilterComponent } from './beer-weekly-filter/beer-weekly-filter.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkerOrdersComponent } from './drinker-orders/drinker-orders.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { BarTopManuComponent } from './bar-top-manu/bar-top-manu.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ModifyTestComponent } from './modify-test/modify-test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'homepage',
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
    path: 'barTopManu/:bar',
    pathMatch: 'full',
    component: BarTopManuComponent
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
  },
  {
    path: 'drinker',
    pathMatch: 'full',
    component: DrinkerComponent
  },
  {
    path: 'drinker/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'drinkerOrders/:drinker',
    pathMatch: 'full',
    component: DrinkerOrdersComponent
  },
  {
    path: 'modify',
    pathMatch: 'full',
    component: ModifyPageComponent
  },
  {
    path: 'patterns',
    pathMatch: 'full',
    component: PatternsComponent
  },
  {
    path: 'modifyTest',
    pathMatch: 'full',
    component: ModifyTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
