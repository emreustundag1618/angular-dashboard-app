import { Component } from '@angular/core';
import { PieChartBox } from './pie-chart-box-interface';

@Component({
  selector: 'app-pie-chart-box',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart-box.component.html',
  styleUrl: './pie-chart-box.component.scss'
})
export class PieChartBoxComponent {

  data: PieChartBox[] = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];
}
