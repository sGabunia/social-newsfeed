import { Box, Button, Flex, TextInput } from '@mantine/core';
import { useCreateComment } from '../api/create-comment';
import SmileIcon from '@/components/icons/smile-icon';
import SubmitCommentIcon from '@/components/icons/submit-comment-icon';

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
    <Box mt={20}>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder='Write your comment'
          name='content'
          radius={20}
          rightSection={<SmileIcon />}
        />
        <Flex justify='flex-end' mt={10}>
          <Button
            type='submit'
            variant='subtle'
            size='compact-sm'
            disabled={createCommentMutation.isPending}
            loading={createCommentMutation.isPending}
          >
            <SubmitCommentIcon />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
