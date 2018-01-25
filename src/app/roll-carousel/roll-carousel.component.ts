import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { left_fly, right_fly } from '../animations';
@Component({
  selector: 'app-roll-carousel',
  templateUrl: './roll-carousel.component.html',
  styleUrls: ['./roll-carousel.component.css'],
  animations: [left_fly, right_fly]
})
export class RollCarouselComponent implements OnInit {
  @Input() items;
  @Input() showItemNum: number;
  state = 'out';
  itemwidth: number;
  itemheight: number;
  offset: number;
  wrapperWidth: number;
  current = 0;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.onmouseenter = () => {
      this.state = 'in';
    };
    this.el.nativeElement.onmouseleave = () => {
      this.state = 'out';
    };

    const init = () => {
      this.itemheight = this.el.nativeElement.clientHeight;
      this.itemwidth = this.el.nativeElement.clientWidth / this.showItemNum;
      this.wrapperWidth = this.itemwidth * this.items.length;
    };
    init();
    window.onresize = init;
  }

  prev() {
    if (this.items.length > this.showItemNum) {
      this.current--;
      if (this.current < 0) {
        this.current = this.items.length - this.showItemNum;
      }
      this.offset = -this.current * this.itemwidth;
    }
  }
  next() {
    if (this.items.length > this.showItemNum) {
      this.current++;
      if (this.current > this.items.length - this.showItemNum) {
        this.current = 0;
      }
      this.offset = -this.current * this.itemwidth;
    }
  }
}
