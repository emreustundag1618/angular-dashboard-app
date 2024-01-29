import { Component, Input, OnInit } from '@angular/core';
import { Single } from './single.interface';


@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent {
  @Input() data!: Single;
  entries: string[][] | undefined;

  ngOnInit(): void {
    // In angular, @for block couldn't read Object.entries(...), so I used this
    if (this.data.info) {
      this.entries = Object.entries(this.data.info);
    }
    console.log(this.data);
  }

}
