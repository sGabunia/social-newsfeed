import { useUser } from '@/lib/auth';
import { Text } from '@mantine/core';

export const Welcome = () => {
  const user = useUser();

  return (
    <header>
      <Text size='xl'>Welcome, {user.data?.FirstName || 'Guest'}!</Text>
      <Text size='sm' c='dimmed'>
        Hello! Home you're having fantastic day!
      </Text>
    </header>
  );
};
