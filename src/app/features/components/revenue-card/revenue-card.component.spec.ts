import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCardComponent } from './revenue-card.component';

describe('RevenueCardComponent', () => {
  let component: RevenueCardComponent;
  let fixture: ComponentFixture<RevenueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
