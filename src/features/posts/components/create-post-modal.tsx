import { useFileDialog } from '@/hooks/useFileDialog';
import { useCreatePost } from '../api/create-post';
import { getBase64 } from '@/helpers/getBase64';
import { Modal, Text, Textarea, Button, ActionIcon, Group, Box } from '@mantine/core';
import { FileUploadIcon } from '@/components/icons/file-upload-icon';
import XCircleIcon from '@/components/icons/x-circle-icon';

type CreatePostModalProps = {
  onClose: () => void;
  opened: boolean;
};

export const CreatePostModal = ({ opened, onClose }: CreatePostModalProps) => {
  const fileDialog = useFileDialog({ multiple: false });

  const reset = () => {
    fileDialog.reset();
    onClose();
  };

  const createPostMutation = useCreatePost({
    mutationConfig: {
      onSuccess: () => {
        reset();
      },
      onError: () => {
        reset();
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
        FilesJson: fileJson || undefined
      });

      form.reset();
    } catch (e) {
      console.error('Error creating post:', e);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text size='lg'>Create Post</Text>}
      radius={16}
      size='lg'
    >
      <form onSubmit={onSubmit}>
        <Textarea
          name='content'
          autosize
          minRows={7}
          placeholder='What would you like to talk about today?'
        />
        <Box mt={20}>
          <ActionIcon
            onClick={() => {
              fileDialog.open({ multiple: false, accept: 'image/*' });
            }}
            color='#fff'
          >
            <FileUploadIcon />
          </ActionIcon>
        </Box>
        {fileDialog.value?.item && (
          <Group>
            <Text>{fileDialog.value.item(0)?.name} </Text>
            <ActionIcon color='#fff' onClick={fileDialog.reset}>
              <XCircleIcon />
            </ActionIcon>
          </Group>
        )}
        <Box mt={20}>
          <Button
            fullWidth
            color='#32B45F'
            disabled={createPostMutation.isPending}
            type='submit'
            loading={createPostMutation.isPending}
          >
            {createPostMutation.isPending ? 'Loading...' : 'Post'}
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
