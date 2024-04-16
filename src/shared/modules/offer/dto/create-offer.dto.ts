import { City, Type, Good, Location } from '../../../types/index.js';

export class CreateOfferDto {
  title: string;
  description: string;
  city: City;
  previewImage: string;
  isPremium: boolean;
  type: Type;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Good[];
  location: Location;
  images: string[];
}
