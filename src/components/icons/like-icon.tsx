import type { SVGProps } from 'react';

const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none' {...props}>
    <path
      fill='url(#a)'
      d='M20 37.125c-8.719 0-18.125-5.469-18.125-17.469S11.281 2.188 20 2.188c4.844 0 9.313 1.593 12.625 4.5 3.594 3.187 5.5 7.687 5.5 12.968 0 5.282-1.906 9.75-5.5 12.938C29.306 35.5 24.812 37.125 20 37.125Z'
    />
    <g clipPath='url(#b)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m19.429 10.085-3.973 6.14c.026.187.04.377.04.572v10.406c2.06.61 5.71 1.659 9.33 1.659 3.192 0 5.799-6.865 5.799-9.866 0-3.002-3.002-4.502-4.502-4.502h-3.021l.392-2.806a2.248 2.248 0 0 0-4.065-1.603Zm-5.83 6.712v10.712a2.112 2.112 0 0 1-4.224 0V16.797a2.112 2.112 0 0 1 4.224 0Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='a'
        x1={38.125}
        x2={38.125}
        y1={37.125}
        y2={2.188}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00C6FB' />
        <stop offset={1} stopColor='#005BEA' />
      </linearGradient>
      <clipPath id='b'>
        <path fill='#fff' d='M9.375 8.75h21.25V30H9.375z' />
      </clipPath>
    </defs>
  </svg>
);
export default LikeIcon;
