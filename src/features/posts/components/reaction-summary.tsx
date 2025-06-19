import { Text } from '@mantine/core';

type ReactionSummaryProps = {
  lastReactor?: string;
  totalReactions: number;
};

export const ReactionSummary = ({ lastReactor, totalReactions }: ReactionSummaryProps) => {
  if (totalReactions === 0) {
    return null;
  }

  const reactionSummary = lastReactor
    ? totalReactions > 1
      ? `${lastReactor} and ${totalReactions - 1} ${totalReactions - 1 === 1 ? 'other' : 'others'}`
      : lastReactor
    : `${totalReactions} ${totalReactions === 1 ? 'reaction' : 'reactions'}`;

  return (
    <Text size='sm' c='gray'>
      {reactionSummary ? reactionSummary + ' reacted' : null}
    </Text>
  );
};
