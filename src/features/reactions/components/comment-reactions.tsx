import { useReactions } from '@/lib/reactions';
import { useToggleCommentReaction } from '../api/toggle-comment-reaction';
import { Popover, Group, ActionIcon, Button } from '@mantine/core';
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
        <Button
          c={userReaction ? 'blue' : 'grey'}
          variant={'transparent'}
          onClick={handleReactionClick}
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
          size='compact-xs'
        >
          Like
        </Button>
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
