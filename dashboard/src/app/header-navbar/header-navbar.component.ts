import { Inject, Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
  @ViewChild("search1",  {static: false}) searchInput: ElementRef;
  status: boolean = false;

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  clickEvent(e): void {
    e.preventDefault();
    this.status = !this.status;
    setTimeout(() => this.searchInput.nativeElement.focus());
  }

}
