import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemAnimateComponent } from './gallery-item-animate.component';

describe('GalleryItemAnimateComponent', () => {
  let component: GalleryItemAnimateComponent;
  let fixture: ComponentFixture<GalleryItemAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
