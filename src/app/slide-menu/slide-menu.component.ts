import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css'],
  animations: [trigger('show', [
    state('show', style({
      left: '0'
    })),
    state('hide', style({
      left: '-308px'
    })),
    transition('show=>hide', animate('.3s ease-in-out')),
    transition('hide=>show', animate('.3s ease-in-out'))
  ])]
})
export class SlideMenuComponent implements OnInit {
  show = false;
  state = 'hide';
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    if (this.state === 'hide') {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
