import { Injectable } from '@angular/core';
import { chartBoxUser } from '../data';
import { LineChartBox } from '../components/homeBoxes/line-chart-box/line-chart-box-interface';

@Injectable({
  providedIn: 'root'
})

export class TotalUsersService {

  constructor() { }

  protected totalUsers: LineChartBox = chartBoxUser;

  getTotalUsers() {
    return this.totalUsers
  }
}
