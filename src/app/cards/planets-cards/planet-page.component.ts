import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../../services/swapi.service';
import { BatchComponent } from '../../batch/batch.component';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.css']
})
export class PlanetPageComponent implements OnInit {

  card: any;
  url = 'https://swapi.co/api/';
  batch: BatchComponent = new BatchComponent();

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {
    this.swapi = swapi;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.swapi.getPlanet(params.id).subscribe(res => {

        this.card = res;
        this.setImg(res);
        this.batch.call(res, this.swapi, this.batch);

        if (res) {
          document.querySelector('app-loading').classList.add('hide');
          document.querySelector('.main-card').classList.add('scale-in');
        }
      }, err => { throw new Error(err.message); });
    });
  }

  private setImg(data) {
    data.img = '/assets/ver-planets.png';
  }
}

