import { CommentsList } from './comments-list';
import { CreateComment } from './create-comment';

type CommentsProps = {
  postId: number;
};

export const Comments = ({ postId }: CommentsProps) => {
  return (
    <div>
      <CommentsList postId={postId} />
      <CreateComment postId={postId} />
    </div>
  );
};
