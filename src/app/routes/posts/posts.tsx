import { CreatePost } from '@/features/posts/components/create-post';
import { PostsList } from '@/features/posts/components/posts-list';
import { useUser } from '@/lib/auth';

const Posts = () => {
  const user = useUser();
  // Most likely, the user is already authenticated at this point. Faking as user already logged in.

  if (user.isLoading) {
    return <div>Initial Loading...</div>;
  }

  if (!user.data) {
    return null;
  }
  return (
    <div>
      <CreatePost />
      <PostsList />
    </div>
  );
};

export default Posts;
