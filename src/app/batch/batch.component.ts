import { Component } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-batch',
  template: ''
})
export class BatchComponent {

  people = [];
  planets = [];
  starships = [];
  vehicles = [];
  species = [];
  films = [];

  constructor() { }

  call(data, service: SwapiService, object): any {
    const objVals = Object.values(data);

    const urls = objVals
      .join(',')
      .match(/(\w+:\/\/\w+.\w+\/\w+\/\w+\/\d+\/)/g);

    urls.pop();

    urls.forEach(url => {

      const arrId = url.match(/\d+/);
      const id = Number(arrId[0]);

      if (url.match(/people/)) {

        service.getPerson(id).subscribe(res =>  {
          res.id = id;
          object.people.push(res);

      }, err =>  {
        throw new Error(err.message);
      });
      }

      if (url.match(/planets/)) {

        service.getPlanet(id).subscribe(res =>  {
          res.id = id;
          object.planets.push(res);
        }, err => { throw new Error(err.message); });
      }

      if (url.match(/starships/)) {
        service.getStarship(id)
          .subscribe(res => {
            res.id = id;

          object.starships.push(res);
        }, err => { throw new Error(err.message); });
      }

      if (url.match(/vehicles/)) {
        service.getVehicle(id).subscribe(res =>  {
          res.id = id;
          object.vehicles.push(res);
        }, err => { throw new Error(err.message); });
      }

      if (url.match(/species/)) {
        service.getSpecie(id).subscribe(res => {
          res.id = id;
          object.species.push(res);
        }, err => { throw new Error(err.message); });
      }

      if (url.match(/films/)) {
        service.getFilm(id).subscribe(res =>  {
          res.id = id;
          object.films.push(res);

        }, err =>  {
          throw new Error(err.message);
        });
      }
    });
    return object;
  }
}
