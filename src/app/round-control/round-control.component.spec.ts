import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundControlComponent } from './round-control.component';

describe('RoundControlComponent', () => {
  let component: RoundControlComponent;
  let fixture: ComponentFixture<RoundControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
