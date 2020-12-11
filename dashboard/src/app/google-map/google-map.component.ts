import { Component, OnInit, AfterViewInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {initGoogleMaps} from './initGoogleMaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }
  
  //constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("---- google maps-----");
    
    initGoogleMaps();
    
      let urls = [
      {type:"text/javascript", src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA&callback=initMap"},
      
    ];
  
    urls.forEach( item => {
      const s = this.document.createElement('script');
      s.type = item.type;
      s.src = item.src;
      
      if (item.src.includes("maps.googleapis")) {
        s.defer = "defer";
        console.log("adding defer")
      }
      this.elementRef.nativeElement.appendChild(s);
      
    });
    }

}
