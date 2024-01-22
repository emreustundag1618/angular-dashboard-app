import { Injectable } from '@angular/core';
import { chartBoxConversion } from '../data';
import { LineChartBox } from '../components/homeBoxes/line-chart-box/line-chart-box-interface';

@Injectable({
  providedIn: 'root'
})

export class TotalVisitService {

  constructor() { }

  protected totalVisit: LineChartBox = chartBoxConversion;

  getTotalVisit() {
    return this.totalVisit
  }
}