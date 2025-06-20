import { Box, Button, Flex, TextInput } from '@mantine/core';
import { useCreateCommentReply } from '../api/create-comment-reply';
import SmileIcon from '@/components/icons/smile-icon';
import SubmitCommentIcon from '@/components/icons/submit-comment-icon';

type CreateCommentReplyProps = {
  postId: number;
  commentId: number;
};

export const CreateCommentReply = ({ postId, commentId }: CreateCommentReplyProps) => {
  const createCommentReplyMutation = useCreateCommentReply({
    PostID: postId
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('content');

    if (typeof content !== 'string' || content.trim() === '') {
      return;
    }

    createCommentReplyMutation.mutate({
      CommentID: commentId,
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
            disabled={createCommentReplyMutation.isPending}
            loading={createCommentReplyMutation.isPending}
          >
            <SubmitCommentIcon />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
