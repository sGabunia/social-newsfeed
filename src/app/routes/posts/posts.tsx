import { Welcome } from '@/features/header/welcome';
import { CreatePost } from '@/features/posts/components/create-post';
import { PostsList } from '@/features/posts/components/posts-list';
import { Sidebar } from '@/features/sidebar/sidebar';
import { useUser } from '@/lib/auth';
import { useReactions } from '@/lib/reactions';
import { Container, Grid, Loader, Stack, Text } from '@mantine/core';

const Posts = () => {
  const user = useUser();
  // Most likely, the user is already authenticated at this point. Faking as user already logged in.

  useReactions({});
  // fetch reactions on the initial load

  if (user.isLoading) {
    return (
      <Container size='md' py='xl'>
        <Loader size='lg' />
      </Container>
    );
  }

  if (user.error) {
    return (
      <Container size='md' py='xl'>
        <Text c='red'>Something went wrong</Text>
      </Container>
    );
  }

  if (!user.data) {
    return null;
  }

  return (
    <Container size='lg' p={40}>
      <Welcome />
      <Grid mt='md'>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap='md'>
            <CreatePost />
            <PostsList />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }} pos='sticky' top={0} h='fit-content'>
          <Sidebar />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Posts;
