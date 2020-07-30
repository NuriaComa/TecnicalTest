import { UserI } from '../../users/models/user.interface';

export interface CommentsI {
  id: string;
  message: string;
  owner: UserI;
  publishDate: string;
}
