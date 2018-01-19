import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
  selector: 'app-mask-popup',
  templateUrl: './mask-popup.component.html',
  styleUrls: ['./mask-popup.component.css'],
  animations: [trigger('scaleanimate', [
    state('open', style({ opacity: '1', display: 'block', transform: 'scale(1)' })),
    state('close', style({ opacity: '0', display: 'none', transform: 'scale(.1)' })),
    transition('open=>close', [
      group([
        animate('300ms ease-out', style({ opacity: '0' })),
        animate('600ms ease-out', style({ transform: 'scale(.9)', display: 'none' }))])
    ]),
    transition('close=>open', [
      group([
        animate('100ms ease-in', style({ opacity: '1' })),
        animate('600ms 100ms ease-in', style({ transform: 'scale(1)' }))
      ])])
  ])]
})
export class MaskPopupComponent implements OnInit {
  state = 'close';
  maskdisplay = 'none';
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.maskdisplay = 'none';
    this.state = 'close';
  }

  open() {
    this.maskdisplay = 'block';
    this.state = 'open';
  }
}
