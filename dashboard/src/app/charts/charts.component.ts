import { Component, OnInit } from '@angular/core';
import {initCharts} from './initChars';
import {initEasyPieChart} from './easyPieChart/index';
import {initSparkLines} from './initSparkLines';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initCharts();
    initEasyPieChart();
    initSparkLines();
  }

}
