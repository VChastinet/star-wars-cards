import { RouterModule, Routes } from '@angular/router';

import { MainCardsComponent } from './cards/main-cards.component';
import { FilmPageComponent } from './cards/film-cards/film-page.component';
import { PersonPageComponent } from './cards/people-cards/person-page.component';
import { SpeciePageComponent } from './cards/species-cards/specie-page.component';
import { ShipPageComponent } from './cards/ships-cards/ship-page.component';
import { VehiclePageComponent } from './cards/vehicles-cards/vehicle-page.component';
import { PlanetPageComponent } from './cards/planets-cards/planet-page.component';

const appRoutes: Routes = [
      { path: '', component: MainCardsComponent },
      { path: 'film/:id', component: FilmPageComponent },
      { path: 'person/:id', component: PersonPageComponent },
      { path: 'specie/:id', component: SpeciePageComponent },
      { path: 'ship/:id', component: ShipPageComponent },
      { path: 'vehicle/:id', component: VehiclePageComponent },
      { path: 'planet/:id', component: PlanetPageComponent },
      { path: 'people/:id', component: MainCardsComponent },
      { path: 'species/:id', component: MainCardsComponent },
      { path: 'ships/:id', component: MainCardsComponent },
      { path: 'vehicles/:id', component: MainCardsComponent },
      { path: 'planets/:id', component: MainCardsComponent },
      { path: '**', redirectTo: '' }
    ];

export const routing = RouterModule.forRoot(appRoutes);
