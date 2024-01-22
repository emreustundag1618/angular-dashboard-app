import { Injectable } from '@angular/core';
import { chartBoxProduct } from '../data';
import { LineChartBox } from '../components/homeBoxes/line-chart-box/line-chart-box-interface';

@Injectable({
  providedIn: 'root'
})

export class TotalProductsService {

  constructor() { }

  protected totalProducts: LineChartBox = chartBoxProduct;

  getTotalProducts() {
    return this.totalProducts
  }
}
