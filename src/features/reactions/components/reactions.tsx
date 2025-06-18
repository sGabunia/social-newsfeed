import { useReactions } from '@/lib/reactions';
import { useToggleReaction } from '../api/toggle-reaction';

type ReactionsProps = {
  postId: number;
  userReaction?: string;
};

export const Reactions = ({ postId, userReaction }: ReactionsProps) => {
  const reactionsQuery = useReactions({});
  const reactionsMutation = useToggleReaction();
  return (
    <div>
      {reactionsQuery.data?.map((reaction) => {
        return (
          <button
            key={reaction}
            style={{
              backgroundColor: userReaction === reaction ? 'lightblue' : 'transparent'
            }}
            onClick={() => {
              reactionsMutation.mutate({ PostID: postId, ReactionType: reaction });
            }}
          >
            {reaction}
          </button>
        );
      })}
    </div>
  );
};
