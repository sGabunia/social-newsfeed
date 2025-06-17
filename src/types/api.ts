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
