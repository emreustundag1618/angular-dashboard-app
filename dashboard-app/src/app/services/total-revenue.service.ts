import { Injectable } from '@angular/core';
import { chartBoxRevenue } from '../data';
import { LineChartBox } from '../components/homeBoxes/line-chart-box/line-chart-box-interface';

@Injectable({
  providedIn: 'root'
})

export class TotalRevenueService {

  constructor() { }

  protected totalRevenue: LineChartBox = chartBoxRevenue;

  getTotalRevenue() {
    return this.totalRevenue
  }
}
