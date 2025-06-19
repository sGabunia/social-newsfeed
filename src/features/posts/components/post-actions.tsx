import { useState } from 'react';
import { Group, Button, Box, Center } from '@mantine/core';
import CommentIcon from '@/components/icons/comment-icon';

type PostActionsProps = {
  reactionSection: React.ReactNode;
  commentSection: React.ReactNode;
};

export const PostActions = ({ reactionSection, commentSection }: PostActionsProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Box w={'100%'}>
      <Group grow justify='space-between' align='center'>
        <Center>
            {reactionSection}
        </Center>

        <Center>
          <Button fullWidth c="#535862" variant='subtle' onClick={() => setShowComments((prev) => !prev)}>
            <CommentIcon /> Comment
          </Button>
        </Center>
      </Group>

      {showComments && <Box>{commentSection}</Box>}
    </Box>
  );
};
