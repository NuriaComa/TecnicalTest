import { UserI } from '../../users/models/user.interface';

export interface PostsI {
  data: PostI[];
  limit: number;
  offset: number;
  page: number;
}

export interface PostI {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: UserI;
}
