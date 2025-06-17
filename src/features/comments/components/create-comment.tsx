type CreateCommentProps = {
  postId: number;
};

export const CreateComment = ({ postId }: CreateCommentProps) => {
  return (
    <div>
      <h4>Create Comment for post {postId}</h4>
    </div>
  );
};
