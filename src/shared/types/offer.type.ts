import { City } from './city.type.js';
import { Type } from './type.enum.js';
import { Good } from './good.enum.js';
import { User } from './user.type.js';
import { Comment } from './comment.type.js';
import { Location } from './location.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  imagePreview: string;
  photosHousing: string[];
  isPremium: boolean;
  rating: number;
  type: Type;
  numberRooms: number;
  numberGuests: number;
  price: number;
  conveniences: Good[];
  author: User;
  favoriteUsers: User[]
  comments: Comment[];
  location: Location;
}
