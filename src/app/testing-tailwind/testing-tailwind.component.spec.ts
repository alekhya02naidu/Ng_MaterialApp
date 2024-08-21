import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTailwindComponent } from './testing-tailwind.component';

describe('TestingTailwindComponent', () => {
  let component: TestingTailwindComponent;
  let fixture: ComponentFixture<TestingTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
