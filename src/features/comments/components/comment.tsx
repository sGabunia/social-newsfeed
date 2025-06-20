import type { Comment } from '@/types/api';
import { CreateCommentReply } from './create-comment-reply';
import { DeleteComment } from './delete-comment';
import { ToggleCommnetReactions } from '@/features/reactions/components/comment-reactions';
import { CommentReactors } from './comment-reactors';
import { Paper, Flex, Group, Text, Avatar, Box } from '@mantine/core';
import { CommentActions } from './coment-action';
import { ReactionIcons } from '@/features/posts/components/reaction-icons';
import { TimeFormatter } from '@/components/ui/time-formatter';

export const CommentView = ({ comment }: { comment: Comment }) => {
  return (
    <Paper withBorder radius='md' p='md'>
      <Flex justify='space-between' p='md'>
        <Group>
          <Avatar src={comment.AuthorAvatar} alt='Jacob Warnhalter' radius='xl' />
          <div>
            <Text fz='sm'>
              {comment.AuthorFirstName} {comment.AuthorLastName}
            </Text>
          </div>
        </Group>
        <Group>
          <TimeFormatter createdAt={comment.CreateTime} />
          <DeleteComment
            commentId={comment.CommentID}
            authorId={comment.AuthorID}
            postId={comment.PostID}
          />
        </Group>
      </Flex>
      <Box>
        <Text size='sm'>{comment.Content}</Text>
      </Box>

      <CommentActions
        reactorsSection={
          <CommentReactors
            commentId={comment.CommentID}
            reactionSummary={
              <ReactionIcons reactions={comment.Reactions} reactionCount={comment.TotalReactions} />
            }
          />
        }
        reactionSection={
          <ToggleCommnetReactions
            commentId={comment.CommentID}
            postId={comment.PostID}
            userReaction={comment.UserReaction}
          />
        }
        replySection={<CreateCommentReply postId={comment.PostID} commentId={comment.CommentID} />}
      />

      {comment.Comments && comment.Comments.length > 0 ? (
        <div>
          {comment.Comments.map((childComment) => (
            <CommentView key={childComment.CommentID} comment={childComment} />
          ))}
        </div>
      ) : null}
    </Paper>
  );
};
