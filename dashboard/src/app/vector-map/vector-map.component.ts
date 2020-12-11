import { Component, OnInit, AfterViewInit } from '@angular/core';

import {initVectorMaps} from './vectorMaps/index';

@Component({
  selector: 'app-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    initVectorMaps();
  }

}
