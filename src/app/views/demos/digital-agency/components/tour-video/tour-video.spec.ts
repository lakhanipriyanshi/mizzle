import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVideo } from './tour-video';

describe('TourVideo', () => {
  let component: TourVideo;
  let fixture: ComponentFixture<TourVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
