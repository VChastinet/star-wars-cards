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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-button{\n  padding: 0;\n}\n\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n  background-color: #424242;\n}\n\n.nav-wrapper, a {\n  color: #d8d8c8;\n}\n\n.left{\n  margin-right: 8px;\n}\n\n.right{\n  margin-left: 3px;\n}\n\n.side-nav .material-icons{\n  margin-right: 10px\n}\n\n.brand-logo img{\n  margin-left: 10px;\n  width: 100px;\n}\n\n.side-nav a, .dropdown-content a{\n  color: #d8d8c8;\n}\n\n.side-nav .side-nav-title{\n  margin-top: 20px;\n}\n\n.material-icons, .side-nav .material-icons{\n  color: #fdd835;\n}\n\n.dropdown-content, .nav-wrapper, .side-nav{\n  background-color: #424242;\n}\n\n.main-logo{\n  display: block;\n  margin: auto;\n  width: 30rem;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"mobile-menu\" class=\"side-nav\">\n  <li class=\"center-align\"><a><h5 class=\"side-nav-title\">Categorias</h5></a></li>\n  <li><a [routerLink]=\"['/']\"><i class=\"material-icons\">local_movies</i> Filmes </a></li>\n  <li><a [routerLink]=\"['/people', 1]\"><i class=\"material-icons\">face</i> Personagens </a></li>\n  <li><a [routerLink]=\"['/species', 1]\"><i class=\"material-icons\">adb</i> Espécies </a></li>\n  <li><a [routerLink]=\"['/ships', 1]\"><i class=\"material-icons\">flight_takeoff</i> Naves </a></li>\n  <li><a [routerLink]=\"['/vehicles', 1]\"><i class=\"material-icons\">motorcycle</i> Veículos </a></li>\n  <li><a [routerLink]=\"['/planets', 1]\"><i class=\"material-icons\">public</i> Planetas </a></li>\n</ul>\n\n<ul materialize=\"dropdown\" id=\"transport\" class=\"dropdown-content\">\n  <li><a [routerLink]=\"['/ships', 1]\"><i class=\"material-icons left\">flight_takeoff</i>Naves </a></li>\n  <li><a [routerLink]=\"['/vehicles', 1]\"><i class=\"material-icons left\"> motorcycle </i>Veículos</a></li>\n</ul>\n\n<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper\">\n  \n      <a materialize=\"sideNav\" data-activates=\"mobile-menu\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <a [routerLink]=\"['/']\" class=\"brand-logo\"><img src=\"../assets/starwars-yellow_border.png\" alt=\"star wars logo\"></a>\n  \n      <ul class=\"right hide-on-med-and-down\">\n        <li>\n          <a [routerLink]=\"['/']\"><i class=\"material-icons left\">local_movies</i> Filmes </a>\n        </li>\n        <li>\n          <a  [routerLink]=\"['/people', 1]\"><i class=\"material-icons left\">face</i> Personagens </a>\n        </li>\n        <li>\n          <a  [routerLink]=\"['/species', 1]\"><i class=\"material-icons left\">adb</i> Espécies </a>\n        </li>\n        <li>\n          <a class=\"dropdown-button\" data-activates=\"transport\">\n            <i class=\"material-icons left\">time_to_leave</i> Transportes <i class=\"material-icons right\">arrow_drop_down</i>\n          </a>\n        </li>\n        <li>\n          <a  [routerLink]=\"['/planets', 1]\"><i class=\"material-icons left\">public</i> Planetas </a>\n        </li>\n      </ul>\n  \n    </div>\n  </nav>\n</div>\n\n<img class=\"main-logo\" src=\"../../assets/starwars-black_hor.png\" alt=\"star wars vertical logo\">\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer grey darken-3\">\n  <div class=\"footer-copyright\">\n    <div i18n class=\"container\">\n    © Victor Chastinet\n    <a class=\"grey-text text-lighten-4 right\" href=\"https://www.github.com/vchastinet\" target=\"_blank\">github</a>\n    </div>\n  </div>\n</footer>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-template/page-template.component */ "./src/app/page-template/page-template.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards/main-cards.component */ "./src/app/cards/main-cards.component.ts");
/* harmony import */ var _cards_film_cards_film_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cards/film-cards/film-page.component */ "./src/app/cards/film-cards/film-page.component.ts");
/* harmony import */ var _cards_people_cards_person_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cards/people-cards/person-page.component */ "./src/app/cards/people-cards/person-page.component.ts");
/* harmony import */ var _cards_species_cards_specie_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cards/species-cards/specie-page.component */ "./src/app/cards/species-cards/specie-page.component.ts");
/* harmony import */ var _cards_ships_cards_ship_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards/ships-cards/ship-page.component */ "./src/app/cards/ships-cards/ship-page.component.ts");
/* harmony import */ var _cards_vehicles_cards_vehicle_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cards/vehicles-cards/vehicle-page.component */ "./src/app/cards/vehicles-cards/vehicle-page.component.ts");
/* harmony import */ var _cards_planets_cards_planet_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cards/planets-cards/planet-page.component */ "./src/app/cards/planets-cards/planet-page.component.ts");
/* harmony import */ var _prev_next_prev_next_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./prev-next/prev-next.component */ "./src/app/prev-next/prev-next.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_10__["MainCardsComponent"],
                _cards_film_cards_film_page_component__WEBPACK_IMPORTED_MODULE_11__["FilmPageComponent"],
                _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_8__["PageTemplateComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                _cards_people_cards_person_page_component__WEBPACK_IMPORTED_MODULE_12__["PersonPageComponent"],
                _cards_species_cards_specie_page_component__WEBPACK_IMPORTED_MODULE_13__["SpeciePageComponent"],
                _cards_ships_cards_ship_page_component__WEBPACK_IMPORTED_MODULE_14__["ShipPageComponent"],
                _cards_vehicles_cards_vehicle_page_component__WEBPACK_IMPORTED_MODULE_15__["VehiclePageComponent"],
                _cards_planets_cards_planet_page_component__WEBPACK_IMPORTED_MODULE_16__["PlanetPageComponent"],
                _prev_next_prev_next_component__WEBPACK_IMPORTED_MODULE_17__["PrevNextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_4__["MaterializeModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_5__["SwapiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/main-cards.component */ "./src/app/cards/main-cards.component.ts");
/* harmony import */ var _cards_film_cards_film_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/film-cards/film-page.component */ "./src/app/cards/film-cards/film-page.component.ts");
/* harmony import */ var _cards_people_cards_person_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/people-cards/person-page.component */ "./src/app/cards/people-cards/person-page.component.ts");
/* harmony import */ var _cards_species_cards_specie_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards/species-cards/specie-page.component */ "./src/app/cards/species-cards/specie-page.component.ts");
/* harmony import */ var _cards_ships_cards_ship_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/ships-cards/ship-page.component */ "./src/app/cards/ships-cards/ship-page.component.ts");
/* harmony import */ var _cards_vehicles_cards_vehicle_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards/vehicles-cards/vehicle-page.component */ "./src/app/cards/vehicles-cards/vehicle-page.component.ts");
/* harmony import */ var _cards_planets_cards_planet_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards/planets-cards/planet-page.component */ "./src/app/cards/planets-cards/planet-page.component.ts");








var appRoutes = [
    { path: '', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: 'film/:id', component: _cards_film_cards_film_page_component__WEBPACK_IMPORTED_MODULE_2__["FilmPageComponent"] },
    { path: 'person/:id', component: _cards_people_cards_person_page_component__WEBPACK_IMPORTED_MODULE_3__["PersonPageComponent"] },
    { path: 'specie/:id', component: _cards_species_cards_specie_page_component__WEBPACK_IMPORTED_MODULE_4__["SpeciePageComponent"] },
    { path: 'ship/:id', component: _cards_ships_cards_ship_page_component__WEBPACK_IMPORTED_MODULE_5__["ShipPageComponent"] },
    { path: 'vehicle/:id', component: _cards_vehicles_cards_vehicle_page_component__WEBPACK_IMPORTED_MODULE_6__["VehiclePageComponent"] },
    { path: 'planet/:id', component: _cards_planets_cards_planet_page_component__WEBPACK_IMPORTED_MODULE_7__["PlanetPageComponent"] },
    { path: 'people/:id', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: 'species/:id', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: 'ships/:id', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: 'vehicles/:id', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: 'planets/:id', component: _cards_main_cards_component__WEBPACK_IMPORTED_MODULE_1__["MainCardsComponent"] },
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/batch/batch.component.ts":
/*!******************************************!*\
  !*** ./src/app/batch/batch.component.ts ***!
  \******************************************/
/*! exports provided: BatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchComponent", function() { return BatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BatchComponent = (function () {
    function BatchComponent() {
        this.people = [];
        this.planets = [];
        this.starships = [];
        this.vehicles = [];
        this.species = [];
        this.films = [];
    }
    BatchComponent.prototype.call = function (data, service, object) {
        var objVals = Object.values(data);
        var urls = objVals
            .join(',')
            .match(/(\w+:\/\/\w+.\w+\/\w+\/\w+\/\d+\/)/g);
        urls.pop();
        urls.forEach(function (url) {
            var arrId = url.match(/\d+/);
            var id = Number(arrId[0]);
            if (url.match(/people/)) {
                service.getPerson(id).subscribe(function (res) {
                    res.id = id;
                    object.people.push(res);
                }, function (err) {
                    throw new Error(err.message);
                });
            }
            if (url.match(/planets/)) {
                service.getPlanet(id).subscribe(function (res) {
                    res.id = id;
                    object.planets.push(res);
                }, function (err) { throw new Error(err.message); });
            }
            if (url.match(/starships/)) {
                service.getStarship(id)
                    .subscribe(function (res) {
                    res.id = id;
                    object.starships.push(res);
                }, function (err) { throw new Error(err.message); });
            }
            if (url.match(/vehicles/)) {
                service.getVehicle(id).subscribe(function (res) {
                    res.id = id;
                    object.vehicles.push(res);
                }, function (err) { throw new Error(err.message); });
            }
            if (url.match(/species/)) {
                service.getSpecie(id).subscribe(function (res) {
                    res.id = id;
                    object.species.push(res);
                }, function (err) { throw new Error(err.message); });
            }
            if (url.match(/films/)) {
                service.getFilm(id).subscribe(function (res) {
                    res.id = id;
                    object.films.push(res);
                }, function (err) {
                    throw new Error(err.message);
                });
            }
        });
        return object;
    };
    BatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BatchComponent);
    return BatchComponent;
}());



/***/ }),

/***/ "./src/app/cards/film-cards/crawl-effect.css":
/*!***************************************************!*\
  !*** ./src/app/cards/film-cards/crawl-effect.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*from https://css-tricks.com/snippets/css/star-wars-crawl-text/ */\n\n.modal-content, .modal{\n  background: #000;\n  overflow: hidden;\n}\n\n.star-wars {\n  color: #fdd835;\n  display: flex;\n  font-size: 500%;\n  font-weight: 600;\n  height: 800px;\n  justify-content: center;\n  letter-spacing: 6px;\n  line-height: 150%;\n  -webkit-perspective: 400px;\n          perspective: 400px;\n  text-align: justify;\n}\n\n.crawl {\n  -webkit-animation: crawl 60s linear;\n          animation: crawl 60s linear;\n  position: relative;\n  top: -100px;\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n}\n\n.fade {\n  background-image: linear-gradient(0deg, transparent, black 75%);\n  min-height: 60vh;\n  position: relative;\n  top: -25px;\n  width: 100%;\n  z-index: 1;\n}\n\n@-webkit-keyframes crawl {\n  0% {\n    top: 0;\n    -webkit-transform: rotateX(20deg) translateZ(0);\n            transform: rotateX(20deg) translateZ(0);\n  }\n  100% { \n    top: -6000px;\n    -webkit-transform: rotateX(25deg) translateZ(-2500px);\n            transform: rotateX(25deg) translateZ(-2500px);\n  }\n}\n\n@keyframes crawl {\n  0% {\n    top: 0;\n    -webkit-transform: rotateX(20deg) translateZ(0);\n            transform: rotateX(20deg) translateZ(0);\n  }\n  100% { \n    top: -6000px;\n    -webkit-transform: rotateX(25deg) translateZ(-2500px);\n            transform: rotateX(25deg) translateZ(-2500px);\n  }\n}"

/***/ }),

/***/ "./src/app/cards/film-cards/film-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/cards/film-cards/film-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.card-content ul {\n  font-size: 1.2rem;\n  margin-top: 0;  \n}\n\n.card-action{\n  text-align: center;\n}\n\n.card .card-action a{\n  background-color: #424242;\n  border-radius: 5px;\n  color: #fdd835 !important;\n  padding: 15px;\n}\n"

/***/ }),

/***/ "./src/app/cards/film-cards/film-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cards/film-cards/film-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m8 l6 offset-m2 offset-l3\">\n      <h4 class=\"header\">{{ card.title }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Episódio {{ card.episode_id }}</strong></li>\n              <li><strong>Diretor: </strong>{{ card.director }}</li>\n              <li><strong>Produtores: </strong>{{ card.producer }}</li>\n              <li><strong>Ano de lançamento: </strong>{{ card.release_date.split('-')[0] }}</li>\n            </ul>\n          </div>\n          <div class=\"card-action\">\n            <a class=\"modal-trigger\" href=\"#opening_crawl\">Texto de abertura</a>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n<div class=\"card-info\">\n  <app-page-template [data]=\"batch\"></app-page-template>\n</div>\n\n<div materialize=\"modal\" id=\"opening_crawl\" class=\"modal\">\n  <div class=\"modal-content\">\n      <section *ngIf=\"card\" class=\"star-wars\">\n          \n            <div class=\"crawl\">\n              \n              <div class=\"title\">\n                <p>Episode {{ card.episode_id}}</p>\n                <h1>{{card.title}}</h1>\n              </div>\n              \n              <p>{{ card.opening_crawl }}</p>\n          \n            </div>\n          \n          </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/film-cards/film-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cards/film-cards/film-page.component.ts ***!
  \*********************************************************/
/*! exports provided: FilmPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmPageComponent", function() { return FilmPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmPageComponent = (function () {
    function FilmPageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    FilmPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getFilm(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    FilmPageComponent.prototype.setImg = function (data) {
        data.img = '../assets/ver-ep' + data.episode_id + '.png';
    };
    FilmPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-page',
            template: __webpack_require__(/*! ./film-page.component.html */ "./src/app/cards/film-cards/film-page.component.html"),
            styles: [__webpack_require__(/*! ./film-page.component.css */ "./src/app/cards/film-cards/film-page.component.css"), __webpack_require__(/*! ./crawl-effect.css */ "./src/app/cards/film-cards/crawl-effect.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], FilmPageComponent);
    return FilmPageComponent;
}());



/***/ }),

/***/ "./src/app/cards/main-cards.component.css":
/*!************************************************!*\
  !*** ./src/app/cards/main-cards.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  background: radial-gradient(ellipse at bottom, #ffffff 0%, #d8d8c8   100%);\n  border: solid 5px #141414;\n  border-radius: 8px;\n  transition-duration: 0.3s;\n}\n\n.card:hover{\n  -webkit-animation: cardSelect 0.3s forwards;\n          animation: cardSelect 0.3s forwards;\n  box-shadow: 2px 4px 12px 4px #666242;\n}\n\n.card-image, img{\nborder-left: solid 8px #d8d8c8;\nborder-right: solid 8px #d8d8c8;\n\n}\n\n.cards-container{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.cards{\n  flex-basis: 28%;\n  min-width: 300px;\n}\n\n.card-title{\n  color: #424242;\n  height: 80px;\n  padding: 0 22px;\n}\n\n.card-title .card-title-text{\n  font-weight: bold;\n  text-align: center;\n}\n\n.card-content ul{\n  background-color: #424242;\n  border: solid 3px #141414; \n  border-radius: 8px;\n  color: #fdd835;\n  padding: 20px;\n}\n\n@-webkit-keyframes cardSelect {\n  to {-webkit-transform: scale(1.05, 1.05);transform: scale(1.05, 1.05);}\n}\n\n@keyframes cardSelect {\n  to {-webkit-transform: scale(1.05, 1.05);transform: scale(1.05, 1.05);}\n}"

/***/ }),

/***/ "./src/app/cards/main-cards.component.html":
/*!*************************************************!*\
  !*** ./src/app/cards/main-cards.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<app-prev-next (newPage)=\"onPageChange($event)\" [id]=\"id\" [category]=\"category\" class=\"arrows hide\"></app-prev-next>\n\n<div class=\"container\">\n  <div class=\"cards-container scale-transition scale-out\">\n      <div *ngFor=\"let info of cardsData\" class=\"cards\">\n        <div class=\"card\">\n            <a [routerLink]=\"[routeUrl, info.id]\" class=\"router-link\">\n              <div *ngIf=\"info.title\" class=\"card-title valign-wrapper\"><h5 class=\"card-title-text\">{{ info.title }}</h5></div>\n              <div *ngIf=\"info.name\" class=\"card-title valign-wrapper\"><h5>{{ info.name }}</h5></div>\n              <div class=\"card-image\">\n                  <img [src]=\"info.img\" alt=\"starwars logo placeholder\">\n              </div>\n            </a>\n          <div class=\"card-content\">\n              <ul *ngIf=\"info.title\">\n                <li><strong>Episódio {{ info.episode_id }}</strong></li>\n                <li><strong>Diretor: </strong>{{ info.director }}</li>\n                <li><strong>Produtores: </strong>{{ info.producer }}</li>\n                <li><strong>Ano de lançamento: </strong>{{ info.release_date.split('-')[0] }}</li>\n              </ul>\n  \n              <ul *ngIf=\"info.gender\">\n                <li><strong>Altura: </strong>{{ info.height > 99? (info.height/100) + \"m\" : info.height + \"cm\" }}</li>\n                <li><strong>Peso: </strong>{{ info.mass }} kg</li>\n                <li><strong>Sexo: </strong>{{ info.gender }}</li>\n                <li><strong>Data de nascimento: </strong>{{ info.birth_year }}</li>\n              </ul>\n  \n              <ul *ngIf=\"info.model\">\n                <li><strong>Modelo: </strong>{{ info.model }}</li>\n                <li><strong>Fabricante: </strong>{{ info.manufacturer }}</li>\n                <li><strong>Custo: </strong>{{ info.cost_in_credits == \"unknown\" ? info.cost_in_credits : info.cost_in_credits| currency }}</li>\n                <li><strong>crew: </strong>{{ info.crew }}</li>\n              </ul>\n  \n              <ul *ngIf=\"info.designation\">\n                <li><strong>Classe: </strong>{{ info.classification }}</li>\n                <li><strong>Designação: </strong>{{ info.designation }}</li>\n                <li><strong>Altura média: </strong>{{ info.average_height > 99? (info.average_height/100) + \"m\" : info.average_height + \"cm\" }}</li>\n                <li><strong>Espectativa de vida: </strong>{{ info.release_date }} anos</li>\n              </ul>\n  \n              <ul *ngIf=\"info.climate\">\n                <li><strong>Duração do dia </strong>{{ info.climate }} horas</li>\n                <li><strong>Duração do ano: </strong>{{ info.rotation_period }} dias</li>\n                <li><strong>Diametro: </strong>{{ info.diameter }} km</li>\n                <li><strong>Gravidade (g): </strong>{{ info.gravity }}</li>\n              </ul>\n            \n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cards/main-cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/cards/main-cards.component.ts ***!
  \***********************************************/
/*! exports provided: MainCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCardsComponent", function() { return MainCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/swapi.service */ "./src/app/services/swapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainCardsComponent = (function () {
    function MainCardsComponent(route, router, swapi) {
        this.route = route;
        this.router = router;
        this.swapi = swapi;
        this.swapi = swapi;
        this.route = route;
        this.router = router;
    }
    MainCardsComponent.prototype.onPageChange = function (event) {
        var newCategory = event.newPage[0];
        var newId = event.newPage[1];
        this.router.navigate([newCategory, newId]);
    };
    MainCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (urlSegment) {
            var section = null;
            _this.category = urlSegment[0];
            _this.id = urlSegment[1];
            if (_this.category)
                section = _this.category.path;
            switch (section) {
                case 'people':
                    _this.people(_this.id.path);
                    _this.routeUrl = '/person';
                    break;
                case 'species':
                    _this.species(_this.id.path);
                    _this.routeUrl = '/specie';
                    break;
                case 'ships':
                    _this.ships(_this.id.path);
                    _this.routeUrl = '/ship';
                    break;
                case 'planets':
                    _this.planets(_this.id.path);
                    _this.routeUrl = '/planet';
                    break;
                case 'vehicles':
                    _this.vehicles(_this.id.path);
                    _this.routeUrl = '/vehicle';
                    break;
                default:
                    _this.films();
                    _this.routeUrl = '/film';
            }
        });
    };
    MainCardsComponent.prototype.films = function () {
        var _this = this;
        this.swapi.getFilms().subscribe(function (res) {
            _this.cardsData = res.results;
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '../assets/hor-ep' + element.episode_id + '.png'; });
            _this.cardsData.sort(function (a, b) { return a.episode_id - b.episode_id; });
            if (res) {
                _this.loaded('films');
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.people = function (id) {
        var _this = this;
        this.swapi.getPeople(id).subscribe(function (res) {
            _this.cardsData = res.results;
            _this.manageArrows(res);
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '/assets/hor-people.png'; });
            if (res) {
                _this.loaded();
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.species = function (id) {
        var _this = this;
        this.swapi.getSpecies(id).subscribe(function (res) {
            _this.cardsData = res.results;
            _this.manageArrows(res);
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '/assets/hor-species.png'; });
            if (res) {
                _this.loaded();
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.ships = function (id) {
        var _this = this;
        this.swapi.getStarships(id).subscribe(function (res) {
            _this.cardsData = res.results;
            _this.manageArrows(res);
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '/assets/hor-ships.png'; });
            if (res) {
                _this.loaded();
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.vehicles = function (id) {
        var _this = this;
        this.swapi.getVehicles(id).subscribe(function (res) {
            _this.cardsData = res.results;
            _this.manageArrows(res);
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '/assets/hor-vehicles.png'; });
            if (res) {
                _this.loaded();
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.planets = function (id) {
        var _this = this;
        this.swapi.getPlanets(id).subscribe(function (res) {
            _this.cardsData = res.results;
            _this.manageArrows(res);
            _this.cardsData.forEach(function (element) {
                var urlId = element.url.match(/\d+/);
                element.id = urlId[0];
            });
            _this.cardsData.forEach(function (element) { return element.img = '/assets/hor-planets.png'; });
            if (res) {
                _this.loaded();
            }
        }, function (err) {
            alert('Desculpe, ocorreu um erro');
            throw new Error(err.message);
        });
    };
    MainCardsComponent.prototype.loaded = function (category) {
        if (category === void 0) { category = null; }
        document.querySelector('app-loading').classList.add('hide');
        document.querySelector('.cards-container').classList.add('scale-in');
        if (category !== 'films') {
            document.querySelector('.arrows').classList.remove('hide');
        }
    };
    MainCardsComponent.prototype.manageArrows = function (pages) {
        if (!pages.next) {
            document.querySelector('.nex').classList.add('hide');
        }
        else {
            document.querySelector('.nex').classList.remove('hide');
        }
        if (!pages.previous) {
            document.querySelector('.prev').classList.add('hide');
        }
        else {
            document.querySelector('.prev').classList.remove('hide');
        }
    };
    MainCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-cards',
            template: __webpack_require__(/*! ./main-cards.component.html */ "./src/app/cards/main-cards.component.html"),
            styles: [__webpack_require__(/*! ./main-cards.component.css */ "./src/app/cards/main-cards.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], MainCardsComponent);
    return MainCardsComponent;
}());



/***/ }),

/***/ "./src/app/cards/people-cards/person-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/cards/people-cards/person-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.tooltipped .notes:hover{\n  background-color: #0000006e;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n\n.tooltipped .notes{\n  cursor: pointer;\n  transition-duration: 0.3s;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.card-content ul {\n  font-size: 1.2rem;\n}"

/***/ }),

/***/ "./src/app/cards/people-cards/person-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cards/people-cards/person-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m8 l6 offset-m2 offset-l3\">\n      <h4 class=\"header\">{{ card.name }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Altura: </strong> {{ card.height > 99? (card.height/100) + \"m\" : card.height + \"cm\" }}</li>\n              <li><strong>Peso: </strong>{{ card.mass }}Kg</li>\n              <li><strong>Sexo: </strong>{{ card.gender }}</li>\n              <li materialize=\"tooltip\" class=\"tooltipped\"  data-position=\"bottom\" data-delay=\"80\" data-tooltip=\"*Antes da Batalha de Yavin\">\n                <strong>Data de nascimento </strong><span class=\"notes\">{{ card.birth_year }}</span>*\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n<app-page-template [data]=\"batch\"></app-page-template>\n"

/***/ }),

/***/ "./src/app/cards/people-cards/person-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/people-cards/person-page.component.ts ***!
  \*************************************************************/
/*! exports provided: PersonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageComponent", function() { return PersonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonPageComponent = (function () {
    function PersonPageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    PersonPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getPerson(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    PersonPageComponent.prototype.setImg = function (data) {
        data.img = '/assets/ver-people.png';
    };
    PersonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person-page',
            template: __webpack_require__(/*! ./person-page.component.html */ "./src/app/cards/people-cards/person-page.component.html"),
            styles: [__webpack_require__(/*! ./person-page.component.css */ "./src/app/cards/people-cards/person-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], PersonPageComponent);
    return PersonPageComponent;
}());



/***/ }),

/***/ "./src/app/cards/planets-cards/planet-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/planets-cards/planet-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.collection, .collection-item, .collection-header{\n  background-color: #d8d8c8 !important;\n}\n\n.content{\n  height: 8rem;\n  overflow: auto;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.title{\n  color: #141414 !important;\n  text-shadow: 0 0 1px #fdd835 !important;\n}"

/***/ }),

/***/ "./src/app/cards/planets-cards/planet-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/planets-cards/planet-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m10 l6 offset-m1 offset-l3\">\n      <h4 class=\"header\">{{ card.name }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Duração do dia: </strong> {{ card.rotation_period }} horas</li>\n              <li><strong>Duração do ano: </strong>{{ card.orbital_period }} dias</li>\n              <li><strong>Diametro: </strong>{{ card.diameter }} Km</li>\n              <li><strong>Gravidade (g): </strong>{{ card.gravity }}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n<app-page-template [data]=\"batch\">\n\n  <div *ngIf=\"card\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Geografia</h5></li>\n      <div class=\"content\">\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Clima: </strong>{{ card.climate }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Terreno: </strong>{{ card.terrain }}\n            </span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>População: </strong>{{ card.population }} habitantes</span>\n        </a>\n        <a class=\"collection-item\">\n          <span class=\"title\"><strong>Superficie de água: </strong>{{ card.surface_water }}%</span>\n        </a>\n      </div>\n    </ul>\n  </div>\n\n</app-page-template>\n"

/***/ }),

/***/ "./src/app/cards/planets-cards/planet-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/planets-cards/planet-page.component.ts ***!
  \**************************************************************/
/*! exports provided: PlanetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetPageComponent", function() { return PlanetPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanetPageComponent = (function () {
    function PlanetPageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    PlanetPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getPlanet(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    PlanetPageComponent.prototype.setImg = function (data) {
        data.img = '/assets/ver-planets.png';
    };
    PlanetPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planet-page',
            template: __webpack_require__(/*! ./planet-page.component.html */ "./src/app/cards/planets-cards/planet-page.component.html"),
            styles: [__webpack_require__(/*! ./planet-page.component.css */ "./src/app/cards/planets-cards/planet-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], PlanetPageComponent);
    return PlanetPageComponent;
}());



/***/ }),

/***/ "./src/app/cards/ships-cards/ship-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cards/ships-cards/ship-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.collection, .collection-item, .collection-header{\n  background-color: #d8d8c8 !important;\n}\n\n.content{\n  height: 8rem;\n  overflow: auto;\n}\n\n.tooltipped .notes:hover{\n  background-color: #0000006e;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n\n.tooltipped .notes{\n  cursor: pointer;\n  transition-duration: 0.3s;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.card-content ul {\n  font-size: 1.1rem;\n  margin-top: 0;\n}\n\n.title{\n  color: #141414 !important;\n  text-shadow: 0 0 1px #fdd835 !important;\n}"

/***/ }),

/***/ "./src/app/cards/ships-cards/ship-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/cards/ships-cards/ship-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m10 l6 offset-m1 offset-l3\">\n      <h4 class=\"header\">{{ card.name }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Modelo: </strong> {{ card.model }}</li>\n              <li><strong>Fabricante: </strong>{{ card.manufacturer }}</li>\n              <li><strong>Autonomia: </strong>{{ card.consumables }}</li>\n              <li materialize=\"tooltip\" class=\"tooltipped\"  data-position=\"bottom\" data-delay=\"80\" data-tooltip=\"*Megalights por hora\">\n                <strong>Velocidade: </strong><span class=\"notes\">{{ card.MGLT }} Mglt/h*</span>\n              </li>\n              <li><strong>Classe: </strong>{{ card.starship_class }}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div> \n</div>\n\n<app-page-template [data]=\"batch\">\n\n  <div *ngIf=\"card\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Estatísticas</h5></li>\n      <div class=\"content\">\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Classe do hyperdrive: </strong>{{ card.hyperdrive_rating }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Carga máxima:</strong>{{ card.cargo_capacity > 999 ? card.cargo_capacity/1000 +' ton' : card.cargo_capacity + ' Kg' }}\n            </span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Tripulação: </strong>{{ card.crew }} </span>\n        </a>\n        <a class=\"collection-item\">\n          <span class=\"title\"><strong>Passageiros: </strong>{{ card.passengers }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Velocidade atmosférica: </strong>{{ card.max_atmosphering_speed === \"n/a\" ? \"n/a\" : card.max_atmosphering_speed + \" Km/h\"}}\n            </span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Custo: </strong>{{ card.cost_in_credits == \"unknown\" ? card.cost_in_credits : card.cost_in_credits| currency }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Comprimento: </strong>{{ card.length > 999 ? card.length/1000 +' Km' : card.length + ' m' }}\n            </span>\n        </a>\n      </div>\n    </ul>\n  </div>\n\n</app-page-template>\n"

/***/ }),

/***/ "./src/app/cards/ships-cards/ship-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cards/ships-cards/ship-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ShipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPageComponent", function() { return ShipPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipPageComponent = (function () {
    function ShipPageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    ShipPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getStarship(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    ShipPageComponent.prototype.setImg = function (data) {
        data.img = '/assets/ver-ships.png';
    };
    ShipPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship-page',
            template: __webpack_require__(/*! ./ship-page.component.html */ "./src/app/cards/ships-cards/ship-page.component.html"),
            styles: [__webpack_require__(/*! ./ship-page.component.css */ "./src/app/cards/ships-cards/ship-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], ShipPageComponent);
    return ShipPageComponent;
}());



/***/ }),

/***/ "./src/app/cards/species-cards/specie-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/species-cards/specie-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.card-content ul {\n  font-size: 1.2rem;\n}"

/***/ }),

/***/ "./src/app/cards/species-cards/specie-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/species-cards/specie-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m8 l6 offset-m2 offset-l3\">\n      <h4 class=\"header\">{{ card.name }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Classe: </strong> {{ card.classification }}</li>\n              <li><strong>Designação: </strong>{{ card.designation }}</li>\n              <li><strong>Altura média: </strong>{{ card.average_height > 99? (card.average_height/100) + \"m\" : card.average_height + \"cm\" }}</li>\n              <li><strong>Espectativa de vida: </strong>{{ card.average_lifespan === \"unknown\" ? card.average_lifespan : card.average_lifespan + \" anos\"}}</li>\n              <li><strong>Idioma: </strong>{{ card.language }}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n<app-page-template [data]=\"batch\"></app-page-template>\n"

/***/ }),

/***/ "./src/app/cards/species-cards/specie-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/species-cards/specie-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SpeciePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciePageComponent", function() { return SpeciePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeciePageComponent = (function () {
    function SpeciePageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    SpeciePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getSpecie(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    SpeciePageComponent.prototype.setImg = function (data) {
        data.img = '/assets/ver-species.png';
    };
    SpeciePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specie-page',
            template: __webpack_require__(/*! ./specie-page.component.html */ "./src/app/cards/species-cards/specie-page.component.html"),
            styles: [__webpack_require__(/*! ./specie-page.component.css */ "./src/app/cards/species-cards/specie-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], SpeciePageComponent);
    return SpeciePageComponent;
}());



/***/ }),

/***/ "./src/app/cards/vehicles-cards/vehicle-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cards/vehicles-cards/vehicle-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 460px){\n  .card.small{\n    height: 13rem;\n  }\n}\n\n.card {\n  background-color: #d8d8c8;\n}\n\n.collection, .collection-item, .collection-header{\n  background-color: #d8d8c8 !important;\n}\n\n.content{\n  height: 8rem;\n  overflow: auto;\n}\n\n.header{\n  color: #fdd835;\n  font-weight: bold;\n}\n\n.card-content ul {\n  margin-top: 0;\n}\n\n.title{\n  color: #141414 !important;\n  text-shadow: 0 0 1px #fdd835 !important;\n}"

/***/ }),

/***/ "./src/app/cards/vehicles-cards/vehicle-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cards/vehicles-cards/vehicle-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"container\">\n  <div class=\"main-card scale-transition scale-out row\">\n    <div *ngIf=\"card\" class=\"col s12 m10 l6 offset-m1 offset-l3\">\n      <h4 class=\"header\">{{ card.name }}</h4>\n      <div class=\"card small horizontal\">\n        <div class=\"card-image hide-on-small-only\">\n          <img class=\"card-img\" [src]=\"card.img\" alt=\"starwars logo placeholder\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <ul>\n              <li><strong>Modelo: </strong> {{ card.model }}</li>\n              <li><strong>Fabricante: </strong>{{ card.manufacturer }}</li>\n              <li><strong>Autonomia: </strong>{{ card.consumables }}</li>\n              <li><strong>Velocidade: </strong>{{ card.max_atmosphering_speed }} Km/h</li>\n              <li><strong>Classe: </strong>{{ card.vehicle_class }}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n\n<app-page-template [data]=\"batch\">\n\n  <div *ngIf=\"card\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Estatísticas</h5></li>\n      <div class=\"content\">\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Carga máxima: </strong>{{ card.cargo_capacity > 999 ? card.cargo_capacity/1000 +' ton' : card.cargo_capacity + ' Kg' }}\n            </span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Tripulação: </strong>{{ card.crew }} </span>\n        </a>\n        <a class=\"collection-item\">\n          <span class=\"title\"><strong>Passageiros: </strong>{{ card.passengers }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\"><strong>Custo: </strong>{{ card.cost_in_credits == \"unknown\" ? card.cost_in_credits : card.cost_in_credits| currency }}</span>\n        </a>\n        <a class=\"collection-item\">\n            <span class=\"title\">\n              <strong>Comprimento: </strong>{{ card.length > 999 ? card.length/1000 +' Km' : card.length + ' m' }}\n            </span>\n        </a>\n      </div>\n    </ul>\n  </div>\n\n</app-page-template>\n"

/***/ }),

/***/ "./src/app/cards/vehicles-cards/vehicle-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cards/vehicles-cards/vehicle-page.component.ts ***!
  \****************************************************************/
/*! exports provided: VehiclePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageComponent", function() { return VehiclePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.component */ "./src/app/batch/batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiclePageComponent = (function () {
    function VehiclePageComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.url = 'https://swapi.co/api/';
        this.batch = new _batch_batch_component__WEBPACK_IMPORTED_MODULE_3__["BatchComponent"]();
        this.swapi = swapi;
        this.route = route;
    }
    VehiclePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.swapi.getVehicle(params.id).subscribe(function (res) {
                _this.card = res;
                _this.setImg(res);
                _this.batch.call(res, _this.swapi, _this.batch);
                if (res) {
                    document.querySelector('app-loading').classList.add('hide');
                    document.querySelector('.main-card').classList.add('scale-in');
                }
            }, function (err) { throw new Error(err.message); });
        });
    };
    VehiclePageComponent.prototype.setImg = function (data) {
        data.img = '/assets/ver-vehicles.png';
    };
    VehiclePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-page',
            template: __webpack_require__(/*! ./vehicle-page.component.html */ "./src/app/cards/vehicles-cards/vehicle-page.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-page.component.css */ "./src/app/cards/vehicles-cards/vehicle-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], VehiclePageComponent);
    return VehiclePageComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preloader-wrapper{\n  align-items: center;\n  display: flex;\n  margin-top: 4rem;\n}\n\n.hide{\n  display: none;\n}"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align preloader-wrapper big active row\">\n    <div class=\"spinner-layer spinner-yellow-only\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/page-template/page-template.component.css":
/*!***********************************************************!*\
  !*** ./src/app/page-template/page-template.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n  height: 8rem;\n  overflow: auto;\n}\n\n.collection, .collection-item, .collection-header{\n  background-color: #d8d8c8 !important;\n}\n\n.title, strong{\n  color: #141414;\n  text-shadow: 0 0 1px #fdd835;\n}"

/***/ }),

/***/ "./src/app/page-template/page-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/page-template/page-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n\n  <ng-content></ng-content>\n\n  <div *ngIf=\"data.people.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Personagens</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let person of data.people\" class=\"collection-item\" [routerLink]=\"['/person', person.id]\" href=\"#\">\n            <span class=\"title\"><strong>{{ person.name }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n  \n  <div *ngIf=\"data.starships.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Espaçonaves</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let ship of data.starships\" class=\"collection-item\" [routerLink]=\"['/ship', ship.id]\" href=\"#\">\n          <span class=\"title\"><strong>{{ ship.name }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n  \n  <div *ngIf=\"data.planets.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Planetas</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let planet of data.planets\" class=\"collection-item\" [routerLink]=\"['/planet', planet.id]\" href=\"#\">\n          <span class=\"title\"><strong>{{ planet.name }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n  \n  <div *ngIf=\"data.vehicles.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>veículos</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let vehicle of data.vehicles\" class=\"collection-item\" [routerLink]=\"['/vehicle', vehicle.id]\" href=\"#\">\n          <span class=\"title\"><strong>{{ vehicle.name }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n  \n  <div *ngIf=\"data.species.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Espécies</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let specie of data.species\" class=\"collection-item\" [routerLink]=\"['/specie', specie.id]\" href=\"#\">\n          <span class=\"title\"><strong>{{ specie.name }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n  \n  <div *ngIf=\"data.films.length > 0\" class=\"card-info col s12 m6\">\n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5>Filmes</h5></li>\n      <div class=\"content\">\n        <a *ngFor=\"let film of data.films\" class=\"collection-item\" [routerLink]=\"['/film', film.id]\" href=\"#\">\n          <span class=\"title\"><strong>{{ film.title }}</strong></span>\n        </a>\n      </div>\n    </ul>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/page-template/page-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-template/page-template.component.ts ***!
  \**********************************************************/
/*! exports provided: PageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function() { return PageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTemplateComponent = (function () {
    function PageTemplateComponent() {
    }
    PageTemplateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageTemplateComponent.prototype, "data", void 0);
    PageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-template',
            template: __webpack_require__(/*! ./page-template.component.html */ "./src/app/page-template/page-template.component.html"),
            styles: [__webpack_require__(/*! ./page-template.component.css */ "./src/app/page-template/page-template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTemplateComponent);
    return PageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/prev-next/prev-next.component.css":
/*!***************************************************!*\
  !*** ./src/app/prev-next/prev-next.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons{\n  color: #fdd835;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.medium.left{\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.main-arrows{\n  margin: 0 3rem 0 3rem;\n}\n\n.actual-page{\n  color: #fdd835;\n  font-size: 1.3rem;\n  text-align: center;\n}\n\n@media(min-width: 460px){\n  .main-arrows{\n    margin: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/prev-next/prev-next.component.html":
/*!****************************************************!*\
  !*** ./src/app/prev-next/prev-next.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actual-page\">\n<p>{{ category }}: <strong>{{ id }}</strong></p>\n</div>\n\n<div class=\"main-arrows\">\n  <a (click)=\"prev(category, id)\" class=\"prev\">\n    <i class=\"material-icons large left\">navigate_before</i>\n  </a>\n  <a (click)=\"next(category, id)\" class=\"nex\">\n    <i class=\"material-icons large right\">navigate_next</i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/prev-next/prev-next.component.ts":
/*!**************************************************!*\
  !*** ./src/app/prev-next/prev-next.component.ts ***!
  \**************************************************/
/*! exports provided: PrevNextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevNextComponent", function() { return PrevNextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrevNextComponent = (function () {
    function PrevNextComponent() {
        this.newPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PrevNextComponent.prototype.ngOnInit = function () {
    };
    PrevNextComponent.prototype.next = function () {
        var id = this.id.path;
        id++;
        this.newPage.emit({ newPage: [this.category.path, id] });
    };
    PrevNextComponent.prototype.prev = function () {
        var id = this.id.path;
        id--;
        this.newPage.emit({ newPage: [this.category.path, id] });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrevNextComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrevNextComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PrevNextComponent.prototype, "newPage", void 0);
    PrevNextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prev-next',
            template: __webpack_require__(/*! ./prev-next.component.html */ "./src/app/prev-next/prev-next.component.html"),
            styles: [__webpack_require__(/*! ./prev-next.component.css */ "./src/app/prev-next/prev-next.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrevNextComponent);
    return PrevNextComponent;
}());



/***/ }),

/***/ "./src/app/services/swapi.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/swapi.service.ts ***!
  \*******************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SwapiService = (function () {
    function SwapiService(http) {
        this.http = http;
        this.baseUrl = 'https://swapi.dev/api/';
    }
    // "people": "http://swapi.co/api/people/",
    // "planets": "http://swapi.co/api/planets/",
    // "films": "http://swapi.co/api/films/",
    // "species": "http://swapi.co/api/species/",
    // "vehicles": "http://swapi.co/api/vehicles/",
    // "starships": "http://swapi.co/api/starships/"
    SwapiService.prototype.getRoot = function (wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl;
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPeople = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'people/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPlanets = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'planets/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getFilms = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'films/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getSpecies = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'species/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getVehicles = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'vehicles/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getStarships = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'starships/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPerson = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'people/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPlanet = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'planets/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getFilm = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'films/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getSpecie = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'species/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getVehicle = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'vehicles/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getStarship = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'starships/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPersonSchema = function () {
        var completeUrl = this.baseUrl + 'people/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPlanetSchema = function () {
        var completeUrl = this.baseUrl + 'planets/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getFilmSchema = function () {
        var completeUrl = this.baseUrl + 'films/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getSpecieSchema = function () {
        var completeUrl = this.baseUrl + 'species/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getVehicleSchema = function () {
        var completeUrl = this.baseUrl + 'vehicles/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getStarshipSchema = function () {
        var completeUrl = this.baseUrl + 'starships/schema';
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getCall = function (url) {
        console.log(url);
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SwapiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SwapiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error._body : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMsg);
    };
    SwapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SwapiService);
    return SwapiService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/victorch/victor/star-wars-cards/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map