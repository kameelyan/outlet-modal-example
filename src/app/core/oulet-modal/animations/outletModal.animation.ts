import { animate, state, style, transition, trigger, query, animateChild } from '@angular/animations';

export const modalOutletSlideAnimation = trigger('slide', [
    state('closedLeft', style({ transform: 'translate(-100%)' })),
    state('closedRight', style({ transform: 'translate(100%)' })),
    state('open', style({ transform: 'translate(0)' })),
    transition('closedLeft=>open', [animate('0.3s ease')]),
    transition('closedRight=>open', [animate('0.3s ease')]),
    transition('open=>closedLeft', [
        animate('0.3s ease', style({ transform: 'translate(-100%)' }))
    ]),
    transition('open=>closedRight', [animate('0.3s ease', style({ transform: 'translate(100%)' }))])
]);

export const modalOutletDisplayAnimation = trigger('display', [
    state('closedLeft', style({ display: 'none' })),
    state('closedRight', style({ display: 'none' })),
    state('open', style({ display: 'block', pointerEvents: 'auto' })),
    transition('open=>closedRight', [query('@*', [animateChild()], { optional: true })]),
    transition('open=>closedLeft', [query('@*', [animateChild()], { optional: true })])
]);
