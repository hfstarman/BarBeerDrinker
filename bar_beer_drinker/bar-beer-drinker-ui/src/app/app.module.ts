import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BarDetailsComponent,
    BarMostPopularComponent,
    HomepageComponent,
    BeerComponent,
    BarWeeklyFilterComponent,
    BarDailyFilterComponent,
    BeerTopConsumersComponent,
    BeerDetailsComponent,
    BeerWeeklyFilterComponent,
    DrinkerComponent,
    DrinkerDetailsComponent,
    DrinkerOrdersComponent,
    ModifyPageComponent,
    BarTopManuComponent,
    PatternsComponent,
    ModifyTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DropdownModule,
    TabMenuModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
