import { useDeletePost } from '../api/delete-post';

export const DeletePost = ({ postId }: { postId: number }) => {
  const deletePostMutation = useDeletePost({
    mutationConfig: {
      onSuccess: () => {
        console.log(`Post with ID ${postId} deleted successfully`);
      }
    }
  });
  return (
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
  );
};
