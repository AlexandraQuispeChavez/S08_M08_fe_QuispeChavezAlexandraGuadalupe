import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsComponent } from './benefits.component';

describe('BenefitsComponent', () => {
  let component: BenefitsComponent;
  let fixture: ComponentFixture<BenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
