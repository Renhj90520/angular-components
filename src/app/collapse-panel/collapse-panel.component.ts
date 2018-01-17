import { Component, OnInit, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.css']
})
export class CollapsePanelComponent implements OnInit {
  @Input() title: string;
  state = false;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  toggle() {
    this.state = !this.state;
    if (this.state) {
      let contentheight = 0;
      const children = this.el.nativeElement.children[1].children;
      for (let i = 0; i < children.length; i++) {
        contentheight += children[i].clientHeight;
      }
      this.el.nativeElement.style.cssText = 'height:' + contentheight + 'px';
    } else {
      this.el.nativeElement.style.cssText = 'height:40px';
    }
  }
}
