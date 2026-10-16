import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDeal } from './best-deal';

describe('BestDeal', () => {
  let component: BestDeal;
  let fixture: ComponentFixture<BestDeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDeal],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
