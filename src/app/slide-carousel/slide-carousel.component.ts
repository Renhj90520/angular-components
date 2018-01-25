import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';
import { left_fly, right_fly } from '../animations';
@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.css'],
  animations: [left_fly, right_fly]
})
export class SlideCarouselComponent implements OnInit, OnDestroy {

  @Input() items;
  width: number;
  height: number;
  current = 0;
  wrapperWidth: number;
  state = 'out';
  play = true;
  offset = 0;
  playSubscription;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    const init = () => {
      this.width = this.el.nativeElement.clientWidth;
      this.height = this.el.nativeElement.clientHeight;
      this.wrapperWidth = this.width * this.items.length;
    };
    init();
    window.onresize = init;
    this.el.nativeElement.onmouseenter = () => {
      this.state = 'in';
      this.play = false;
    };
    this.el.nativeElement.onmouseleave = () => {
      this.state = 'out';
      this.play = true;
    };
    this.playSubscription = Observable.interval(3000).subscribe(() => {
      if (this.play) {
        this.current++;
        if (this.current >= this.items.length) {
          this.current = 0;
        }
        this.offset = -this.current * this.width;
      }
    });
  }

  prev() {
    this.current--;
    if (this.current < 0) {
      this.current = this.items.length - 1;
    }
    this.offset = -this.current * this.width;
  }
  next() {
    this.current++;
    if (this.current >= this.items.length) {
      this.current = 0;
    }
    this.offset = -this.current * this.width;
  }
  slideTo(index) {
    this.current = index;
    this.offset = -this.current * this.width;
  }
  ngOnDestroy(): void {
    this.playSubscription.unsubscribe();
  }
}
