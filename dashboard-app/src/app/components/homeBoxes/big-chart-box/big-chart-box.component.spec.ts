import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigChartBoxComponent } from './big-chart-box.component';

describe('BigChartBoxComponent', () => {
  let component: BigChartBoxComponent;
  let fixture: ComponentFixture<BigChartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigChartBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigChartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
