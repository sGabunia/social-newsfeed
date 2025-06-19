import { useState } from 'react';
import { Group, Button, Box } from '@mantine/core';

type CommentActionsProps = {
  reactionSection: React.ReactNode;
  replySection: React.ReactNode;
  reactorsSection: React.ReactNode;
};

export const CommentActions = ({
  reactionSection,
  replySection,
  reactorsSection
}: CommentActionsProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Box>
      <Group>
        {reactionSection}
        {reactorsSection}
        <Button c='#535862' variant='transparent' onClick={() => setShowComments(true)}>
          Reply
        </Button>
      </Group>

      {showComments && <Box>{replySection}</Box>}
    </Box>
  );
};
