import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  const scrollables = $('.scrollable');
  if (scrollables.length > 0) {
    scrollables.each((index, el) => {
      new PerfectScrollbar(el);
    });
  }
  }

}
