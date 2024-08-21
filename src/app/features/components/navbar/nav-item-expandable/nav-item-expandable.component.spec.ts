import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemExpandableComponent } from './nav-item-expandable.component';

describe('NavItemExpandableComponent', () => {
  let component: NavItemExpandableComponent;
  let fixture: ComponentFixture<NavItemExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemExpandableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavItemExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
