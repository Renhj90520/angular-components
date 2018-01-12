import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('tooltipstate', [
      state('fadein',
        style({ opacity: 1, top: '-56px' })),
      state('fadeout',
        style({ opacity: 0, top: '-40px'})),
      transition('*=>*', animate('.3s ease-in-out'))
    ])
  ]
})
export class TimelineComponent implements OnInit {
  tooltip = 'load more';
  tooltipstate = 'fadeout';
  constructor() { }

  ngOnInit() {
  }
  showtooltip() {
    this.tooltipstate = 'fadein';
  }
  hidetooltip() {
    this.tooltipstate = 'fadeout';
  }

}
