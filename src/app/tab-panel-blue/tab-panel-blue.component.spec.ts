import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelBlueComponent } from './tab-panel-blue.component';

describe('TabPanelBlueComponent', () => {
  let component: TabPanelBlueComponent;
  let fixture: ComponentFixture<TabPanelBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPanelBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPanelBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
