import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
id;
category;

  constructor(private route: ActivatedRoute, private router: Router,private swapi: SwapiService) {
    this.swapi = swapi;
    this.route = route;
    this.router = router;
  }

  onPageChange(event){
    let newCategory = event.newPage[0];
    let newId = event.newPage[1];
    this.router.navigate([newCategory, newId])
  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      let section = null;
      this.category = urlSegment[0];
      this.id = urlSegment[1];

      if (this.category) section = this.category.path;

      switch (section) {
        case 'people':
          this.people(this.id.path);
          this.routeUrl = '/person';
          break;
        case 'species':
          this.species(this.id.path);
          this.routeUrl = '/specie';
          break;
        case 'ships':
          this.ships(this.id.path);
          this.routeUrl = '/ship';
          break;
        case 'planets':
          this.planets(this.id.path);
          this.routeUrl = '/planet';
          break;
        case 'vehicles':
          this.vehicles(this.id.path);
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
        this.loaded('films');
      }
    
    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message); });
  }

  people(id) {
    this.swapi.getPeople(id).subscribe(res =>  {
      this.cardsData = res.results;

      this.manageArrows(res)

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-people.png');

      if (res) {
        this.loaded();
      }

    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message);
    });
  }

  species(id) {
    this.swapi.getSpecies(id).subscribe(res =>  {
      this.cardsData = res.results;
      this.manageArrows(res)
      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-species.png');

      if (res) {
        this.loaded();
      }

    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message);
    });
  }

  ships(id) {
    this.swapi.getStarships(id).subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-ships.png');

      if (res) {
        this.loaded();
      }

    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message); });
  }

  vehicles(id) {
    this.swapi.getVehicles(id).subscribe(res =>  {
      this.cardsData = res.results;

      this.cardsData.forEach(element => {
        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-vehicles.png');

      if (res) {
        this.loaded();
      }

    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message); });
  }

  planets(id) {
    this.swapi.getPlanets(id).subscribe(res =>  {
      this.cardsData = res.results;
      this.cardsData.forEach(element => {

        const id = element.url.match(/\d+/);
        element.id = id[0];
      });

      this.cardsData.forEach(element => element.img = '/assets/hor-planets.png');

      if (res) {
        this.loaded();
      }

    }, err => {
      alert('Desculpe, ocorreu um erro');
      throw new Error(err.message); });
  }

  loaded(category = null) {
    document.querySelector('app-loading').classList.add('hide');
    document.querySelector('.cards-container').classList.add('scale-in');

    if(category != 'films'){
      document.querySelector('.arrows').classList.remove('hide');
    }
  }

  manageArrows(pages){
    if(!pages.next){
      document.querySelector('.large.right').classList.add('hide');
    } else{
      document.querySelector('.large.right').classList.remove('hide');
    }
    if(!pages.previous){
      document.querySelector('.large.left').classList.add('hide');
    } else{
      document.querySelector('.large.left').classList.remove('hide');
    }

  }
}
