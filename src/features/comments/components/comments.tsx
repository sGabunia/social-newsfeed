import { CommentsList } from './comments-list';
import { CreateComment } from './create-comment';

type CommentsProps = {
  postId: number;
};

export const Comments = ({ postId }: CommentsProps) => {
  return (
    <>
      <CreateComment postId={postId} />
      <CommentsList postId={postId} />
    </>
  );
};
