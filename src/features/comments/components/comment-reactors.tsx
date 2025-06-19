import { Button, Group, Popover, Skeleton, Text } from '@mantine/core';
import { useState } from 'react';
import { useCommentReactors } from '../api/get-comment-reactors';

type CommentReactorsProps = {
  commentId: number;
  reactionSummary?: React.ReactNode;
  reactionIcons?: React.ReactNode;
};

export const CommentReactors = ({ commentId, reactionSummary }: CommentReactorsProps) => {
  const [opened, setOpened] = useState(false);
  const commentReactorsQuery = useCommentReactors({
    commentId,
    queryConfig: {
      enabled: opened
    }
  });

  return (
    <div>
      <Popover opened={opened} onChange={setOpened} withinPortal>
        <Popover.Target>
          <Button
            variant='transparent'
            onMouseEnter={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}
          >
            <Group>{reactionSummary}</Group>
          </Button>
        </Popover.Target>
        <Popover.Dropdown bg='#000' c='#fff'>
          {commentReactorsQuery.isLoading ? (
            <Skeleton radius='md' mb={5} />
          ) : (
            <>
              {commentReactorsQuery.data?.map((reactor) => (
                <Text size='sm' key={reactor.UserID} py={5}>
                  {reactor.FirstName + ' ' + reactor.LastName}
                </Text>
              ))}
              {!commentReactorsQuery.data?.length && (
                <Text size='sm' c='dimmed'>
                  No reactions yet
                </Text>
              )}
            </>
          )}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};
