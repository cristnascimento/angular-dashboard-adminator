import { Inject, Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';

declare var $: any;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit, AfterViewInit {
  @ViewChild("search1",  {static: false}) searchInput: ElementRef;
  status: boolean = false;

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

  ngOnInit(): void {
    //this.ngAfterViewInit();
  }

  ngOnChanges(): void {
    //this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    console.log("loading heyhey...");
    //const ps = new PerfectScrollbar('#heyhey');

    const scrollables =  this.elementRef.nativeElement.querySelectorAll('.scrollable');
    if (scrollables.length > 0) {
      console.log("LENGTH: " + scrollables.length);
      scrollables.forEach( el => {
        new PerfectScrollbar(el);
      });
    }

    $('.email-side-toggle').on('click', e => {
      $('.email-app').toggleClass('side-active');
      e.preventDefault();
    });
  
    $('.email-list-item, .back-to-mailbox').on('click', e => {
      $('.email-content').toggleClass('open');
      e.preventDefault();
    });
  }
}

