import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent implements OnInit {

  @Input() rangeheight: string;
  @Output() drag = new EventEmitter();
  // @ViewChild('handler') handler;
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
  }

}
