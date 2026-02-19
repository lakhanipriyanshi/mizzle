import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeAgency } from './creative-agency';

describe('CreativeAgency', () => {
  let component: CreativeAgency;
  let fixture: ComponentFixture<CreativeAgency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeAgency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeAgency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
