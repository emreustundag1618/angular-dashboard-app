import { Component, inject } from '@angular/core';
import { TopBoxComponent } from '../../components/homeBoxes/top-box/top-box.component';
import { LineChartBoxComponent } from '../../components/homeBoxes/line-chart-box/line-chart-box.component';
import { BarChartBoxComponent } from '../../components/homeBoxes/bar-chart-box/bar-chart-box.component';
import { LineChartBox } from '../../components/homeBoxes/line-chart-box/line-chart-box-interface';
import { BarChartBox } from '../../components/homeBoxes/bar-chart-box/bar-chart-box-interface';
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
} from '../../data';
import { PieChartBoxComponent } from '../../components/homeBoxes/pie-chart-box/pie-chart-box.component';
import { BigChartBoxComponent } from '../../components/homeBoxes/big-chart-box/big-chart-box.component';
import { TotalProductsService } from '../../services/total-products.service';
import { TotalRevenueService } from '../../services/total-revenue.service';
import { TotalUsersService } from '../../services/total-users.service';
import { TotalVisitService } from '../../services/total-visit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBoxComponent,
    LineChartBoxComponent,
    PieChartBoxComponent,
    BarChartBoxComponent,
    BigChartBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  totalProductsService: TotalProductsService = inject(TotalProductsService);
  totalUserService: TotalUsersService = inject(TotalUsersService);
  totalVisitService: TotalVisitService = inject(TotalVisitService);
  totalRevenueService: TotalRevenueService = inject(TotalRevenueService);

  chartBoxProduct: LineChartBox;
  chartBoxUser: LineChartBox;
  chartBoxRevenue: LineChartBox;
  chartBoxConversion: LineChartBox;

  constructor( ) {
    this.chartBoxProduct = this.totalProductsService.getTotalProducts();
    this.chartBoxUser = this.totalUserService.getTotalUsers();
    this.chartBoxRevenue = this.totalRevenueService.getTotalRevenue();
    this.chartBoxConversion = this.totalVisitService.getTotalVisit();
  }

  // these ones can also be service implementation later but for now that's it
  visitData: BarChartBox = barChartBoxVisit;
  revenueData: BarChartBox = barChartBoxRevenue;
}
