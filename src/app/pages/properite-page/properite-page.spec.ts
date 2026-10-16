import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperitePage } from './properite-page';

describe('ProperitePage', () => {
  let component: ProperitePage;
  let fixture: ComponentFixture<ProperitePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperitePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProperitePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
