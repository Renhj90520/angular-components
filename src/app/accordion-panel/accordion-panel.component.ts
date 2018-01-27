import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {
  @Input() items;
  states = [];
  current = -1;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    for (let i = 0; i < this.items.length; i++) {
      this.states.push(false);
    }
  }
  toggle(index, expand) {
    if (this.current >= 0 && this.states[this.current] === true) {
      this.el.nativeElement.children[this.current].style.height = '36px';
    }
    for (let i = 0; i < this.states.length; i++) {
      this.states[i] = false;
    }
    this.states[index] = expand;
    this.current = index;
  }

}
