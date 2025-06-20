import { Text } from '@mantine/core';
export const PostCommenters = ({ commenters }: { commenters: number }) => {
  if (commenters === 0) {
    return null;
  }

  return (
    <Text size='sm' c='gray'>
      {commenters} Comment
    </Text>
  );
};
