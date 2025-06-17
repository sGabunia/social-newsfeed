import { CreatePost } from '@/features/posts/components/create-post';
import { PostsList } from '@/features/posts/components/posts-list';

const Posts = () => {
  return (
    <div>
      <CreatePost />
      <PostsList />
    </div>
  );
};

export default Posts;
