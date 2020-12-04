import { Component, OnInit, AfterViewInit } from '@angular/core';
import {initCharts} from './initChars';
import {initEasyPieChart} from './easyPieChart/index';
import {initSparkLines} from './initSparkLines';

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
    //initSparkLines();
  }

}