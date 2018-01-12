import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css'],
  animations: [trigger('v_action', [
    state('fadein', style({ opacity: 1, left: 0 })),
    state('fadeout', style({ opacity: 0, left: '200px' })),
    transition('*=>*', animate('.3s ease-in-out')),
  ])]
})
export class TimelineItemComponent implements OnInit {
  mask_state = 'fadeout';
  constructor() { }

  ngOnInit() {
  }

  showmask() {
    this.mask_state = 'fadein';
  }
  hidemask() {
    this.mask_state = 'fadeout';
  }
}
