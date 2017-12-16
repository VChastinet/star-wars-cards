import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { SwapiService } from './services/swapi.service';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { PageTemplateComponent } from './page-template/page-template.component';
import { LoadingComponent } from './loading/loading.component';
import { MainCardsComponent } from './cards/main-cards.component';
import { FilmPageComponent } from './cards/film-cards/film-page.component';
import { PersonPageComponent } from './cards/people-cards/person-page.component';
import { SpeciePageComponent } from './cards/species-cards/specie-page.component';
import { ShipPageComponent } from './cards/ships-cards/ship-page.component';
import { VehiclePageComponent } from './cards/vehicles-cards/vehicle-page.component';
import { PlanetPageComponent } from './cards/planets-cards/planet-page.component';
import { PrevNextComponent } from './prev-next/prev-next.component';



@NgModule({
  declarations: [
    AppComponent,
    MainCardsComponent,
    FilmPageComponent,
    PageTemplateComponent,
    LoadingComponent,
    PersonPageComponent,
    SpeciePageComponent,
    ShipPageComponent,
    VehiclePageComponent,
    PlanetPageComponent,
    PrevNextComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MaterializeModule,
    routing
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
