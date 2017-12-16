import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }
}
