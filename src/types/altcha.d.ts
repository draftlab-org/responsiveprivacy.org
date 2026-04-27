import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          challengeurl?: string;
          challengejson?: string;
          auto?: 'onload' | 'onsubmit' | 'onfocus' | 'off';
          hidefooter?: boolean;
          hidelogo?: boolean;
          name?: string;
          delay?: number;
          maxnumber?: number;
        },
        HTMLElement
      >;
    }
  }
}
