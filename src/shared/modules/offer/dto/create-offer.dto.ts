import { City } from '../../../types/city.type.js';
import { HousingType } from '../../../types/housing-type.enum.js';
import { ConvenienceType } from '../../../types/convenience-type.enum.js';
import { User } from '../../../types/user.type.js';

export class CreateOfferDto {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  imagePreview: string;
  photosHousing: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType;
  numberRooms: number;
  numberGuests: number;
  price: number;
  conveniences: ConvenienceType[];
  author: User;
}
