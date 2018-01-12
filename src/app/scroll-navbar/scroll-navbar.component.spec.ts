import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavbarComponent } from './scroll-navbar.component';

describe('ScrollNavbarComponent', () => {
  let component: ScrollNavbarComponent;
  let fixture: ComponentFixture<ScrollNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
