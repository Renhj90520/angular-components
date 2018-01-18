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
export const left_fly = trigger('left-fly', [
    state('in', style({ left: '10px', opacity: '1' })),
    state('out', style({ left: '-36px', opacity: '0' })),
    transition('out<=>in', animate('300ms ease'))
]);
export const right_fly = trigger('right-fly', [
    state('in', style({ right: '10px', opacity: '1' })),
    state('out', style({ right: '-36px', opacity: '0' })),
    transition('in<=>out', animate('300ms ease'))
]);
