import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenuFullComponent } from './slide-menu-full.component';

describe('SlideMenuFullComponent', () => {
  let component: SlideMenuFullComponent;
  let fixture: ComponentFixture<SlideMenuFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMenuFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMenuFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
