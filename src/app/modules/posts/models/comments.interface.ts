import { UserI } from '../../users/models/user.interface';

export interface CommentsI {
  data: CommentI[];
  limit: number;
  offset: number;
  page: number;
}

export interface CommentI {
  id: string;
  message: string;
  owner: UserI;
  publishDate: string;
}
