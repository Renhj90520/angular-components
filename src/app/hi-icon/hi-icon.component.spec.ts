import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiIconComponent } from './hi-icon.component';

describe('HiIconComponent', () => {
  let component: HiIconComponent;
  let fixture: ComponentFixture<HiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
