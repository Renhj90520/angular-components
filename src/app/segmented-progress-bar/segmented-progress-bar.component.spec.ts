import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedProgressBarComponent } from './segmented-progress-bar.component';

describe('SegmentedProgressBarComponent', () => {
  let component: SegmentedProgressBarComponent;
  let fixture: ComponentFixture<SegmentedProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentedProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
