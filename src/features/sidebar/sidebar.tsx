import { Paper, Text } from '@mantine/core';

export const Sidebar = () => {
  return (
    <aside>
      <Paper withBorder radius='md' p='md'>
        <Text>Total posts this week</Text>
        <Text size='xl'>14</Text>
      </Paper>
      <Paper withBorder radius='md' p='md' mt='md'>
        <Text>Most active authors</Text>
      </Paper>
    </aside>
  );
};
