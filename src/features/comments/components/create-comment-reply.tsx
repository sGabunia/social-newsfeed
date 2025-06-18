import { useCreateCommentReply } from '../api/create-comment-reply';

type CreateCommentReplyProps = {
  postId: number;
  commentId: number;
};

export const CreateCommentReply = ({ postId, commentId }: CreateCommentReplyProps) => {
  const createCommentReplyMutation = useCreateCommentReply({
    PostID: postId,
    mutationConfig: {
      onSuccess: () => {
        console.log('Comment created successfully');
      },
      onError: (error) => {
        console.error('Error creating comment:', error);
      }
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('content');

    if (typeof content !== 'string' || content.trim() === '') {
      console.error('Content is required');
      return;
    }

    createCommentReplyMutation.mutate({
      CommentID: commentId,
      Content: content
    });

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your comment' name='content' />
        <button type='submit' disabled={createCommentReplyMutation.isPending}>
          {createCommentReplyMutation.isPending ? 'Adding ...' : 'Add comment'}
        </button>
      </form>
    </div>
  );
};
