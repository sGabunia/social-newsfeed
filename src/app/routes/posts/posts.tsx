import { Welcome } from '@/features/header/welcome';
import { CreatePost } from '@/features/posts/components/create-post';
import { PostsList } from '@/features/posts/components/posts-list';
import { useUser } from '@/lib/auth';
import { useReactions } from '@/lib/reactions';

const Posts = () => {
  const user = useUser();
  // Most likely, the user is already authenticated at this point. Faking as user already logged in.

  useReactions({});
  // fetch reactions on the initial load

  if (user.isLoading) {
    return <div>Initial Loading...</div>;
  }

  if (user.error) {
    return <div>Something went wrong</div>;
  }

  if (!user.data) {
    return null;
  }
  return (
    <div>
      <Welcome />
      <CreatePost />
      <PostsList />
    </div>
  );
};

export default Posts;
