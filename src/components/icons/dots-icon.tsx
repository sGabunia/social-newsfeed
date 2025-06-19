import type { SVGProps } from 'react';

const DotsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <path
      stroke='#717680'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.7}
      d='M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15.833 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM4.166 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z'
    />
  </svg>
);
export default DotsIcon;
