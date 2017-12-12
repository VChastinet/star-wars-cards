import { Component, OnInit } from '@angular/core';
import { CardInfoService } from '../../services/card-info.service';

@Component({
  selector: 'app-film-cards',
  templateUrl: './film-cards.component.html',
  styleUrls: ['./film-cards.component.css']
})
export class FilmCardsComponent implements OnInit {

  cards: JSON;

  constructor(private service: CardInfoService) {
    service.getInfo('users')
      .subscribe(data => {
        this.cards = data;
      }, err => console.log(err));
  }

  ngOnInit() {
  }

}
