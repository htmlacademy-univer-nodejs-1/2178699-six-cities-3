import { Sity } from './sity.type.js';
import { HousingType } from './housing-type.enum.js';
import { ConvenienceType } from './convenience-type.enum.js';
import { User } from './user.type.js';
import { Comment } from './comment.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  sity: Sity;
  imagePreview: string;
  photosHousing: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType
  numberRooms: number;
  numberGuests: number;
  price: number;
  conveniences: ConvenienceType[];
  author: User;
  comments: Comment[];
}
