import { Avatar, Group, Paper, Text, Box, Flex } from '@mantine/core';
import type React from 'react';

type PostProps = {
  author: string;
  content: string;
  createdAt: string;
  avatarUrl: string;
  deleteSection: React.ReactNode;
  reactionsSection: React.ReactNode;
  postReactorsSection?: React.ReactNode;
};

export const Post = ({
  author,
  content,
  createdAt,
  avatarUrl,
  deleteSection,
  reactionsSection,
  postReactorsSection
}: PostProps) => {
  return (
    <Paper withBorder radius='md' p='md'>
      <Flex justify='space-between' p='md'>
        <Group>
          <Avatar src={avatarUrl} alt='Jacob Warnhalter' radius='xl' />
          <div>
            <Text fz='sm'>{author}</Text>
            <Text fz='xs' c='dimmed'>
              {createdAt}
            </Text>
          </div>
        </Group>
        {deleteSection}
      </Flex>
      <Box>
        <Text size='sm'>{content}</Text>
      </Box>
      <Box style={{ borderBottom: '1px solid #f5f5f5' }}>{postReactorsSection}</Box>
      <Flex justify='space-between' pt={10}>
        {reactionsSection}
      </Flex>
    </Paper>
  );
};
