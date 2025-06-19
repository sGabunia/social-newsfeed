import { Button, Group, Popover, Skeleton, Text } from '@mantine/core';
import { usePostReactors } from '../api/get-post-reactors';
import { useState } from 'react';

type PostReactorsProps = {
  postId: number;
  reactionSummary: React.ReactNode;
  reactionIcons: React.ReactNode;
};

export const PostReactors = ({ postId, reactionSummary, reactionIcons }: PostReactorsProps) => {
  const [opened, setOpened] = useState(false);
  const postReactorsQuery = usePostReactors({
    postId,
    queryConfig: {
      enabled: opened
    }
  });

  return (
    <div>
      <Popover opened={opened} onChange={setOpened} withinPortal>
        <Popover.Target>
          <Button variant='subtle' onClick={() => setOpened((prev) => !prev)}>
            <Group>
              {reactionIcons} {reactionSummary}
            </Group>
          </Button>
        </Popover.Target>
        <Popover.Dropdown bg='#000' c='#fff'>
          {postReactorsQuery.isLoading ? (
            <Skeleton radius='md' mb={5} />
          ) : (
            <>
              {postReactorsQuery.data?.Reactors.map((reactor) => (
                <Text size='sm' key={reactor.UserID} py={5}>
                  {reactor.FirstName + ' ' + reactor.LastName}
                </Text>
              ))}
              {!postReactorsQuery.data?.Reactors.length && (
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
