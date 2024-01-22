import { Component, Input } from '@angular/core';
import { BarChartBox } from './bar-chart-box-interface';

@Component({
  selector: 'app-bar-chart-box',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart-box.component.html',
  styleUrl: './bar-chart-box.component.scss'
})
export class BarChartBoxComponent {

  @Input() data!: BarChartBox;
  
}
