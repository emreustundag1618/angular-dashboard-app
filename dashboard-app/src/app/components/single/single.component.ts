import { Component, Input, OnInit } from '@angular/core';
import { Single } from './single.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent {
  @Input() data!: Observable<any>;
  entries: string[][] | undefined;

  ngOnInit(): void {
    // In angular, @for block couldn't read Object.entries(...), so I used this
    console.log(this.data)
    
    console.log(this.data);
  }

}
