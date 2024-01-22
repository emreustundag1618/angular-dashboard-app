import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartBoxComponent } from './pie-chart-box.component';

describe('PieChartBoxComponent', () => {
  let component: PieChartBoxComponent;
  let fixture: ComponentFixture<PieChartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
