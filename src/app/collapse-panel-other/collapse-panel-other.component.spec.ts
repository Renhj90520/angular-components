import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsePanelOtherComponent } from './collapse-panel-other.component';

describe('CollapsePanelOtherComponent', () => {
  let component: CollapsePanelOtherComponent;
  let fixture: ComponentFixture<CollapsePanelOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsePanelOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsePanelOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
