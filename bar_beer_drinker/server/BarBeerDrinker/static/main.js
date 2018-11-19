(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/bar/bar.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _bar_most_popular_bar_most_popular_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-most-popular/bar-most-popular.component */ "./src/app/bar-most-popular/bar-most-popular.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _beer_beer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beer/beer.component */ "./src/app/beer/beer.component.ts");
/* harmony import */ var _bar_weekly_filter_bar_weekly_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-weekly-filter/bar-weekly-filter.component */ "./src/app/bar-weekly-filter/bar-weekly-filter.component.ts");
/* harmony import */ var _bar_daily_filter_bar_daily_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-daily-filter/bar-daily-filter.component */ "./src/app/bar-daily-filter/bar-daily-filter.component.ts");
/* harmony import */ var _beer_top_consumers_beer_top_consumers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beer-top-consumers/beer-top-consumers.component */ "./src/app/beer-top-consumers/beer-top-consumers.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beer_weekly_filter_beer_weekly_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-weekly-filter/beer-weekly-filter.component */ "./src/app/beer-weekly-filter/beer-weekly-filter.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinker_orders_drinker_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinker-orders/drinker-orders.component */ "./src/app/drinker-orders/drinker-orders.component.ts");
/* harmony import */ var _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modify-page/modify-page.component */ "./src/app/modify-page/modify-page.component.ts");
/* harmony import */ var _bar_top_manu_bar_top_manu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bar-top-manu/bar-top-manu.component */ "./src/app/bar-top-manu/bar-top-manu.component.ts");
/* harmony import */ var _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patterns/patterns.component */ "./src/app/patterns/patterns.component.ts");
/* harmony import */ var _modify_test_modify_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modify-test/modify-test.component */ "./src/app/modify-test/modify-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
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
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bar_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'topSelling/:bar',
        pathMatch: 'full',
        component: _bar_most_popular_bar_most_popular_component__WEBPACK_IMPORTED_MODULE_4__["BarMostPopularComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beer_beer_component__WEBPACK_IMPORTED_MODULE_6__["BeerComponent"]
    },
    {
        path: 'barWeeklyFilter/:bar',
        pathMatch: 'full',
        component: _bar_weekly_filter_bar_weekly_filter_component__WEBPACK_IMPORTED_MODULE_7__["BarWeeklyFilterComponent"]
    },
    {
        path: 'barDailyFilter/:bar/:day',
        pathMatch: 'full',
        component: _bar_daily_filter_bar_daily_filter_component__WEBPACK_IMPORTED_MODULE_8__["BarDailyFilterComponent"]
    },
    {
        path: 'topConsumers/:beer',
        pathMatch: 'full',
        component: _beer_top_consumers_beer_top_consumers_component__WEBPACK_IMPORTED_MODULE_9__["BeerTopConsumersComponent"]
    },
    {
        path: 'barTopManu/:bar',
        pathMatch: 'full',
        component: _bar_top_manu_bar_top_manu_component__WEBPACK_IMPORTED_MODULE_16__["BarTopManuComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__["BeerDetailsComponent"]
    },
    {
        path: 'beerWeeklyFilter/:beer',
        pathMatch: 'full',
        component: _beer_weekly_filter_beer_weekly_filter_component__WEBPACK_IMPORTED_MODULE_11__["BeerWeeklyFilterComponent"]
    },
    {
        path: 'drinker',
        pathMatch: 'full',
        component: _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_12__["DrinkerComponent"]
    },
    {
        path: 'drinker/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_13__["DrinkerDetailsComponent"]
    },
    {
        path: 'drinkerOrders/:drinker',
        pathMatch: 'full',
        component: _drinker_orders_drinker_orders_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerOrdersComponent"]
    },
    {
        path: 'modify',
        pathMatch: 'full',
        component: _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_15__["ModifyPageComponent"]
    },
    {
        path: 'patterns',
        pathMatch: 'full',
        component: _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_17__["PatternsComponent"]
    },
    {
        path: 'modifyTest',
        pathMatch: 'full',
        component: _modify_test_modify_test_component__WEBPACK_IMPORTED_MODULE_18__["ModifyTestComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/homepage\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/bars\">\n            Bars\n          </a>\n        </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/beers\">\n            Beers\n          </a>\n        </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/drinker\">\n          Drinkers\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/modify\">Modify</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/patterns\">Patterns</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/modifyTest\">SQL Interface</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/bar/bar.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _bar_most_popular_bar_most_popular_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bar-most-popular/bar-most-popular.component */ "./src/app/bar-most-popular/bar-most-popular.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _beer_beer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./beer/beer.component */ "./src/app/beer/beer.component.ts");
/* harmony import */ var _bar_weekly_filter_bar_weekly_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bar-weekly-filter/bar-weekly-filter.component */ "./src/app/bar-weekly-filter/bar-weekly-filter.component.ts");
/* harmony import */ var _bar_daily_filter_bar_daily_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bar-daily-filter/bar-daily-filter.component */ "./src/app/bar-daily-filter/bar-daily-filter.component.ts");
/* harmony import */ var _beer_top_consumers_beer_top_consumers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./beer-top-consumers/beer-top-consumers.component */ "./src/app/beer-top-consumers/beer-top-consumers.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beer_weekly_filter_beer_weekly_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./beer-weekly-filter/beer-weekly-filter.component */ "./src/app/beer-weekly-filter/beer-weekly-filter.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinker_orders_drinker_orders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./drinker-orders/drinker-orders.component */ "./src/app/drinker-orders/drinker-orders.component.ts");
/* harmony import */ var _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modify-page/modify-page.component */ "./src/app/modify-page/modify-page.component.ts");
/* harmony import */ var _bar_top_manu_bar_top_manu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bar-top-manu/bar-top-manu.component */ "./src/app/bar-top-manu/bar-top-manu.component.ts");
/* harmony import */ var _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./patterns/patterns.component */ "./src/app/patterns/patterns.component.ts");
/* harmony import */ var _modify_test_modify_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modify-test/modify-test.component */ "./src/app/modify-test/modify-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _bar_bar_component__WEBPACK_IMPORTED_MODULE_11__["BarComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_12__["BarDetailsComponent"],
                _bar_most_popular_bar_most_popular_component__WEBPACK_IMPORTED_MODULE_13__["BarMostPopularComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"],
                _beer_beer_component__WEBPACK_IMPORTED_MODULE_15__["BeerComponent"],
                _bar_weekly_filter_bar_weekly_filter_component__WEBPACK_IMPORTED_MODULE_16__["BarWeeklyFilterComponent"],
                _bar_daily_filter_bar_daily_filter_component__WEBPACK_IMPORTED_MODULE_17__["BarDailyFilterComponent"],
                _beer_top_consumers_beer_top_consumers_component__WEBPACK_IMPORTED_MODULE_18__["BeerTopConsumersComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_19__["BeerDetailsComponent"],
                _beer_weekly_filter_beer_weekly_filter_component__WEBPACK_IMPORTED_MODULE_20__["BeerWeeklyFilterComponent"],
                _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_21__["DrinkerComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_22__["DrinkerDetailsComponent"],
                _drinker_orders_drinker_orders_component__WEBPACK_IMPORTED_MODULE_23__["DrinkerOrdersComponent"],
                _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_24__["ModifyPageComponent"],
                _bar_top_manu_bar_top_manu_component__WEBPACK_IMPORTED_MODULE_25__["BarTopManuComponent"],
                _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_26__["PatternsComponent"],
                _modify_test_modify_test_component__WEBPACK_IMPORTED_MODULE_27__["ModifyTestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__["TabMenuModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-daily-filter/bar-daily-filter.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/bar-daily-filter/bar-daily-filter.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kYWlseS1maWx0ZXIvYmFyLWRhaWx5LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bar-daily-filter/bar-daily-filter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bar-daily-filter/bar-daily-filter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">|</span> {{\n            barDetails?.state }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"contain\">\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[3]\"></p-tabMenu>\n    </div>\n  <br>\n  <br>\n  <div id = \"Monday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Tuesday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Wednesday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Thursday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Friday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Saturday\">\n    \n  </div>\n  <br>\n  <br>\n  <div id = \"Sunday\">\n    \n  </div>\n\n  <br>\n"

/***/ }),

/***/ "./src/app/bar-daily-filter/bar-daily-filter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bar-daily-filter/bar-daily-filter.component.ts ***!
  \****************************************************************/
/*! exports provided: BarDailyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDailyFilterComponent", function() { return BarDailyFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDailyFilterComponent = /** @class */ (function () {
    function BarDailyFilterComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        this.dayMonday = [];
        this.countsMonday = [];
        this.dayTuesday = [];
        this.countsTuesday = [];
        this.dayWednesday = [];
        this.countsWednesday = [];
        this.dayThursday = [];
        this.countsThursday = [];
        this.dayFriday = [];
        this.countsFriday = [];
        this.daySaturday = [];
        this.countsSaturday = [];
        this.daySunday = [];
        this.countsSunday = [];
        this.hour = ['00:00', '01:00', '02:00', '03:00', '04:00', '00:00', '01:00', '02:00', '03:00', '04:00', '00:00', '01:00', '02:00', '03:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
        });
        this.barService.getDailyFilter(this.barName, 'Monday').subscribe(function (data) {
            console.log(data);
            _this.dayMonday = [];
            _this.countsMonday = [];
            data.forEach(function (bar) {
                _this.dayMonday.push(bar.time);
                _this.countsMonday.push(bar.total);
            });
            _this.renderChartMonday(_this.dayMonday, _this.countsMonday);
        });
        this.barService.getDailyFilter(this.barName, 'Tuesday').subscribe(function (data) {
            console.log(data);
            _this.dayTuesday = [];
            _this.countsTuesday = [];
            data.forEach(function (bar) {
                _this.dayTuesday.push(bar.time);
                _this.countsTuesday.push(bar.total);
            });
            _this.renderChartTuesday(_this.dayTuesday, _this.countsTuesday);
        });
        this.barService.getDailyFilter(this.barName, 'Wednesday').subscribe(function (data) {
            console.log(data);
            _this.dayWednesday = [];
            _this.countsWednesday = [];
            data.forEach(function (bar) {
                _this.dayWednesday.push(bar.time);
                _this.countsWednesday.push(bar.total);
            });
            _this.renderChartWednesday(_this.dayWednesday, _this.countsWednesday);
        });
        this.barService.getDailyFilter(this.barName, 'Thursday').subscribe(function (data) {
            console.log(data);
            _this.dayThursday = [];
            _this.countsThursday = [];
            data.forEach(function (bar) {
                _this.dayThursday.push(bar.time);
                _this.countsThursday.push(bar.total);
            });
            _this.renderChartThursday(_this.dayThursday, _this.countsThursday);
        });
        this.barService.getDailyFilter(this.barName, 'Friday').subscribe(function (data) {
            console.log(data);
            _this.dayFriday = [];
            _this.countsFriday = [];
            data.forEach(function (bar) {
                _this.dayFriday.push(bar.time);
                _this.countsFriday.push(bar.total);
            });
            _this.renderChartFriday(_this.dayFriday, _this.countsFriday);
        });
        this.barService.getDailyFilter(this.barName, 'Saturday').subscribe(function (data) {
            console.log(data);
            _this.daySaturday = [];
            _this.countsSaturday = [];
            data.forEach(function (bar) {
                _this.daySaturday.push(bar.time);
                _this.countsSaturday.push(bar.total);
            });
            _this.renderChartSaturday(_this.daySaturday, _this.countsSaturday);
        });
        this.barService.getDailyFilter(this.barName, 'Sunday').subscribe(function (data) {
            console.log(data);
            _this.daySunday = [];
            _this.countsSunday = [];
            data.forEach(function (bar) {
                _this.daySunday.push(bar.time);
                _this.countsSunday.push(bar.total);
            });
            _this.renderChartSunday(_this.daySunday, _this.countsSunday);
        });
    }
    BarDailyFilterComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/bars/' + this.barName] },
            { label: 'Top Selling', routerLink: ['/topSelling/' + this.barName] },
            { label: 'Weekly Sales', routerLink: ['/barWeeklyFilter/' + this.barName] },
            { label: 'Daily Sales' },
            { label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName] }
        ];
    };
    BarDailyFilterComponent.prototype.renderChartMonday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartTuesday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartWednesday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartThursday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartFriday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartSaturday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent.prototype.renderChartSunday = function (days, cMonday) {
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
    };
    BarDailyFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-daily-filter',
            template: __webpack_require__(/*! ./bar-daily-filter.component.html */ "./src/app/bar-daily-filter/bar-daily-filter.component.html"),
            styles: [__webpack_require__(/*! ./bar-daily-filter.component.css */ "./src/app/bar-daily-filter/bar-daily-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BarDailyFilterComponent);
    return BarDailyFilterComponent;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">|</span> {{\n            barDetails?.state }}\n            <br>\n        </p>\n    </div> \n</div>\n\n<div class=\"container\">\n    <div class=\"text-center\"><strong>Top 25 Spenders at {{barName}}</strong></div>\n    <br>\n    <div>\n        <p-tabMenu [model]=\"items\"></p-tabMenu>\n    </div>\n    <p-table [value]=\"topSpenders\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Name</th>\n                <th>Total Spent</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-spender>\n            <tr>\n            <a routerLink = \"/drinker/{{spender.drinker}}\">\n                <td>{{ spender.drinker }}</td>\n            </a>\n                <td>{{ spender.total | currency }}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            barService.getTopSpenders(_this.barName).subscribe(function (data) {
                _this.topSpenders = data;
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/bars'] },
            { label: 'Top Selling', routerLink: ['/topSelling/' + this.barName] },
            { label: 'Weekly Sales', routerLink: ['/barWeeklyFilter/' + this.barName] },
            { label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday'] },
            { label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName] }
        ];
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bar-most-popular/bar-most-popular.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/bar-most-popular/bar-most-popular.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1tb3N0LXBvcHVsYXIvYmFyLW1vc3QtcG9wdWxhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bar-most-popular/bar-most-popular.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bar-most-popular/bar-most-popular.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">|</span> {{\n            barDetails?.state }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"contain\">\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[1]\"></p-tabMenu>\n    </div>\n  <br>\n  <div id = \"bargraph\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bar-most-popular/bar-most-popular.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bar-most-popular/bar-most-popular.component.ts ***!
  \****************************************************************/
/*! exports provided: BarMostPopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarMostPopularComponent", function() { return BarMostPopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarMostPopularComponent = /** @class */ (function () {
    function BarMostPopularComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
        });
        this.barService.getTopSelling(this.barName).subscribe(function (data) {
            console.log(data);
            var beers = [];
            var counts = [];
            data.forEach(function (bar) {
                beers.push(bar.item);
                counts.push(bar.num);
            });
            _this.renderChart(beers, counts);
        });
    }
    BarMostPopularComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/bars/' + this.barName] },
            { label: 'Top Selling' },
            { label: 'Weekly Sales', routerLink: ['/barWeeklyFilter/' + this.barName] },
            { label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday'] },
            { label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName] },
        ];
    };
    BarMostPopularComponent.prototype.renderChart = function (beers, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Popular Beers'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers'
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
    };
    BarMostPopularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-most-popular',
            template: __webpack_require__(/*! ./bar-most-popular.component.html */ "./src/app/bar-most-popular/bar-most-popular.component.html"),
            styles: [__webpack_require__(/*! ./bar-most-popular.component.css */ "./src/app/bar-most-popular/bar-most-popular.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BarMostPopularComponent);
    return BarMostPopularComponent;
}());



/***/ }),

/***/ "./src/app/bar-top-manu/bar-top-manu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bar-top-manu/bar-top-manu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci10b3AtbWFudS9iYXItdG9wLW1hbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bar-top-manu/bar-top-manu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bar-top-manu/bar-top-manu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">|</span> {{\n            barDetails?.state }}\n            <br>\n        </p>\n    </div> \n</div>\n\n<div class=\"contain\">\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[4]\"></p-tabMenu>\n    </div>\n  <br>\n  <div id = \"bargraph\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bar-top-manu/bar-top-manu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bar-top-manu/bar-top-manu.component.ts ***!
  \********************************************************/
/*! exports provided: BarTopManuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarTopManuComponent", function() { return BarTopManuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarTopManuComponent = /** @class */ (function () {
    function BarTopManuComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
        });
        this.barService.getBarTopManu(this.barName).subscribe(function (data) {
            var manufacture = [];
            var total = [];
            data.forEach(function (bar) {
                manufacture.push(bar.manufacture);
                total.push(bar.total);
            });
            _this.renderChart(manufacture, total);
        });
    }
    BarTopManuComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/bars/' + this.barName] },
            { label: 'Top Selling' },
            { label: 'Weekly Sales', routerLink: ['/barWeeklyFilter/' + this.barName] },
            { label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday'] },
            { label: 'Top Manufacture' }
        ];
    };
    BarTopManuComponent.prototype.renderChart = function (beers, counts) {
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
    };
    BarTopManuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-top-manu',
            template: __webpack_require__(/*! ./bar-top-manu.component.html */ "./src/app/bar-top-manu/bar-top-manu.component.html"),
            styles: [__webpack_require__(/*! ./bar-top-manu.component.css */ "./src/app/bar-top-manu/bar-top-manu.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BarTopManuComponent);
    return BarTopManuComponent;
}());



/***/ }),

/***/ "./src/app/bar-weekly-filter/bar-weekly-filter.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bar-weekly-filter/bar-weekly-filter.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci13ZWVrbHktZmlsdGVyL2Jhci13ZWVrbHktZmlsdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-weekly-filter/bar-weekly-filter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bar-weekly-filter/bar-weekly-filter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">|</span> {{\n            barDetails?.state }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"contain\">\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[2]\"></p-tabMenu>\n    </div>\n  <br>\n  <div id = \"bargraph\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bar-weekly-filter/bar-weekly-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bar-weekly-filter/bar-weekly-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: BarWeeklyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarWeeklyFilterComponent", function() { return BarWeeklyFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarWeeklyFilterComponent = /** @class */ (function () {
    function BarWeeklyFilterComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
        });
        this.barService.getWeeklyFilter(this.barName).subscribe(function (data) {
            console.log(data);
            _this.days = [];
            _this.counts = [];
            data.forEach(function (bar) {
                _this.days.push(bar.day);
                _this.counts.push(bar.numBills);
            });
            _this.renderChart(_this.days, _this.counts);
        });
    }
    BarWeeklyFilterComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/bars/' + this.barName] },
            { label: 'Top Selling', routerLink: ['/topSelling/' + this.barName] },
            { label: 'Weekly Sales' },
            { label: 'Daily Sales', routerLink: ['/barDailyFilter/' + this.barName + '/Sunday'] },
            { label: 'Top Manufacture', routerLink: ['/barTopManu/' + this.barName] }
        ];
    };
    BarWeeklyFilterComponent.prototype.renderChart = function (day, counts) {
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
    };
    BarWeeklyFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-weekly-filter',
            template: __webpack_require__(/*! ./bar-weekly-filter.component.html */ "./src/app/bar-weekly-filter/bar-weekly-filter.component.html"),
            styles: [__webpack_require__(/*! ./bar-weekly-filter.component.css */ "./src/app/bar-weekly-filter/bar-weekly-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BarWeeklyFilterComponent);
    return BarWeeklyFilterComponent;
}());



/***/ }),

/***/ "./src/app/bar/bar.component.css":
/*!***************************************!*\
  !*** ./src/app/bar/bar.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mySearch {\r\n    width: 100%;\r\n    font-size: 18px;\r\n    padding: 11px;\r\n    border: 1px solid #ddd;\r\n  }\r\n  \r\n  /* Style the navigation menu */\r\n  \r\n  #myMenu {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  /* Style the navigation links */\r\n  \r\n  #myMenu li a {\r\n    background-color: #f6f6f6;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    color: black;\r\n    display: block\r\n  }\r\n  \r\n  #myMenu li a:hover {\r\n    background-color: #eee;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyL2Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0dBQ3hCOztFQUVELCtCQUErQjs7RUFDL0I7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7R0FDWDs7RUFFRCxnQ0FBZ0M7O0VBQ2hDO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSx1QkFBdUI7R0FDeEIiLCJmaWxlIjoic3JjL2FwcC9iYXIvYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlTZWFyY2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIG5hdmlnYXRpb24gbWVudSAqL1xyXG4gICNteU1lbnUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIG5hdmlnYXRpb24gbGlua3MgKi9cclxuICAjbXlNZW51IGxpIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gIH1cclxuICBcclxuICAjbXlNZW51IGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/bar/bar.component.html":
/*!****************************************!*\
  !*** ./src/app/bar/bar.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Bar Page!</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"bars\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Address</th>\n        <th>State</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <a routerLink=\"/bars/{{ bar.name }}\">\n          <td>{{ bar.name }}</td>\n        </a>\n        <td>{{ bar.address }}</td>\n        <td>{{ bar.state }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/bar/bar.component.ts":
/*!**************************************!*\
  !*** ./src/app/bar/bar.component.ts ***!
  \**************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = /** @class */ (function () {
    function BarComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    BarComponent.prototype.ngOnInit = function () {
    };
    BarComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(/*! ./bar.component.html */ "./src/app/bar/bar.component.html"),
            styles: [__webpack_require__(/*! ./bar.component.css */ "./src/app/bar/bar.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getPattern1 = function () {
        return this.http.get('/api/patterns/pattern1');
    };
    BarsService.prototype.getPattern2 = function () {
        return this.http.get('/api/patterns/pattern2');
    };
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getBarTopManu = function (bar) {
        return this.http.get('/api/barTopManu/' + bar);
    };
    BarsService.prototype.getTopSpenders = function (bar) {
        return this.http.get('/api/topSpenders/' + bar);
    };
    BarsService.prototype.getTopSelling = function (bar) {
        return this.http.get('/api/topSelling/' + bar);
    };
    BarsService.prototype.getWeeklyFilter = function (bar) {
        return this.http.get('/api/barWeeklyFilter/' + bar);
    };
    BarsService.prototype.getDailyFilter = function (bar, day) {
        return this.http.get('/api/barDailyFilter/' + bar + '/' + day);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ beerName }}</h1>\n        <p class=\"beer-details\" *ngIf=\"beerDetails\">\n            {{ beerDetails?.manufacture }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"text-center\"><strong>Top 10 Bars Selling {{beerName}}</strong></div>\n    <br>\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"></p-tabMenu>\n    </div>\n    <p-table [value]=\"topSelling\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Total Sold</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-seller>\n            <tr>\n            <a routerLink = \"/bars/{{seller.barname}}\">\n                <td>{{ seller.barname }}</td>\n            </a>\n                <td>{{ seller.numBeer }}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            beerService.getTopSellingBeer(_this.beerName).subscribe(function (data) {
                _this.topSelling = data;
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/beers'] },
            { label: 'Weekly Filter', routerLink: ['/beerWeeklyFilter/' + this.beerName] },
            { label: 'Top Consumers', routerLink: ['/topConsumers/' + this.beerName] }
        ];
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beer-top-consumers/beer-top-consumers.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/beer-top-consumers/beer-top-consumers.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItdG9wLWNvbnN1bWVycy9iZWVyLXRvcC1jb25zdW1lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-top-consumers/beer-top-consumers.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/beer-top-consumers/beer-top-consumers.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ beerName }}</h1>\n        <p class=\"beer-details\" *ngIf=\"beerDetails\">\n            {{ beerDetails?.manufacture }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"text-center\"><strong>Top 10 Consumers of {{ beerName }}</strong></div>\n    <br>\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem] = \"items[2]\"></p-tabMenu>\n    </div>\n    <p-table [value]=\"topConsumers\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Drinker</th>\n                <th>Total</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-consumer>\n            <tr>\n            <a routerLink = \"/drinker/{{  consumer.drinker  }}\">\n                <td>{{ consumer.drinker }}</td>\n            </a>\n                <td>{{ consumer.numBeer }}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/beer-top-consumers/beer-top-consumers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/beer-top-consumers/beer-top-consumers.component.ts ***!
  \********************************************************************/
/*! exports provided: BeerTopConsumersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerTopConsumersComponent", function() { return BeerTopConsumersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerTopConsumersComponent = /** @class */ (function () {
    function BeerTopConsumersComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            beerService.getTopConsumers(_this.beerName).subscribe(function (data) {
                _this.topConsumers = data;
            });
        });
    }
    BeerTopConsumersComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/beers'] },
            { label: 'Weekly Filter', routerLink: ['/beerWeeklyFilter/' + this.beerName] },
            { label: 'Top Consumers' }
        ];
    };
    BeerTopConsumersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-top-consumers',
            template: __webpack_require__(/*! ./beer-top-consumers.component.html */ "./src/app/beer-top-consumers/beer-top-consumers.component.html"),
            styles: [__webpack_require__(/*! ./beer-top-consumers.component.css */ "./src/app/beer-top-consumers/beer-top-consumers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerTopConsumersComponent);
    return BeerTopConsumersComponent;
}());



/***/ }),

/***/ "./src/app/beer-weekly-filter/beer-weekly-filter.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/beer-weekly-filter/beer-weekly-filter.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItd2Vla2x5LWZpbHRlci9iZWVyLXdlZWtseS1maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-weekly-filter/beer-weekly-filter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/beer-weekly-filter/beer-weekly-filter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ beerName }}</h1>\n        <p class=\"beer-details\" *ngIf=\"beerDetails\">\n            {{ beerDetails?.manufacture }}\n            <br>\n        </p>\n    </div>\n</div>\n\n<div class=\"contain\">\n    <div>\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[1]\"></p-tabMenu>\n    </div>\n  <br>\n  <div id = \"bargraph\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/beer-weekly-filter/beer-weekly-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/beer-weekly-filter/beer-weekly-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: BeerWeeklyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerWeeklyFilterComponent", function() { return BeerWeeklyFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerWeeklyFilterComponent = /** @class */ (function () {
    function BeerWeeklyFilterComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            _this.beerService.getBeerWeeklyFilter(_this.beerName).subscribe(function (data) {
                console.log(data);
                _this.days = [];
                _this.counts = [];
                data.forEach(function (bar) {
                    _this.days.push(bar.day);
                    _this.counts.push(bar.total);
                });
                _this.renderChart(_this.days, _this.counts);
            });
        });
    }
    BeerWeeklyFilterComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/beers'] },
            { label: 'Weekly Filter' },
            { label: 'Top Consumers', routerLink: ['/topConsumers/' + this.beerName] }
        ];
    };
    BeerWeeklyFilterComponent.prototype.renderChart = function (day, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Number of Beers Bought by Weekday'
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
                    text: 'Number Bought'
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
                    name: 'total',
                }]
        });
    };
    BeerWeeklyFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-weekly-filter',
            template: __webpack_require__(/*! ./beer-weekly-filter.component.html */ "./src/app/beer-weekly-filter/beer-weekly-filter.component.html"),
            styles: [__webpack_require__(/*! ./beer-weekly-filter.component.css */ "./src/app/beer-weekly-filter/beer-weekly-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerWeeklyFilterComponent);
    return BeerWeeklyFilterComponent;
}());



/***/ }),

/***/ "./src/app/beer/beer.component.css":
/*!*****************************************!*\
  !*** ./src/app/beer/beer.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXIvYmVlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/beer/beer.component.html":
/*!******************************************!*\
  !*** ./src/app/beer/beer.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Welcome to the Beer Page!</h1>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <p-table [value]=\"beers\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Beer</th>\n          <th>Manufacture</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-beer>\n        <tr>\n          <a routerLink=\"/beers/{{ beer.name }}\">\n            <td>{{ beer.name }}</td>\n          </a>\n          <td>{{ beer.manufacture }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  \n  <br><br>"

/***/ }),

/***/ "./src/app/beer/beer.component.ts":
/*!****************************************!*\
  !*** ./src/app/beer/beer.component.ts ***!
  \****************************************/
/*! exports provided: BeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerComponent", function() { return BeerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerComponent = /** @class */ (function () {
    function BeerComponent(beerService) {
        this.beerService = beerService;
        this.getBeers();
    }
    BeerComponent.prototype.ngOnInit = function () {
    };
    BeerComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BeerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer',
            template: __webpack_require__(/*! ./beer.component.html */ "./src/app/beer/beer.component.html"),
            styles: [__webpack_require__(/*! ./beer.component.css */ "./src/app/beer/beer.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeerComponent);
    return BeerComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBeer = function (beer) {
        return this.http.get('/api/beer/' + beer);
    };
    BeersService.prototype.getTopConsumers = function (beer) {
        return this.http.get('/api/topConsumers/' + beer);
    };
    BeersService.prototype.getTopSellingBeer = function (beer) {
        return this.http.get('/api/topSellingBeer/' + beer);
    };
    BeersService.prototype.getBeerWeeklyFilter = function (beer) {
        return this.http.get('/api/beerWeeklyFilter/' + beer);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ drinkerName }}</h1>\n        <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n            {{ drinkerDetails?.address }} <span *ngIf=\"drinkerDetails.address && drinkerDetails.state\">|</span> {{\n            drinkerDetails?.state }}\n            <br>\n            {{ drinkerDetails.email }}\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"text-center\"><strong>Transactions of {{drinkerName}}</strong></div>\n    <br>\n    <div>\n        <p-tabMenu [model]=\"items\"></p-tabMenu>\n    </div>\n    <p-table [value]=\"transactions\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Item</th>\n                <th>Time</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-drinker>\n            <tr>\n              <a routerLink = \"/bars/{{drinker.barname}}\">\n                <td>{{ drinker.barname }}</td>\n              </a>\n                <td>{{ drinker.item }}</td>\n                <td>{{ drinker.time }}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            drinkerService.getDrinkerTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transactions = data;
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/drinker'] },
            { label: 'Top Orders', routerLink: ['/drinkerOrders/' + this.drinkerName] }
        ];
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinker-orders/drinker-orders.component.css":
/*!*************************************************************!*\
  !*** ./src/app/drinker-orders/drinker-orders.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItb3JkZXJzL2RyaW5rZXItb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinker-orders/drinker-orders.component.html":
/*!**************************************************************!*\
  !*** ./src/app/drinker-orders/drinker-orders.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ drinkerName }}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n      {{ drinkerDetails?.address }} <span *ngIf=\"drinkerDetails.address && drinkerDetails.state\">|</span> {{\n      drinkerDetails?.state }}\n      <br>\n      {{ drinkerDetails.email }}\n    </p>\n  </div>\n</div>\n\n<div class=\"contain\">\n  <div>\n    <p-tabMenu [model]=\"items\" [activeItem]=\"items[1]\"></p-tabMenu>\n  </div>\n  <br>\n  <div id=\"bargraph\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/drinker-orders/drinker-orders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drinker-orders/drinker-orders.component.ts ***!
  \************************************************************/
/*! exports provided: DrinkerOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerOrdersComponent", function() { return DrinkerOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerOrdersComponent = /** @class */ (function () {
    function DrinkerOrdersComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server, please check the browser console.');
                }
            });
            drinkerService.getDrinkerOrders(_this.drinkerName).subscribe(function (data) {
                _this.orders = data;
                var item = [];
                var amount = [];
                data.forEach(function (drinker) {
                    item.push(drinker.item);
                    amount.push(drinker.amount);
                });
                _this.renderChart(item, amount);
            });
        });
    }
    DrinkerOrdersComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Back', routerLink: ['/drinker'] },
            { label: 'Top Orders' }
        ];
    };
    DrinkerOrdersComponent.prototype.renderChart = function (item, amount) {
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
    };
    DrinkerOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-orders',
            template: __webpack_require__(/*! ./drinker-orders.component.html */ "./src/app/drinker-orders/drinker-orders.component.html"),
            styles: [__webpack_require__(/*! ./drinker-orders.component.css */ "./src/app/drinker-orders/drinker-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerOrdersComponent);
    return DrinkerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/drinker/drinker.component.css":
/*!***********************************************!*\
  !*** ./src/app/drinker/drinker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXIvZHJpbmtlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/drinker/drinker.component.html":
/*!************************************************!*\
  !*** ./src/app/drinker/drinker.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Drinker Page!</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"drinkers\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Address</th>\n          <th>State</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-drinker>\n        <tr>\n          <a routerLink=\"/drinker/{{ drinker.name }}\">\n            <td>{{ drinker.name }}</td>\n          </a>\n          <td>{{ drinker.email }}</td>\n          <td>{{ drinker.address }}</td>\n          <td>{{ drinker.state }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n"

/***/ }),

/***/ "./src/app/drinker/drinker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drinker/drinker.component.ts ***!
  \**********************************************/
/*! exports provided: DrinkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerComponent", function() { return DrinkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerComponent = /** @class */ (function () {
    function DrinkerComponent(drinkerService) {
        this.drinkerService = drinkerService;
        this.getDrinkers();
    }
    DrinkerComponent.prototype.ngOnInit = function () {
    };
    DrinkerComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of drinkers');
        });
    };
    DrinkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker',
            template: __webpack_require__(/*! ./drinker.component.html */ "./src/app/drinker/drinker.component.html"),
            styles: [__webpack_require__(/*! ./drinker.component.css */ "./src/app/drinker/drinker.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkerComponent);
    return DrinkerComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (drinker) {
        return this.http.get('/api/drinker/' + drinker);
    };
    DrinkersService.prototype.getDrinkerTransactions = function (drinker) {
        return this.http.get('/api/drinkerTransactions/' + drinker);
    };
    DrinkersService.prototype.getDrinkerOrders = function (drinker) {
        return this.http.get('/api/drinkerOrders/' + drinker);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#myInput {\r\n  background-image: url('/static/css/searchicon.png');\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  padding: 12px 20px 12px 40px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n#myTable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n  font-size: 18px;\r\n}\r\n\r\n#myTable th, #myTable td {\r\n  text-align: left;\r\n  padding: 12px;\r\n}\r\n\r\n#myTable tr {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n#myTable tr.header, #myTable tr:hover {\r\n  background-color: #f1f1f1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxvREFBNkM7RUFDN0MsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI215SW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Nzcy9zZWFyY2hpY29uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuI215VGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4jbXlUYWJsZSB0ciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Bar Beer Drinker!</h1>\n    <p class=\"lead\">Please enjoy!</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/modify-page/modify-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS1wYWdlL21vZGlmeS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modify-page/modify-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Modify Page!</h1>\n    <p class=\"lead\">Please be careful with inputs!</p>\n  </div>\n</div>\n\n\n<div class=\"container\">\n    <h3>Insert</h3>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Items</span>\n    </div>\n    <input type=\"text\" placeholder=\"Item\" (keyup)=\"itemInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Manufacture\" (keyup)=\"manufactureInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Type (Beer, Food)\" (keyup)=\"typeInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postItems()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Bars</span>\n    </div>\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"barNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Address\" (keyup)=\"barAddressInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar State\" (keyup)=\"barStateInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postBars()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Drinkers</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Name\" (keyup)=\"drinkerNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"drinkerEmailInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker Address\" (keyup)=\"drinkerAddressInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker State\" (keyup)=\"drinkerStateInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postDrinkers()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Frequents</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Name\" (keyup)=\"frequentsDrinkerInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"frequentsEmailInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"frequentsBarnameInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postFrequents()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into isOpen</span>\n    </div>\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"isOpenNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Address\" (keyup)=\"isOpenAddressInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Day\" (keyup)=\"isOpenDayInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Open Hour (00:00:00)\" (keyup)=\"isOpenOpenInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Close Hour (00:00:00)\" (keyup)=\"isOpenCloseInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postisOpen()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Likes</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Name\" (keyup)=\"likesNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"likesEmailInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Beer Name\" (keyup)=\"likesBeerInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postLikes()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Sells</span>\n    </div>\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"sellsBarnameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Item\" (keyup)=\"sellsItemInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Price\" (keyup)=\"sellsPriceInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Address\" (keyup)=\"sellsAddressInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postSells()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Transactions</span>\n    </div>\n    <input type=\"text\" placeholder=\"TransactionID (Number)\" (keyup)=\"transTransactionIDInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Total\" (keyup)=\"transTotalInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Tip\" (keyup)=\"transTipInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Time (DateTime Format)\" (keyup)=\"transTimeInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Day\" (keyup)=\"transDayInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Drinker\" (keyup)=\"transDrinkerInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Email\" (keyup)=\"transEmailInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postTransactions()\">Submit Insertion</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Insert into Bills</span>\n    </div>\n    <input type=\"text\" placeholder=\"Transaction ID (Number)\" (keyup)=\"billTransactionIDInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Item\" (keyup)=\"billItemlInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Barname\" (keyup)=\"billBarnameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"UniqueID (Num > 46k)\" (keyup)=\"billUniqueIDInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postBills()\">Submit Insertion</button>\n  </div>\n</div>\n\n<br><br><br>\n<div class=\"container\">\n  <h3>Delete</h3>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Items</span>\n    </div>\n    <input type=\"text\" placeholder=\"Item Name\" (keyup)=\"itemInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteItems()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Bars</span>\n    </div>\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"barNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Address\" (keyup)=\"barAddressInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteBars()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Drinkers</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"drinkerEmailInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteDrinkers()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Frequents</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"frequentsEmailInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"frequentsBarnameInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteFrequents()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from isOpen</span>\n    </div>\n    <input type=\"text\" placeholder=\"Bar Name\" (keyup)=\"isOpenNameInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Bar Address\" (keyup)=\"isOpenAddressInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Day\" (keyup)=\"isOpenDayInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteisOpen()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Likes</span>\n    </div>\n    <input type=\"text\" placeholder=\"Drinker Email\" (keyup)=\"likesEmailInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Beer Name\" (keyup)=\"likesBeerInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteLikes()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Sells</span>\n    </div>\n    <input type=\"text\" placeholder=\"Item\" (keyup)=\"sellsItemInsert($event)\" class=\"form-control\">\n    <input type=\"text\" placeholder=\"Address\" (keyup)=\"sellsAddressInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSells()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Transactions</span>\n    </div>\n    <input type=\"text\" placeholder=\"TransactionID (Number)\" (keyup)=\"transTransactionIDInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteTransactions()\">Delete</button>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Delete from Bills</span>\n    </div>\n    <input type=\"text\" placeholder=\"UniqueID (Number)\" (keyup)=\"billUniqueIDInsert($event)\" class=\"form-control\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteBills()\">Delete</button>\n  </div>\n</div>\n<br><br><br>\n\n\n\n\n\n\n\n\n<br><br>"

/***/ }),

/***/ "./src/app/modify-page/modify-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPageComponent", function() { return ModifyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modify.service */ "./src/app/modify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyPageComponent = /** @class */ (function () {
    function ModifyPageComponent(modifyService, route) {
        this.modifyService = modifyService;
        this.route = route;
        //items
        this.nameItems = '';
        this.manufacture = '';
        this.type = '';
        //bars
        this.barName = '';
        this.barAddress = '';
        this.barState = '';
        //drinkers
        this.drinkerName = '';
        this.drinkerEmail = '';
        this.drinkerAddress = '';
        this.drinkerState = '';
        //frequents
        this.frequentsDrinker = '';
        this.frequentsEmail = '';
        this.frequentsBarname = '';
        //isOpen
        this.isOpenName = '';
        this.isOpenAddress = '';
        this.isOpenDay = '';
        this.isOpenOpen = '';
        this.isOpenClose = '';
        //likes
        this.likesName = '';
        this.likesEmail = '';
        this.likesBeer = '';
        //Sells
        this.sellsBarname = '';
        this.sellsItem = '';
        this.sellsPrice = 0;
        this.sellsAddress = '';
        //Transactions
        this.transTransactionID = 0;
        this.transTotal = 0;
        this.transTip = 0;
        this.transDay = '';
        this.transDrinker = '';
        this.transEmail = '';
        //Bills
        this.billTransactionID = 0;
        this.billItem = '';
        this.billBarname = '';
        this.billUniqueID = '';
    }
    ModifyPageComponent.prototype.ngOnInit = function () {
    };
    //Items Insert
    ModifyPageComponent.prototype.itemInsert = function (event) {
        this.nameItems = event.target.value;
    };
    ModifyPageComponent.prototype.manufactureInsert = function (event) {
        this.manufacture = event.target.value;
    };
    ModifyPageComponent.prototype.typeInsert = function (event) {
        this.type = event.target.value;
    };
    //Bars Insert
    ModifyPageComponent.prototype.barNameInsert = function (event) {
        this.barName = event.target.value;
    };
    ModifyPageComponent.prototype.barAddressInsert = function (event) {
        this.barAddress = event.target.value;
    };
    ModifyPageComponent.prototype.barStateInsert = function (event) {
        this.barState = event.target.value;
    };
    //Drinkers Insert
    ModifyPageComponent.prototype.drinkerNameInsert = function (event) {
        this.drinkerName = event.target.value;
    };
    ModifyPageComponent.prototype.drinkerEmailInsert = function (event) {
        this.drinkerEmail = event.target.value;
    };
    ModifyPageComponent.prototype.drinkerAddressInsert = function (event) {
        this.drinkerAddress = event.target.value;
    };
    ModifyPageComponent.prototype.drinkerStateInsert = function (event) {
        this.drinkerState = event.target.value;
    };
    //Frequents Insert
    ModifyPageComponent.prototype.frequentsDrinkerInsert = function (event) {
        this.frequentsDrinker = event.target.value;
    };
    ModifyPageComponent.prototype.frequentsEmailInsert = function (event) {
        this.frequentsEmail = event.target.value;
    };
    ModifyPageComponent.prototype.frequentsBarnameInsert = function (event) {
        this.frequentsBarname = event.target.value;
    };
    //isOpen Insert
    ModifyPageComponent.prototype.isOpenNameInsert = function (event) {
        this.isOpenName = event.target.value;
    };
    ModifyPageComponent.prototype.isOpenAddressInsert = function (event) {
        this.isOpenAddress = event.target.value;
    };
    ModifyPageComponent.prototype.isOpenDayInsert = function (event) {
        this.isOpenDay = event.target.value;
    };
    ModifyPageComponent.prototype.isOpenOpenInsert = function (event) {
        this.isOpenOpen = event.target.value;
    };
    ModifyPageComponent.prototype.isOpenCloseInsert = function (event) {
        this.isOpenClose = event.target.value;
    };
    //likes Insert
    ModifyPageComponent.prototype.likesNameInsert = function (event) {
        this.likesName = event.target.value;
    };
    ModifyPageComponent.prototype.likesEmailInsert = function (event) {
        this.likesEmail = event.target.value;
    };
    ModifyPageComponent.prototype.likesBeerInsert = function (event) {
        this.likesBeer = event.target.value;
    };
    //Sells Insert
    ModifyPageComponent.prototype.sellsBarnameInsert = function (event) {
        this.sellsBarname = event.target.value;
    };
    ModifyPageComponent.prototype.sellsItemInsert = function (event) {
        this.sellsItem = event.target.value;
    };
    ModifyPageComponent.prototype.sellsPriceInsert = function (event) {
        this.sellsPrice = event.target.value;
    };
    ModifyPageComponent.prototype.sellsAddressInsert = function (event) {
        this.sellsAddress = event.target.value;
    };
    //Transaction Insert
    ModifyPageComponent.prototype.transTransactionIDInsert = function (event) {
        this.transTransactionID = event.target.value;
    };
    ModifyPageComponent.prototype.transTotalInsert = function (event) {
        this.transTotal = event.target.value;
    };
    ModifyPageComponent.prototype.transTipInsert = function (event) {
        this.transTip = event.target.value;
    };
    ModifyPageComponent.prototype.transTimeInsert = function (event) {
        this.transTime = event.target.value;
    };
    ModifyPageComponent.prototype.transDayInsert = function (event) {
        this.transDay = event.target.value;
    };
    ModifyPageComponent.prototype.transDrinkerInsert = function (event) {
        this.transDrinker = event.target.value;
    };
    ModifyPageComponent.prototype.transEmailInsert = function (event) {
        this.transEmail = event.target.value;
    };
    //Bills Insert
    ModifyPageComponent.prototype.billTransactionIDInsert = function (event) {
        this.billTransactionID = event.target.value;
    };
    ModifyPageComponent.prototype.billItemlInsert = function (event) {
        this.billItem = event.target.value;
    };
    ModifyPageComponent.prototype.billBarnameInsert = function (event) {
        this.billBarname = event.target.value;
    };
    ModifyPageComponent.prototype.billUniqueIDInsert = function (event) {
        this.billUniqueID = event.target.value;
    };
    ModifyPageComponent.prototype.postItems = function () {
        this.modifyService.postInputItems(this.nameItems, this.manufacture, this.type).subscribe();
    };
    ModifyPageComponent.prototype.postBars = function () {
        this.modifyService.postInputBars(this.barName, this.barAddress, this.barState).subscribe();
    };
    ModifyPageComponent.prototype.postDrinkers = function () {
        this.modifyService.postInputDrinkers(this.drinkerName, this.drinkerEmail, this.drinkerAddress, this.drinkerState).subscribe();
    };
    ModifyPageComponent.prototype.postFrequents = function () {
        this.modifyService.postInputFrequents(this.frequentsDrinker, this.frequentsEmail, this.frequentsBarname).subscribe();
    };
    ModifyPageComponent.prototype.postisOpen = function () {
        this.modifyService.postInputisOpen(this.isOpenName, this.isOpenAddress, this.isOpenDay, this.isOpenOpen, this.isOpenClose).subscribe();
    };
    ModifyPageComponent.prototype.postLikes = function () {
        this.modifyService.postInputLikes(this.likesName, this.likesEmail, this.likesBeer).subscribe();
    };
    ModifyPageComponent.prototype.postSells = function () {
        this.modifyService.postInputSells(this.sellsBarname, this.sellsItem, this.sellsPrice, this.sellsAddress).subscribe();
    };
    ModifyPageComponent.prototype.postTransactions = function () {
        this.modifyService.postInputTransactions(this.transTransactionID, this.transTotal, this.transTip, this.transTime, this.transDay, this.transDrinker, this.transEmail).subscribe();
    };
    ModifyPageComponent.prototype.postBills = function () {
        this.modifyService.postInputBills(this.billTransactionID, this.billItem, this.billBarname, this.billUniqueID).subscribe();
    };
    ModifyPageComponent.prototype.deleteItems = function () {
        this.modifyService.deleteInputItems(this.nameItems).subscribe();
    };
    ModifyPageComponent.prototype.deleteBars = function () {
        this.modifyService.deleteInputBars(this.barName, this.barAddress).subscribe();
    };
    ModifyPageComponent.prototype.deleteDrinkers = function () {
        this.modifyService.deleteInputDrinkers(this.drinkerEmail).subscribe();
    };
    ModifyPageComponent.prototype.deleteFrequents = function () {
        this.modifyService.deleteFrequents(this.frequentsEmail, this.frequentsBarname).subscribe();
    };
    ModifyPageComponent.prototype.deleteisOpen = function () {
        this.modifyService.deleteInputisOpen(this.isOpenName, this.isOpenAddress, this.isOpenDay).subscribe();
    };
    ModifyPageComponent.prototype.deleteLikes = function () {
        this.modifyService.deleteInputLikes(this.likesEmail, this.likesBeer).subscribe();
    };
    ModifyPageComponent.prototype.deleteSells = function () {
        this.modifyService.deleteInputSells(this.sellsItem, this.sellsAddress).subscribe();
    };
    ModifyPageComponent.prototype.deleteTransactions = function () {
        this.modifyService.deleteInputTransactions(this.transTransactionID).subscribe();
    };
    ModifyPageComponent.prototype.deleteBills = function () {
        this.modifyService.deleteInputBills(this.billUniqueID).subscribe();
    };
    ModifyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-page',
            template: __webpack_require__(/*! ./modify-page.component.html */ "./src/app/modify-page/modify-page.component.html"),
            styles: [__webpack_require__(/*! ./modify-page.component.css */ "./src/app/modify-page/modify-page.component.css")]
        }),
        __metadata("design:paramtypes", [_modify_service__WEBPACK_IMPORTED_MODULE_2__["ModifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModifyPageComponent);
    return ModifyPageComponent;
}());



/***/ }),

/***/ "./src/app/modify-test.service.ts":
/*!****************************************!*\
  !*** ./src/app/modify-test.service.ts ***!
  \****************************************/
/*! exports provided: ModifyTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyTestService", function() { return ModifyTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyTestService = /** @class */ (function () {
    function ModifyTestService(http) {
        this.http = http;
    }
    ModifyTestService.prototype.postQuery = function (query) {
        return this.http.post('/api/modifyTest', { sqlQuery: query });
    };
    ModifyTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModifyTestService);
    return ModifyTestService;
}());



/***/ }),

/***/ "./src/app/modify-test/modify-test.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modify-test/modify-test.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS10ZXN0L21vZGlmeS10ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modify-test/modify-test.component.html":
/*!********************************************************!*\
  !*** ./src/app/modify-test/modify-test.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">SQL Query Interface</h1>\n      <p>Please do not destory our database! :)</p>\n      <br>\n      <p>This is also used for UPDATE commands.</p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Write Query Here:</span>\n      </div>\n      <input type=\"text\" (keyup)=\"queryInput($event)\" class=\"form-control\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"postsqlQuery()\">Submit Query</button>\n    </div>\n  </div>\n\n<div class=\"container\">\n    <p-table [value]=\"returnedQuery\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n            <th *ngFor=\"let col of keyValues\">{{ col }}</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-element>\n        <tr>\n          <td *ngFor=\"let col of keyValues\">{{ element[col] }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n \n    <br><br>"

/***/ }),

/***/ "./src/app/modify-test/modify-test.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-test/modify-test.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyTestComponent", function() { return ModifyTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modify_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modify-test.service */ "./src/app/modify-test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyTestComponent = /** @class */ (function () {
    function ModifyTestComponent(ModifyTestService) {
        this.ModifyTestService = ModifyTestService;
        this.queryStr = '';
    }
    ModifyTestComponent.prototype.ngOnInit = function () {
    };
    ModifyTestComponent.prototype.queryInput = function (event) {
        this.queryStr = event.target.value;
    };
    ModifyTestComponent.prototype.postsqlQuery = function () {
        var _this = this;
        this.ModifyTestService.postQuery(this.queryStr).subscribe(function (data) {
            _this.returnedQuery = data;
            _this.keyValues = Object.keys(_this.returnedQuery['0']);
            console.log(_this.keyValues);
        }, function (error) {
            alert('No Table Returned, Check Syntax!');
        });
    };
    ModifyTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-test',
            template: __webpack_require__(/*! ./modify-test.component.html */ "./src/app/modify-test/modify-test.component.html"),
            styles: [__webpack_require__(/*! ./modify-test.component.css */ "./src/app/modify-test/modify-test.component.css")]
        }),
        __metadata("design:paramtypes", [_modify_test_service__WEBPACK_IMPORTED_MODULE_1__["ModifyTestService"]])
    ], ModifyTestComponent);
    return ModifyTestComponent;
}());



/***/ }),

/***/ "./src/app/modify.service.ts":
/*!***********************************!*\
  !*** ./src/app/modify.service.ts ***!
  \***********************************/
/*! exports provided: ModifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyService", function() { return ModifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyService = /** @class */ (function () {
    function ModifyService(http) {
        this.http = http;
    }
    ModifyService.prototype.postInputItems = function (name, manufacture, type) {
        return this.http.post('/api/modify', { name: name, manufacture: manufacture, type: type });
    };
    ModifyService.prototype.postInputBars = function (name, address, state) {
        return this.http.post('/api/modify/insertBars', { name: name, address: address, state: state });
    };
    ModifyService.prototype.postInputDrinkers = function (name, email, address, state) {
        return this.http.post('/api/modify/insertDrinkers', { name: name, email: email, address: address, state: state });
    };
    ModifyService.prototype.postInputFrequents = function (drinker, email, barname) {
        return this.http.post('/api/modify/insertFrequents', { drinker: drinker, email: email, barname: barname });
    };
    ModifyService.prototype.postInputisOpen = function (name, address, day, open, close) {
        return this.http.post('/api/modify/insertisOpen', { name: name, address: address, day: day, open: open, close: close });
    };
    ModifyService.prototype.postInputLikes = function (name, email, beer) {
        return this.http.post('/api/modify/insertLikes', { name: name, email: email, beer: beer });
    };
    ModifyService.prototype.postInputSells = function (barname, item, price, address) {
        return this.http.post('/api/modify/insertSells', { barname: barname, item: item, price: price, address: address });
    };
    ModifyService.prototype.postInputTransactions = function (transactionID, total, tip, time, day, drinker, email) {
        return this.http.post('/api/modify/insertTransactions', { transactionID: transactionID, total: total, tip: tip, time: time, day: day, drinker: drinker, email: email });
    };
    ModifyService.prototype.postInputBills = function (transactionID, item, barname, uniqueID) {
        return this.http.post('/api/modify/insertBills', { transactionID: transactionID, item: item, barname: barname, uniqueID: uniqueID });
    };
    ModifyService.prototype.deleteInputItems = function (name) {
        return this.http.post('/api/modify/deleteItems', { name: name });
    };
    ModifyService.prototype.deleteInputBars = function (name, address) {
        return this.http.post('/api/modify/deleteBars', { name: name, address: address });
    };
    ModifyService.prototype.deleteInputDrinkers = function (email) {
        return this.http.post('/api/modify/deleteDrinkers', { email: email });
    };
    ModifyService.prototype.deleteFrequents = function (email, barname) {
        return this.http.post('/api/modify/deleteFrequents', { email: email, barname: barname });
    };
    ModifyService.prototype.deleteInputisOpen = function (name, address, day) {
        return this.http.post('/api/modify/deleteisOpen', { name: name, address: address, day: day });
    };
    ModifyService.prototype.deleteInputLikes = function (email, beer) {
        return this.http.post('/api/modify/deleteLikes', { email: email, beer: beer });
    };
    ModifyService.prototype.deleteInputSells = function (item, address) {
        return this.http.post('/api/modify/deleteSells', { item: item, address: address });
    };
    ModifyService.prototype.deleteInputTransactions = function (transactionID) {
        return this.http.post('/api/modify/deleteTransactions', { transactionID: transactionID });
    };
    ModifyService.prototype.deleteInputBills = function (uniqueID) {
        return this.http.post('/api/modify/deleteBills', { uniqueID: uniqueID });
    };
    ModifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModifyService);
    return ModifyService;
}());



/***/ }),

/***/ "./src/app/patterns/patterns.component.css":
/*!*************************************************!*\
  !*** ./src/app/patterns/patterns.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdHRlcm5zL3BhdHRlcm5zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patterns/patterns.component.html":
/*!**************************************************!*\
  !*** ./src/app/patterns/patterns.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Patterns Page!</h1>\n    <p class=\"lead\">If both tables are empty, then the patterns are being held!</p>\n  </div>\n</div>\n\n\n<div id=\"bargraph\">\n\n</div>\n\n<br><br>\n\n<div class=\"container\">\n  <br>\n  <div class=\"container\" *ngIf=\"pattern1\">\n    <div class=\"p-3 mb-2 bg-danger text-white\">Pattern 1 Violated</div>\n  </div>\n  <div class=\"p-3 mb-2 bg-success text-white\">Pattern 1 Holding</div>\n</div>\n<br>\n\n<div class=\"container\">\n    <br>\n    <div class=\"container\" *ngIf=\"pattern2\">\n      <div class=\"p-3 mb-2 bg-danger text-white\">Pattern 2 Violated</div>\n    </div>\n    <div class=\"p-3 mb-2 bg-success text-white\">Pattern 2 Holding</div>\n  </div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/patterns/patterns.component.ts":
/*!************************************************!*\
  !*** ./src/app/patterns/patterns.component.ts ***!
  \************************************************/
/*! exports provided: PatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternsComponent", function() { return PatternsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatternsComponent = /** @class */ (function () {
    function PatternsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        this.barService.getPattern1().subscribe(function (data) {
            var id = [];
            var total = [];
            data.forEach(function (bar) {
                id.push(bar.violateID);
                id.push(bar.total);
            });
            _this.renderChart(id, total);
        });
        if (this.barService.getPattern1() == null) {
            this.pattern2 = "false";
        }
        if (this.barService.getPattern2() == null) {
            this.pattern2 = "false";
        }
    }
    PatternsComponent.prototype.ngOnInit = function () {
    };
    PatternsComponent.prototype.renderChart = function (beers, counts) {
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
    };
    PatternsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patterns',
            template: __webpack_require__(/*! ./patterns.component.html */ "./src/app/patterns/patterns.component.html"),
            styles: [__webpack_require__(/*! ./patterns.component.css */ "./src/app/patterns/patterns.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PatternsComponent);
    return PatternsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jackk\Desktop\projects\bar_beer_drinker\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map