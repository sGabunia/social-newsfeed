import { useReactions } from '@/lib/reactions';
import { useToggleReaction } from '../api/toggle-reaction';
import { ActionIcon, Button, Menu } from '@mantine/core';
import { useState } from 'react';
import { ReactionIcon } from './reaction-icon';

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
    <Menu
      opened={opened}
      onChange={setOpened}
      position='top'
      shadow='md'
      trigger='hover'
      openDelay={300}
      closeDelay={150}
      offset={1}
      transitionProps={{ transition: 'pop' }}
      onClose={() => setOpened(false)}
    >
      <Menu.Target>
        <Button
          color={userReaction ? 'blue' : '#fff'}
          variant={userReaction ? 'light' : 'transparent'}
          onClick={handleReactionClick}
          size='md'
        >
          <ReactionIcon reactionType={displayReaction} />
        </Button>
      </Menu.Target>
      <Menu.Dropdown style={{ display: 'flex' }}>
        {reactionsQuery.data?.map((reaction) => (
          <Menu.Item
            key={reaction}
            onClick={() => handleReactionSelect(reaction)}
            bg={reaction === userReaction ? 'lightblue' : 'transparent'}
          >
            <ActionIcon size='xs' variant={reaction === userReaction ? 'light' : 'transparent'}>
              {getReactionEmoji(reaction)}
            </ActionIcon>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
