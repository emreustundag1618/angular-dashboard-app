import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartBoxComponent } from './line-chart-box.component';

describe('LineChartBoxComponent', () => {
  let component: LineChartBoxComponent;
  let fixture: ComponentFixture<LineChartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineChartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
