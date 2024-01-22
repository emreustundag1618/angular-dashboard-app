import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBoxComponent } from './top-box.component';

describe('TopBoxComponent', () => {
  let component: TopBoxComponent;
  let fixture: ComponentFixture<TopBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
