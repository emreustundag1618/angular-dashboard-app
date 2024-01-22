import { Component, inject } from '@angular/core';
import { TopDeal } from './top-deal';
import { TopDealsService } from '../../../services/top-deals.service';

@Component({
  selector: 'app-top-box',
  standalone: true,
  imports: [],
  templateUrl: './top-box.component.html',
  styleUrl: './top-box.component.scss',
})
export class TopBoxComponent {
  topDealUsers: TopDeal[] = [];
  topDealService: TopDealsService = inject(TopDealsService);

  constructor() {
    this.topDealUsers = this.topDealService.getTopDeals();
  }
}
