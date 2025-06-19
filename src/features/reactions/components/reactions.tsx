import { useReactions } from '@/lib/reactions';
import { useToggleReaction } from '../api/toggle-reaction';
import { Popover, Group, ActionIcon } from '@mantine/core';
import { useState } from 'react';

type ReactionsProps = {
  postId: number;
  userReaction?: string;
};

export const Reactions = ({ postId, userReaction }: ReactionsProps) => {
  const [opened, setOpened] = useState(false);
  const reactionsQuery = useReactions({});
  const reactionsMutation = useToggleReaction();

  // Display either the user's current reaction or "LIKE" as default
  const displayReaction = userReaction || 'LIKE';

  // Get emoji for the reaction
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
        return '👍';
    }
  };

  const handleReactionClick = () => {
    if (userReaction) {
      reactionsMutation.mutate({ PostID: postId, ReactionType: userReaction });
    } else {
      reactionsMutation.mutate({ PostID: postId, ReactionType: 'LIKE' });
    }
  };

  const handleReactionSelect = (reaction: string) => {
    reactionsMutation.mutate({ PostID: postId, ReactionType: reaction });
    setOpened(false);
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position='top'
      shadow='md'
      offset={1}
      transitionProps={{ transition: 'pop' }}
      onClose={() => setOpened(false)}
    >
      <Popover.Target>
        <ActionIcon
          color={userReaction ? 'blue' : '#fff'}
          variant={userReaction ? 'light' : 'transparent'}
          onClick={handleReactionClick}
          onMouseEnter={() => setOpened(true)}
        >
          {getReactionEmoji(displayReaction)}
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Group gap={3}>
          {reactionsQuery.data?.map((reaction) => (
            <ActionIcon
              key={reaction}
              color={reaction === userReaction ? 'blue' : '#fff'}
              variant={reaction === userReaction ? 'light' : 'transparent'}
              onClick={() => handleReactionSelect(reaction)}
            >
              {getReactionEmoji(reaction)}
            </ActionIcon>
          ))}
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};
