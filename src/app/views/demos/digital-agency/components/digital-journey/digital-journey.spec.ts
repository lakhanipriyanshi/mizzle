import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalJourney } from './digital-journey';

describe('DigitalJourney', () => {
  let component: DigitalJourney;
  let fixture: ComponentFixture<DigitalJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalJourney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalJourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
