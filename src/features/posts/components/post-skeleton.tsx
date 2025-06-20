import { Box, Stack, Skeleton, Group } from '@mantine/core';

export const PostSkeleton = () => {
  return (
    <Box mb='md'>
      <Stack>
        <Group>
          <Skeleton height={50} circle width={50} />
          <Stack gap='xs'>
            <Skeleton height={16} width={120} />
            <Skeleton height={10} width={80} />
          </Stack>
        </Group>
        <Skeleton height={100} mb='sm' />
      </Stack>
    </Box>
  );
};
