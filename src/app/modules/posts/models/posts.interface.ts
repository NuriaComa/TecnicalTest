import { UserI } from '../../users/models/user.interface';

export interface PostsI {
  data: PostI[];
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
