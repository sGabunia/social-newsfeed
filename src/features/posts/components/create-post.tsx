import { useCreatePost } from "../api/create-post";


export const CreatePost = () => {
  const createPostMutation = useCreatePost({
    mutationConfig: {
      onSuccess: () => {
        console.log('Post created successfully');
      },
      onError: (error) => {
        console.error('Error creating post:', error);
      }
    }
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Temporarily use without `useForm` for simplicity

    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('content');

    if (typeof content !== 'string' || content.trim() === '') {
      console.error('Content is required');
      return;
    }

    createPostMutation.mutate({
      Content: content 
    })

    form.reset();
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='post-content'>Content:</label>
        <input
          type='text'
          name="content"
          placeholder='Enter post content'
        />
        <button type='submit'>{createPostMutation.isPending ? 'Loading...' : 'Create Post'}</button>
      </form>
    </div>
  );
};
