import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  active1 = true;
  active2 = false;
  constructor() { }

  ngOnInit() {
  }
  doactive1() {
    this.active1 = true;
    this.active2 = false;
  }
  doactive2() {
    this.active1 = false;
    this.active2 = true;
  }
}
