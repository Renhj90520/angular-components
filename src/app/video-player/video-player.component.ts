import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  animations: [trigger('control-state', [
    state('fadein', style({ opacity: 1 })),
    state('fadeout', style({ opacity: 0 })),
    transition('fadein<=>fadeout', animate('500ms ease-out'))
  ])]
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() thumbUrl: string;
  oper = 'fa-play';
  controlstate = 'fadeout';
  constructor() { }

  ngOnInit() {
  }

  showcontrol() {
    this.controlstate = 'fadein';
  }
  hidecontrol() {
    this.controlstate = 'fadeout';
  }
}
