import { Type, Good, City, Location } from '../../../types/index.js';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { CreateUpdateOfferMessage } from './update-offer.messages.js';

export class UpdateOfferDto {
  @MinLength(10, { message: CreateUpdateOfferMessage.title.minLength })
  @MaxLength(100, { message: CreateUpdateOfferMessage.title.maxLength })
  public title?: string;

  @MinLength(20, { message: CreateUpdateOfferMessage.description.minLength })
  @MaxLength(1024, { message: CreateUpdateOfferMessage.description.maxLength })
  public description?: string;

  public city?: City;

  @MaxLength(256, { message: CreateUpdateOfferMessage.previewImage.maxLength })
  public previewImage?: string;

  @IsBoolean({ message: CreateUpdateOfferMessage.isPremium.invalid })
  public isPremium?: boolean;

  @IsEnum(Type, { message: CreateUpdateOfferMessage.type.invalid })
  public type?: Type;

  @IsInt({ message: CreateUpdateOfferMessage.bedrooms.invalidFormat })
  @Min(1, { message: CreateUpdateOfferMessage.bedrooms.minValue })
  @Max(8, { message: CreateUpdateOfferMessage.bedrooms.maxValue })
  public bedrooms?: number;

  @IsInt({ message: CreateUpdateOfferMessage.maxAdults.invalidFormat })
  @Min(1, { message: CreateUpdateOfferMessage.maxAdults.minValue })
  @Max(10, { message: CreateUpdateOfferMessage.maxAdults.maxValue })
  public maxAdults?: number;

  @IsInt({ message: CreateUpdateOfferMessage.price.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.price.minValue })
  @Max(200000, { message: CreateUpdateOfferMessage.price.maxValue })
  public price?: number;

  @IsArray({ message: CreateUpdateOfferMessage.goods.invalidFormat })
  public goods?: Good[];

  public location?: Location;

  @IsArray({ message: CreateUpdateOfferMessage.images.invalidFormat })
  @ArrayMinSize(6, { message: CreateUpdateOfferMessage.images.minLength })
  @ArrayMaxSize(6, { message: CreateUpdateOfferMessage.images.maxLength })
  public images?: string[];
}
