import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slide-menu-full',
  templateUrl: './slide-menu-full.component.html',
  styleUrls: ['./slide-menu-full.component.css'],
  animations: [trigger('slide', [
    state('slidein', style({ 'margin-left': '0px' })),
    state('slideout', style({ 'margin-left': '-166px' })),
    transition('slidein<=>slideout', animate('.5s ease-in-out'))
  ])]
})
export class SlideMenuFullComponent implements OnInit {
  slidestate = 'slideout';
  constructor() { }

  ngOnInit() {
  }

  slidein() {
    this.slidestate = 'slidein';
  }
  slideout(event) {
    if (event.clientX > 166) {
      this.slidestate = 'slideout';
    }
  }
}
