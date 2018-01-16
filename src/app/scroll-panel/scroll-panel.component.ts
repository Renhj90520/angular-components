import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrls: ['./scroll-panel.component.css'],
  animations: [trigger('scrollbarstate', [
    state('visible', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('visible<=>hide', animate('500ms ease-out'))
  ])]
})
export class ScrollPanelComponent implements OnInit {
  @ViewChild('content') content;
  @ViewChild('scrollbar') scrollbar;
  scrollbarstate = 'hide';
  scrollheight: number;
  barheight = '100%';
  contentheight: number;
  elheight: number;
  offset = 0;
  constructor(private el: ElementRef) {
    el.nativeElement.onmousewheel = (event) => {
      this.scroll(event.deltaY);
    };
  }

  ngOnInit() {
    this.measure();
  }
  scroll(deltaY) {
    if (this.offset <= 0) {
      if (deltaY > 0 && Math.abs(this.offset) < this.scrollheight) {
        this.offset -= Math.min(deltaY, this.scrollheight - Math.abs(this.offset));
        event.preventDefault();
      } else if (deltaY < 0) {
        if (this.offset > deltaY) {
          this.offset = 0;
        } else {
          this.offset -= deltaY;
        }
        if (this.offset !== 0) {
          event.preventDefault();
        }
      }
      this.barheight = 100 - Math.round(Math.abs(this.offset) / this.scrollheight * 100) + '%';
    }
  }
  drag(event) {
    this.scroll(event * this.scrollheight);
  }
  measure() {
    this.contentheight = this.content.nativeElement.clientHeight;
    this.elheight = this.el.nativeElement.clientHeight;

    if (this.contentheight > this.elheight) {
      this.scrollbarstate = 'visible';
      this.scrollheight = this.contentheight - this.elheight;
      this.scrollbar.panelContentChange();
    }
  }
  onContentChange() {
    setTimeout(() => {
      this.measure();
    }, 600);
  }
}
