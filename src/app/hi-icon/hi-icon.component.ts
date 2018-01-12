import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-hi-icon',
  templateUrl: './hi-icon.component.html',
  styleUrls: ['./hi-icon.component.css'],
  animations: [
    trigger('flip', [transition('*=>*', animate('3s ease-in-out', style({ transform: 'rotateY(360deg)' })))])
  ]
})
export class HiIconComponent implements OnInit {
  @Input() icon;
  constructor() { }

  ngOnInit() {
  }

}
