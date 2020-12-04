import './jquery.easypiechart.min.js';
import * as $ from 'jquery';

export function initEasyPieChart() {
  if ($('.easy-pie-chart').length > 0) {
    $('.easy-pie-chart').easyPieChart({
      onStep(from, to, percent) {
        this.el.children[0].innerHTML = `${Math.round(percent)} %`;
      },
    });
  }
}
