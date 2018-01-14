import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css'],
  animations: [trigger('bounceY', [
    state('hide', style({ transform: 'translateY(-200px)' })),
    state('show', style({ transform: 'translateY(0px)' })),
    transition('show=>hide', animate('300ms 500ms ease-out')),
    transition('hide=>show', animate('900ms', keyframes([
      style({ transform: 'translateY(-205px)', offset: 0 }),
      style({ transform: 'translateY(-100px)', offset: .4 }),
      style({ transform: 'translateY(0px)', offset: .55 }),
      style({ transform: 'translateY(-52px)', offset: .65 }),
      style({ transform: 'translateY(0px)', offset: .75 }),
      style({ transform: 'translateY(-25px)', offset: .82 }),
      style({ transform: 'translateY(0px)', offset: .87 }),
      style({ transform: 'translateY(-12px)', offset: .92 }),
      style({ transform: 'translateY(0px)', offset: .97 }),
      style({ transform: 'translateY(0px)', offset: 1 }),
    ])))
  ]),
  trigger('downdely400', [
    state('show', style({ transform: 'translateY(0)' })),
    state('hide', style({ transform: 'translateY(-200px)' })),
    transition('hide=>show', animate('200ms 400ms ease-in-out')),
    transition('show=>hide', animate('200ms 100ms ease-in-out')),
  ]),
  trigger('downdely200', [
    state('show', style({ transform: 'translateY(0px)' })),
    state('hide', style({ transform: 'translateY(-200px)' })),
    transition('hide=>show', animate('200ms 200ms ease-in-out')),
    transition('show=>hide', animate('200ms 200ms ease-in-out')),
  ]),
  trigger('downdely0', [
    state('show', style({ transform: 'translateY(0px)' })),
    state('hide', style({ transform: 'translateY(-200px)' })),
    transition('hide=>show', animate('200ms ease-in-out')),
    transition('show=>hide', animate('200ms 300ms ease-in-out'))
  ])
  ]
})
export class GalleryItemComponent implements OnInit {
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
