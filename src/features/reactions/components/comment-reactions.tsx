import { useReactions } from '@/lib/reactions';
import { useToggleCommentReaction } from '../api/toggle-comment-reaction';
import { ActionIcon, Menu } from '@mantine/core';
import { useState } from 'react';

type CommentReactionsProps = {
  commentId: number;
  postId: number;
  userReaction?: string;
};

export const ToggleCommnetReactions = ({
  commentId,
  postId,
  userReaction
}: CommentReactionsProps) => {
  const [opened, setOpened] = useState(false);
  const reactionsQuery = useReactions({});
  const reactionsMutation = useToggleCommentReaction({ postId });

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
      reactionsMutation.mutate({ CommentID: commentId, ReactionType: userReaction });
    } else {
      reactionsMutation.mutate({ CommentID: commentId, ReactionType: 'LIKE' });
    }
  };

  const handleReactionSelect = (reaction: string) => {
    reactionsMutation.mutate({ CommentID: commentId, ReactionType: reaction });
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
        <ActionIcon
          c={userReaction ? 'blue' : 'grey'}
          variant='transparent'
          onClick={handleReactionClick}
          size='compact-xs'
        >
          Like
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown style={{ display: 'flex' }}>
        {reactionsQuery.data?.map((reaction) => (
          <Menu.Item
            key={reaction}
            onClick={() => handleReactionSelect(reaction)}
            bg={reaction === userReaction ? 'lightblue' : 'transparent'}
          >
            {getReactionEmoji(reaction)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
