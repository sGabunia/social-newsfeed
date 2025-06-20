import React from 'react';
import LikeTextIcon from '@/components/icons/like-text-icon';
import LoveTextIcon from '@/components/icons/love-text-icon';
import LaughTextIcon from '@/components/icons/laugh-text-icon';
import WowTextIcon from '@/components/icons/wow-text-icon';
import SadTextIcon from '@/components/icons/sad-text-icon';
import AngryTextIcon from '@/components/icons/angry-text-icon';

type ReactionIconProps = {
  reactionType: string;
  color?: string;
};

export const ReactionIcon = ({ reactionType, color = '#fff' }: ReactionIconProps) => {
  switch (reactionType) {
    case 'LIKE':
      return <LikeTextIcon color={color} />;
    case 'LOVE':
      return <LoveTextIcon color={color} />;
    case 'LAUGH':
      return <LaughTextIcon color={color} />;
    case 'WOW':
      return <WowTextIcon color={color} />;
    case 'SAD':
      return <SadTextIcon color={color} />;
    case 'ANGRY':
      return <AngryTextIcon color={color} />;
    default:
      return <LikeTextIcon color={color} />;
  }
};
