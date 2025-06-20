import { Avatar, Group, Paper, Text } from '@mantine/core';

export const Sidebar = () => {
  return (
    <aside>
      <Paper withBorder radius='md' p='md'>
        <Text c='dimmed'>Total posts this week</Text>
        <Text size='xl'>14</Text>
      </Paper>
      <Paper withBorder radius='md' p='md' mt='md'>
        <Text c='dimmed'>Most active authors</Text>
        <Group mt='md'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Avatar key={index} />
          ))}
        </Group>
      </Paper>
    </aside>
  );
};
