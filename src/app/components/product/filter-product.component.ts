import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./product.component.css']
})
export class FilterProductComponent implements OnInit {
  @Input() filterMode: string;
  @Output() filter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  changeFilter(filter: string) {
    this.filterMode = filter;
    this.filter.emit(this.filterMode);
  }

}
