import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-gallery-item-animate',
  templateUrl: './gallery-item-animate.component.html',
  styleUrls: ['./gallery-item-animate.component.css'],
  animations: [trigger('fly', [
    state('hide', style({ transform: 'translate(265px,145px) rotate(45deg)' })),
    state('show', style({ transform: 'translate(-80px,-125px) rotate(45deg)' })),
    transition('show<=>hide', animate('200ms ease-in-out'))
  ]),
  trigger('flydelay400', [
    state('show', style({ transform: 'translate(0px,0px)' })),
    state('hide', style({ transform: 'translate(200px,-200px)' })),
    transition('hide=>show', animate('200ms 300ms ease-in-out')),
    transition('show=>hide', animate('200ms ease-in-out')),
  ]),
  trigger('flydelay200', [
    state('show', style({ transform: 'translate(0px,0px)' })),
    state('hide', style({ transform: 'translate(-200px,200px)' })),
    transition('hide=>show', animate('200ms 400ms ease-in-out')),
    transition('show=>hide', animate('200ms ease-in-out')),
  ]),
  trigger('flydelay0', [
    state('show', style({ transform: 'translate(0px,0px)' })),
    state('hide', style({ transform: 'translate(0px,100px)' })),
    transition('hide=>show', animate('200ms 500ms ease-in-out')),
    transition('show=>hide', animate('200ms 100ms ease-in-out'))
  ])
  ]
})
export class GalleryItemAnimateComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() description: string;
  state = 'hide';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.onmouseenter = () => {
      this.state = 'show';
    };
    this.el.nativeElement.onmouseleave = () => {
      this.state = 'hide';
    };
  }
}
