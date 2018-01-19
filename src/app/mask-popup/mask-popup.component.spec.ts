import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskPopupComponent } from './mask-popup.component';

describe('MaskPopupComponent', () => {
  let component: MaskPopupComponent;
  let fixture: ComponentFixture<MaskPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
