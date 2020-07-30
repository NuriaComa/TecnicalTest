import { UserI } from '../../users/models/user.interface';

export interface PostsI {
  data: PostI[];
  limit: number;
  offset: number;
  page: number;
}

export interface PostI {
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: [];
  publishDate: string;
  owner: UserI;
}
