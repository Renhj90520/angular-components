import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollCarouselComponent } from './roll-carousel.component';

describe('RollCarouselComponent', () => {
  let component: RollCarouselComponent;
  let fixture: ComponentFixture<RollCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
