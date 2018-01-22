import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerSignComponent } from './corner-sign.component';

describe('CornerSignComponent', () => {
  let component: CornerSignComponent;
  let fixture: ComponentFixture<CornerSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
