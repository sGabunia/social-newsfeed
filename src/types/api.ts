export type Post = {
  PostID: number;
  Content: string;
  AuthorID: number;
  AuthorFirstName: string;
  AuthorLastName: string;
  AuthorAvatarUrl: string;
  TotalReactions: number;
  TotalComments: number;
  CreateTime: string;
  PostFiles: PostFile[];
  Reactions: Reactions;
  LastReactionAuthorID: number;
  LastReactionAuthor: string;
};

export type PostFile = {
  PostFileID: number;
  FileName: string;
  FileType: string;
  FileUrl: string;
};

export type Reactions = {
  ANGRY: number;
  LAUGH: number;
  LIKE: number;
  LOVE: number;
  SAD: number;
  WOW: number;
};

export type User = {
  UserID: number;
  FirstName: string;
  LastName: string;
  AvatarUrl: string;
};

export type Comment = {
  CommentID: number;
  ParentCommentID: any;
  PostID: number;
  AuthorID: number;
  AuthorFirstName: string;
  AuthorLastName: string;
  AuthorAvatar: string;
  Content: string;
  IsAuthor: boolean;
  TotalReactions: number;
  TotalReplies: number;
  UserReaction: number;
  CreateTime: string;
  Reactions: Reactions;
  Comments: Comment[];
};
