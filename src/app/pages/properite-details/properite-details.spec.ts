import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperiteDetails } from './properite-details';

describe('ProperiteDetails', () => {
  let component: ProperiteDetails;
  let fixture: ComponentFixture<ProperiteDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperiteDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProperiteDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
