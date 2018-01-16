import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent implements OnInit {

  @Input() rangeheight: string;
  @Input() contentHeight: number;
  @Input() panelHeight: number;
  @Output() drag = new EventEmitter();

  handlerHeight: number;
  handlerMargin: number;
  wrapperHeight: number;
  isdrag = false;
  pageY: number;
  constructor(private el: ElementRef) { }

  ngOnInit() {

    this.el.nativeElement.onmousedown = (event) => {
      this.isdrag = true;
      this.pageY = event.pageY;
    };
    this.el.nativeElement.onmousemove = (event) => {
      if (this.isdrag && this.pageY) {
        const movement = event.pageY - this.pageY;
        this.pageY = event.pageY;
        if (movement !== 0) {
          this.drag.emit(event.movementY / this.el.nativeElement.clientHeight);
        }
      }
    };
    this.el.nativeElement.onmouseup = (event) => {
      this.isdrag = false;
      this.pageY = null;
    };
    this.el.nativeElement.onmouseleave = () => {
      this.isdrag = false;
      this.pageY = null;
    };
    this.panelContentChange();
  }

  panelContentChange() {
    const overflowHeight = this.contentHeight - this.panelHeight;
    if (overflowHeight > 0) {
      this.handlerHeight = Math.round(this.panelHeight / this.contentHeight * this.panelHeight);
      this.handlerMargin = -(this.handlerHeight / 2);
      this.wrapperHeight = this.panelHeight - this.handlerHeight - 60;
    }
  }
}
