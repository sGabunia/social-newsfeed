import { Text } from '@mantine/core';
export const PostCommenters = ({ commenters }: { commenters: number }) => {
  return <Text size='sm' c='gray'>{commenters} Comment</Text>;
};
