import { Component, OnInit, AfterViewInit } from '@angular/core';
import {initCharts} from './index';
import {initEasyPieChart} from './easyPieChart/index';

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
  }

}