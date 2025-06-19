import { useUser } from '@/lib/auth';
import { Avatar, Group, Paper, TextInput } from '@mantine/core';
import { CreatePostModal } from './create-post-modal';
import { useState } from 'react';

export const CreatePost = () => {
  const user = useUser();
  const [modalOpened, setModalOpened] = useState(false);

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  return (
    <Paper shadow='xs' p='md' radius={16} withBorder>
      <Group>
        <Avatar size={50} src={user.data?.AvatarUrl} />
        <TextInput radius={15} flex={1} onClick={handleModalOpen} />
      </Group>
      <CreatePostModal opened={modalOpened} onClose={handleModalClose} />
    </Paper>
  );
};
