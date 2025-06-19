import { Text } from '@mantine/core';

type CommentReactionSummaryProps = {
  totalReactions: number;
};

export const CommentReactionSummary = ({ totalReactions }: CommentReactionSummaryProps) => {
  if (totalReactions === 0) {
    return null;
  }

  return (
    <Text size='sm' c='gray'>
      {totalReactions}
    </Text>
  );
};
