import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ]
})

export class PaginationComponent implements OnInit {

  private pagerTotalItems: number;
  private pagerPageSize: number;

  totalPages: number;
  pages: number[] = [];
  currentPage = 1;
  isVisible = false;
  previousEnabled = false;
  nextEnabled = true;

  @Input() get pageSize(): number {
    return this.pagerPageSize;
  }

  set pageSize(size: number) {
    this.pagerPageSize = size;
    this.update();
  }

  @Input() get totalItems(): number {
    return this.pagerTotalItems;
  }

  set totalItems(itemCount: number) {
    this.pagerTotalItems = itemCount;
    this.update();
  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  update() {
    if (this.pagerTotalItems && this.pagerPageSize) {
      this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
      this.isVisible = true;
      if (this.totalItems >= this.pageSize) {
        for (let i = 1; i < this.totalPages + 1; i++) {
          this.pages.push(i);
        }
      }
      return;
    }

    this.isVisible = false;
  }

  previousNext(direction: number, event?: MouseEvent) {
    let page: number = this.currentPage;
    if (direction === -1) {
        if (page > 1) { page--; }
    } else {
        if (page < this.totalPages) { page++; }
    }
    this.changePage(page, event);
  }

  changePage(page: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (this.currentPage === page) { return; }
    this.currentPage = page;
    this.previousEnabled = this.currentPage > 1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
  }

}
