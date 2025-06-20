import { Box, Button } from '@mantine/core';

export const MainErrorFallback = () => {
  return (
    <Box>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </Box>
  );
};
