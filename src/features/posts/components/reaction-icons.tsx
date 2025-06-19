import type { Reactions } from '@/types/api';
import { Group, Box } from '@mantine/core';

type ReactIconProps = {
  reactions: Reactions;
};

export const ReactionIcons = ({ reactions }: ReactIconProps) => {
  const validReactions = Object.entries(reactions)
    .filter(([, count]) => count > 0)
    .slice(0, 3);

  if (validReactions.length === 0) {
    return null;
  }

  return (
    <Group gap={-4}>
      {validReactions.map(([reactionType]) => (
        <Box key={reactionType}>{getReactionEmoji(reactionType)}</Box>
      ))}
    </Group>
  );
};

const getReactionEmoji = (reactionType: string) => {
  switch (reactionType) {
    case 'LIKE':
      return '👍';
    case 'LOVE':
      return '❤️';
    case 'LAUGH':
      return '😄';
    case 'WOW':
      return '😮';
    case 'SAD':
      return '😢';
    case 'ANGRY':
      return '😡';
    default:
      return '';
  }
};
