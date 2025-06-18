import { useFileDialog } from '@/hooks/useFileDialog';
import { useCreatePost } from '../api/create-post';
import { getBase64 } from '@/helpers/getBase64';

export const CreatePost = () => {
  const fileDialog = useFileDialog({ multiple: false });

  const createPostMutation = useCreatePost({
    mutationConfig: {
      onSuccess: () => {
        console.log('Post created successfully');
      },
      onError: (error) => {
        console.error('Error creating post:', error);
      }
    }
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('content');
    const file = fileDialog.value?.item(0);

    if (typeof content !== 'string' || content.trim() === '') {
      return;
    }

    if (!file && !content) {
      return;
    }

    let fileJson = '';
    try {
      if (file) {
        try {
          const base64 = await getBase64(file);
          const fileDto = {
            FileName: file.name,
            FileType: file.type,
            FileData: base64,
            FileSize: file.size
          };
          fileJson = JSON.stringify([fileDto]);
        } catch (fileError) {
          console.error('Error processing file:', fileError);
          // Show user-friendly error about file processing
          return;
        }
      }

      createPostMutation.mutate({
        Content: content,
        FilesJson: fileJson
      });

      form.reset();
      fileDialog.reset();
    } catch (e) {
      console.error('Error creating post:', e);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor='post-content'>Content:</label>
        <input type='text' name='content' placeholder='Enter post content' />
        <button disabled={createPostMutation.isPending} type='submit'>
          {createPostMutation.isPending ? 'Loading...' : 'Create Post'}
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => {
            fileDialog.open({ multiple: false, accept: 'image/*' });
          }}
        >
          Add File
        </button>
        {fileDialog.value && (
          <div>
            <p>Selected File: {fileDialog.value.item(0)?.name}</p>
            <button onClick={fileDialog.reset}>Remove File</button>
          </div>
        )}
      </div>
    </div>
  );
};
