import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteRateComponent } from './vote-rate.component';

describe('VoteRateComponent', () => {
  let component: VoteRateComponent;
  let fixture: ComponentFixture<VoteRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
