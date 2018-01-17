import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collapse-panel-other',
  templateUrl: './collapse-panel-other.component.html',
  styleUrls: ['./collapse-panel-other.component.css']
})
export class CollapsePanelOtherComponent implements OnInit {
  @Input() title: string;
  state = false;
  margin: number;
  clientHeight = 0;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    const children = this.el.nativeElement.children;
    this.clientHeight += children[1].clientHeight;
    this.margin = -this.clientHeight;
  }
  toggleState() {
    this.state = !this.state;
    if (this.state) {
      this.margin = 0;
    } else {
      this.margin = -this.clientHeight;
    }
  }
}
