import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-panel-blue',
  templateUrl: './tab-panel-blue.component.html',
  styleUrls: ['./tab-panel-blue.component.css']
})
export class TabPanelBlueComponent implements OnInit {
  @Input() items;
  current = 0;
  content: string;
  constructor() { }

  ngOnInit() {
    this.active(0);
  }
  active(index) {
    this.current = index;
    this.content = this.items[index].content;
  }
}
