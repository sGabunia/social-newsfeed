import { Authorization } from '@/lib/authorization';
import { useDeleteComment } from '../api/delete-comment';

type DeleteCommentProps = {
  commentId: number;
  authorId: number;
  postId: number;
};

export const DeleteComment = ({ commentId, authorId, postId }: DeleteCommentProps) => {
  const deleteCommentMutation = useDeleteComment({
    mutationConfig: {
      onSuccess: () => {
        console.log(`Comment with ID ${commentId} deleted successfully.`);
      },
      onError: (error) => {
        console.error(`Failed to delete comment with ID ${commentId}:`, error);
      }
    },
    CommentID: postId
  });

  return (
    <Authorization authorId={authorId}>
      <button
        disabled={deleteCommentMutation.isPending}
        onClick={() => {
          deleteCommentMutation.mutate(commentId);
        }}
      >
        {deleteCommentMutation.isPending ? 'Deleting...' : 'Delete Comment'}
      </button>
    </Authorization>
  );
};
