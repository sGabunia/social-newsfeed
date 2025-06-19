import type { SVGProps } from 'react';

const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={21} height={20} fill='none' {...props}>
    <path
      stroke='#535862'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.667}
      d='M7.167 7.917H10.5m-3.333 2.916H13M10.5 17.5a7.5 7.5 0 1 0-6.952-4.68c.068.167.102.25.117.318.015.066.02.114.02.182 0 .069-.012.144-.037.294l-.495 2.965c-.051.31-.077.466-.029.578.042.099.12.177.219.219.112.048.267.022.578-.03l2.965-.494c.15-.025.225-.037.294-.037.068 0 .116.005.182.02.068.015.15.049.318.117.87.353 1.822.548 2.82.548Z'
    />
  </svg>
);
export default CommentIcon;
