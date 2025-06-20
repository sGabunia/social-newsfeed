import { Avatar, Group, Paper, Text, Box, Flex, Image } from '@mantine/core';
import type React from 'react';
import styles from './post.module.css';
import { TimeFormatter } from '@/components/ui/time-formatter';

type PostProps = {
  author: string;
  content: string;
  createdAt: string;
  avatarUrl: string;
  deleteSection: React.ReactNode;
  postImage?: string;
  reactorsSection?: React.ReactNode;
  actionsSection: React.ReactNode;
};

export const Post = ({
  author,
  content,
  createdAt,
  avatarUrl,
  deleteSection,
  reactorsSection,
  actionsSection,
  postImage
}: PostProps) => {
  return (
    <Paper withBorder radius='md' p='md'>
      <Flex justify='space-between'>
        <Group>
          <Avatar src={avatarUrl} alt='Jacob Warnhalter' radius='xl' />
          <Group>
            <Text fz='sm'>{author}</Text>
            <TimeFormatter createdAt={createdAt} />
          </Group>
        </Group>
        {deleteSection}
      </Flex>
      <Box mt={12} mb={12}>
        <Text size='sm' lineClamp={5} className={styles.root}>
          {content}
        </Text>
      </Box>
      {postImage && (
        <Box>
          <Image src={postImage} alt='post image' loading="lazy" />
        </Box>
      )}
      <Box style={{ borderBottom: '1px solid #f5f5f5' }}>{reactorsSection}</Box>
      <Flex justify='space-between' pt={10}>
        {actionsSection}
      </Flex>
    </Paper>
  );
};
