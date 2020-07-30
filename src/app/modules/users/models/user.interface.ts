import { LocationI } from './location.interface';

export interface UsersI {
  data: UserI[];
  limit: number;
  offset: number;
  page: number;
}
export interface UserI {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender?: string;
  email: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  picture?: string;
  location?: LocationI;
}
