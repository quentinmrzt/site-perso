import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild, group
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      style({ position: 'relative' }),
      query(':enter', [style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0
      })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1
        }), animate('0.2s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',

          opacity: 0
        }), animate('0.2s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);
