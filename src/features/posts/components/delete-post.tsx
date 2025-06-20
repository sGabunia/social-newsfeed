import { Authorization } from '@/lib/authorization';
import { useDeletePost } from '../api/delete-post';
import { ActionIcon, Menu, Text } from '@mantine/core';
import DotsIcon from '@/components/icons/dots-icon';

export const DeletePost = ({ postId, authorId }: { postId: number; authorId: number }) => {
  const deletePostMutation = useDeletePost({});
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
            onClick={() => deletePostMutation.mutate(postId)}
            disabled={deletePostMutation.isPending}
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
