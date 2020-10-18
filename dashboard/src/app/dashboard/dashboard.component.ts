import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("search1",  {static: false}) searchInput: ElementRef;
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(e): void {
    e.preventDefault();
    this.status = !this.status;
    setTimeout(() => this.searchInput.nativeElement.focus());
  }

}
