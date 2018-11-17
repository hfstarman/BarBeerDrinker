import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DrinkerComponent } from './drinker/drinker.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BarDetailsComponent,
    BarMostPopularComponent,
    HomepageComponent,
    BarSearchComponent,
    BeerComponent,
    BarWeeklyFilterComponent,
    BarDailyFilterComponent,
    BeerTopConsumersComponent,
    BeerDetailsComponent,
    BeerWeeklyFilterComponent,
    DrinkerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DropdownModule,
    TabMenuModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
