import { useCreateComment } from '../api/create-comment';

type CreateCommentProps = {
  postId: number;
};

export const CreateComment = ({ postId }: CreateCommentProps) => {
  const createCommentMutation = useCreateComment({
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

    createCommentMutation.mutate({
      PostID: postId,
      Content: content
    });

    form.reset();
  };

  return (
    <div>
      <h4>Create Comment for post {postId}</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your comment' name='content' />
        <button type='submit' disabled={createCommentMutation.isPending}>
          {createCommentMutation.isPending ? 'Adding ...' : 'Add comment'}
        </button>
      </form>
    </div>
  );
};
