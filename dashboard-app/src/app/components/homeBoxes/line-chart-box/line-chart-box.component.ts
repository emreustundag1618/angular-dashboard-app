import { Component, Input } from '@angular/core';
import { LineChartBox } from './line-chart-box-interface';

@Component({
  selector: 'app-line-chart-box',
  standalone: true,
  imports: [],
  templateUrl: './line-chart-box.component.html',
  styleUrl: './line-chart-box.component.scss'
})
export class LineChartBoxComponent {

  @Input() data!: LineChartBox;

}
