import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent implements OnInit {

cardsData: any;
routeUrl: string;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {
    this.swapi = swapi;
    this.route = route;
  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      let section = null;

      if (urlSegment[0]) section = urlSegment[0].path;

      switch (section) {
        case 'people':
          this.people();
          this.routeUrl = '/person';
          break;
        case 'species':
          this.species();
          this.routeUrl = '/specie';
          break;
        case 'ships':
          this.ships();
          this.routeUrl = '/ship';
          break;
        case 'planets':
          this.planets();
          this.routeUrl = '/planet';
          break;
        case 'vehicles':
          this.vehicles();
          this.routeUrl = '/vehicle';
          break;
        default:
          this.films();
          this.routeUrl = '/film';
      }
    });
  }

  films() {
    this.swapi.getFilms().subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '../assets/hor-ep' + element.episode_id + '.png');

      this.cardsData.sort((a, b) => a.episode_id - b.episode_id);

      if (res) {
        this.loaded();
      }
    
    }, err => { throw new Error(err.message); });
  }

  people() {
    this.swapi.getPeople().subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-people.png');

      if (res) {
        this.loaded();
      }

    }, err => { throw new Error(err.message); });
  }

  species() {
    this.swapi.getSpecies().subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-species.png');

      if (res) {
        this.loaded();
      }

    }, err => { throw new Error(err.message); });
  }

  ships() {
    this.swapi.getStarships().subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-ships.png');

      if (res) {
        this.loaded();
      }

    }, err => { throw new Error(err.message); });
  }

  vehicles() {
    this.swapi.getVehicles().subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-vehicles.png');

      if (res) {
        this.loaded();
      }

    }, err => { throw new Error(err.message); });
  }

  planets() {
    this.swapi.getPlanets().subscribe(res =>  {
      this.cardsData = res.results;
      this.cardsData.forEach(element => {

        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-planets.png');

      if (res) {
        this.loaded();
      }

    }, err => { throw new Error(err.message); });
  }

  loaded() {
    document.querySelector('app-loading').classList.add('hide');
    document.querySelector('.cards-container').classList.add('scale-in');
  }
}
