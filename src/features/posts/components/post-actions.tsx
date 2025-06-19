import { useState } from 'react';
import { Group, Button, Box } from '@mantine/core';

type PostActionsProps = {
  reactionSection: React.ReactNode;
  commentSection: React.ReactNode;
};

export const PostActions = ({ reactionSection, commentSection }: PostActionsProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Box w={'100%'}>
      <Group justify='space-between' align='center'>
        {reactionSection}

        <Button variant='subtle' onClick={() => setShowComments((prev) => !prev)}>
          Show Comments
        </Button>
      </Group>

      {commentSection && showComments && <div>{commentSection}</div>}
    </Box>
  );
};
