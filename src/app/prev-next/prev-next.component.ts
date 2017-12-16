import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prev-next',
  templateUrl: './prev-next.component.html',
  styleUrls: ['./prev-next.component.css']
})
export class PrevNextComponent implements OnInit {

@Input() id;
@Input() category;
@Output() newPage = new EventEmitter();



  constructor() {
  }

  ngOnInit() {
  }

  next(){
    let id = this.id.path;
    id++;
    this.newPage.emit({newPage: [this.category.path, id]});

  }

  prev(){
    let id = this.id.path;
    id--;
    this.newPage.emit({newPage: [this.category.path, id]});
  }

}
