import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input() item;
  @Input() expand = false;
  @Output() ontoggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  toggle() {
    this.ontoggle.emit(!this.expand);
    this.expand = !this.expand;
    if (this.expand) {
      let height = 0;
      const children = this.el.nativeElement.children;
      for (let i = 0; i < children.length; i++) {
        height += children[i].clientHeight;
      }
      this.el.nativeElement.style.height = height + 'px';
    } else {
      this.el.nativeElement.style.height = '36px';
    }
  }
}
