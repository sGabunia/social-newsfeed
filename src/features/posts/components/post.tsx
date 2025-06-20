import { Avatar, Group, Paper, Text, Box, Flex } from '@mantine/core';
import type React from 'react';
import styles from './post.module.css';
import { TimeFormatter } from '@/components/ui/time-formatter';

type PostProps = {
  author: string;
  content: string;
  createdAt: string;
  avatarUrl: string;
  deleteSection: React.ReactNode;
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
  actionsSection
}: PostProps) => {
  return (
    <Paper withBorder radius='md' p='md'>
      <Flex justify='space-between' p='md'>
        <Group>
          <Avatar src={avatarUrl} alt='Jacob Warnhalter' radius='xl' />
          <div>
            <Text fz='sm'>{author}</Text>
            <TimeFormatter createdAt={createdAt} />
          </div>
        </Group>
        {deleteSection}
      </Flex>
      <Box>
        <Text size='sm' className={styles.root}>
          {content}
        </Text>
      </Box>
      <Box style={{ borderBottom: '1px solid #f5f5f5' }}>{reactorsSection}</Box>
      <Flex justify='space-between' pt={10}>
        {actionsSection}
      </Flex>
    </Paper>
  );
};
