import { Authorization } from '@/lib/authorization';
import { useDeleteComment } from '../api/delete-comment';
import { ActionIcon, Menu, Text } from '@mantine/core';
import DotsIcon from '@/components/icons/dots-icon';

type DeleteCommentProps = {
  commentId: number;
  authorId: number;
  postId: number;
};

export const DeleteComment = ({ commentId, authorId, postId }: DeleteCommentProps) => {
  const deleteCommentMutation = useDeleteComment({
    mutationConfig: {
      onSuccess: () => {
        console.log(`Comment with ID ${commentId} deleted successfully.`);
      },
      onError: (error) => {
        console.error(`Failed to delete comment with ID ${commentId}:`, error);
      }
    },
    CommentID: postId
  });

  return (
    <Authorization authorId={authorId}>
      <Menu transitionProps={{ transition: 'pop' }} position='bottom-end' withinPortal offset={4}>
        <Menu.Target>
          <ActionIcon variant='subtle' color='#fff'>
            <DotsIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={() => deleteCommentMutation.mutate(commentId)}
            disabled={deleteCommentMutation.isPending}
          >
            <Text c='red' size='sm'>
              Delete
            </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Authorization>
  );
};
