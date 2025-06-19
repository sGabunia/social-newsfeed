import { useState } from 'react';
import { Box, Button, Group, Popover, Skeleton, Text } from '@mantine/core';
import { usePostReactors } from '../api/get-post-reactors';

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
    <Box mt={20} mb={15}>
      <Popover opened={opened} onChange={setOpened} withinPortal>
        <Popover.Target>
          <Button
            variant='transparent'
            size='compact-xs'
            p={0}
            onMouseEnter={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}
          >
            <Group gap={3}>
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
    </Box>
  );
};
