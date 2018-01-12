import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleBoxComponent } from './triangle-box.component';

describe('TriangleBoxComponent', () => {
  let component: TriangleBoxComponent;
  let fixture: ComponentFixture<TriangleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
