import type { SVGProps } from 'react';
const XCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <g clipPath='url(#a)'>
      <path fill='#535862' d='M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z' />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='m12.5 7.5-5 5m0-5 5 5m5.834-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default XCircleIcon;
