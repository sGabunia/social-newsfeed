import type { SVGProps } from 'react';

const SmileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <path
      stroke='#535862'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.667}
      d='M6.667 11.667s1.25 1.666 3.333 1.666 3.333-1.666 3.333-1.666M12.5 7.5h.008M7.5 7.5h.008M18.333 10a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Zm-5.416-2.5a.417.417 0 1 1-.834 0 .417.417 0 0 1 .833 0Zm-5 0a.417.417 0 1 1-.834 0 .417.417 0 0 1 .833 0Z'
    />
  </svg>
);
export default SmileIcon;
