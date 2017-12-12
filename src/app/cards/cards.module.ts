import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardInfoService } from '../services/card-info.service';
import { FilmCardsComponent } from './film-cards/film-cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardsComponent
  ],
  exports: [
    CardsComponent,
    FilmCardsComponent
  ],
  providers: [
    CardInfoService
  ]
})
export class CardsModule { }
