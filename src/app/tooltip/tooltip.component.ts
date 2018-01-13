import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input() message = '';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    const parent = this.el.nativeElement.parentElement;
    const elOffsetWidth = this.el.nativeElement.clientWidth;
    const elOffsetHeight = this.el.nativeElement.offsetHeight;
    this.el.nativeElement.style.cssText += 'left:' + (- elOffsetWidth / 2 + parent.offsetWidth / 2 - 1) + 'px';
    this.el.nativeElement.style.cssText += 'top:' + (-elOffsetHeight) + 'px';
    const defaultCss = this.el.nativeElement.style.cssText;
    parent.onmouseenter = (event) => {
      if (event.layerY >= 0 || (event.layerY < 0 && Math.abs(event.layerY) > elOffsetHeight)) {
        this.el.nativeElement.style.cssText += 'opacity:1;top:' + (-elOffsetHeight - 10) + 'px';
      }
    };
    parent.onmouseleave = (event) => {
      this.el.nativeElement.style.cssText = defaultCss;
    };
  }
}
