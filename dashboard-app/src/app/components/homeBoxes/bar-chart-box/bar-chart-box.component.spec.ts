import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartBoxComponent } from './bar-chart-box.component';

describe('BarChartBoxComponent', () => {
  let component: BarChartBoxComponent;
  let fixture: ComponentFixture<BarChartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarChartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
