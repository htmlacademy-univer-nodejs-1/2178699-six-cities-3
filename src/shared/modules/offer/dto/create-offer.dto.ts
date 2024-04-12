import { HousingType } from '../../../types/housing-type.enum.js';
import { ConvenienceType } from '../../../types/convenience-type.enum.js';

export class CreateOfferDto {
  title: string;
  description: string;
  postDate: Date;
  cityId: string;
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
  authorId: string;
}
