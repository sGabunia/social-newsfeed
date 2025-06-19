import type { SVGProps } from 'react';

const LoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none' {...props}>
    <path
      fill='url(#a)'
      d='M20 37.125c-8.719 0-18.125-5.469-18.125-17.469S11.281 2.188 20 2.188c4.844 0 9.313 1.593 12.625 4.5 3.594 3.187 5.5 7.687 5.5 12.968 0 5.282-1.906 9.75-5.5 12.938C29.306 35.5 24.812 37.125 20 37.125Z'
    />
    <g clipPath='url(#b)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M30.625 17.44c-.037-2.452-1.453-4.854-3.614-5.841-1.097-.5-2.367-.626-3.693-.213-1.115.347-2.236 1.063-3.318 2.193-1.082-1.13-2.203-1.846-3.318-2.193-1.326-.412-2.596-.288-3.693.213-2.161.987-3.577 3.39-3.614 5.84v.012c0 3.57 2.166 6.73 4.457 8.947a19.376 19.376 0 0 0 3.441 2.666c.532.317 1.035.572 1.48.75.425.17.865.297 1.247.297.382 0 .821-.127 1.247-.297.445-.178.948-.433 1.48-.75a19.374 19.374 0 0 0 3.441-2.666c2.291-2.216 4.457-5.377 4.457-8.947v-.012Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient id='a' x1={20} x2={20} y1={2.188} y2={37.125} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#C569CF' />
        <stop offset={1} stopColor='#EE609C' />
      </linearGradient>
      <clipPath id='b'>
        <path fill='#fff' d='M9.375 10h21.25v21.25H9.375z' />
      </clipPath>
    </defs>
  </svg>
);
export default LoveIcon;
