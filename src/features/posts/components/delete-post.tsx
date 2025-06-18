import { Authorization } from '@/lib/authorization';
import { useDeletePost } from '../api/delete-post';

export const DeletePost = ({ postId, authorId }: { postId: number; authorId: number }) => {
  const deletePostMutation = useDeletePost({
    mutationConfig: {
      onSuccess: () => {
        console.log(`Post with ID ${postId} deleted successfully`);
      }
    }
  });
  return (
    <Authorization authorId={authorId}>
      <div>
        <p>Delete Post</p>
        <button
          disabled={deletePostMutation.isPending}
          onClick={() => {
            deletePostMutation.mutate(postId);
          }}
        >
          {deletePostMutation.isPending ? 'Deleting...' : 'Delete Post'}
        </button>
      </div>
    </Authorization>
  );
};
