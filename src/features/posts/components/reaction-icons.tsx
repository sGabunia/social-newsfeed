import type { Reactions } from '@/types/api';
import { Group, Box, Text } from '@mantine/core';

type ReactIconProps = {
  reactions: Reactions;
  reactionCount?: number;
};

export const ReactionIcons = ({ reactions, reactionCount }: ReactIconProps) => {
  const validReactions = Object.entries(reactions)
    .filter(([, count]) => count > 0)
    .slice(0, 3);

  if (validReactions.length === 0 && reactionCount === 0) {
    return <Box w={20} />;
  }

  return (
    <>
      <Group gap={5}>
        <Group gap={-4}>
          {validReactions.map(([reactionType]) => (
            <Box key={reactionType}>{getReactionEmoji(reactionType)}</Box>
          ))}
        </Group>
        <Text size='xs' c='dimmed'>
          {reactionCount}
        </Text>
      </Group>
    </>
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
