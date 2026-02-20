import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAgency } from './digital-agency';

describe('DigitalAgency', () => {
  let component: DigitalAgency;
  let fixture: ComponentFixture<DigitalAgency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalAgency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalAgency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
