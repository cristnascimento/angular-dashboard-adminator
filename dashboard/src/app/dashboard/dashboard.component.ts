import { Component, OnInit, AfterViewInit } from '@angular/core';
import {initCharts} from './initChars';
import {initEasyPieChart} from './easyPieChart/index';
import {initSparkLines} from './initSparkLines';
import {initSkycons} from './initSkycons';
import {initVectorMaps} from './vectorMaps/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    initCharts();
    initEasyPieChart();
    initSparkLines();
    initSkycons();
    initVectorMaps();
  }

}