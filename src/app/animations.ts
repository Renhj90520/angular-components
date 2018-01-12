import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const swing = trigger('swing', [transition('*=>*', animate('1.6s .3s', keyframes([
    style({ transform: 'rotate(0deg)', offset: 0 }),
    style({ transform: 'rotate(-2deg) scaleY(1.05)', offset: .2 }),
    style({ transform: 'rotate(2deg) scaleY(1)', offset: .35 }),
    style({ transform: 'rotate(-2deg) ', offset: .5 }),
    style({ transform: 'rotate(1deg)', offset: .65 }),
    style({ transform: 'rotate(-1deg)', offset: .8 }),
    style({ transform: 'rotate(0deg)', offset: 1 }),
])))]);
