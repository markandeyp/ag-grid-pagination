import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Output() onPrev: EventEmitter<number> = new EventEmitter<number>();
  @Output() onNext: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  prev() {
    this.onPrev.emit(this.currentPage - 1);
  }

  next() {
    this.onNext.emit(this.currentPage + 1);
  }
}
