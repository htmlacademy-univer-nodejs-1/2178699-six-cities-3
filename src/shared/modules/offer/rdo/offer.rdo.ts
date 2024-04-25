import { Expose } from 'class-transformer';
import {Good, Location} from '../../../types/index.js';

export class OfferRdo {
  @Expose()
  public id:string;

  @Expose()
  public title:string;

  @Expose()
  public description:string;

  @Expose()
  public date:string;

  @Expose()
  public city:string;

  @Expose()
  public previewImage:string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium:boolean;

  @Expose()
  public isFavorite:boolean;

  @Expose()
  public bedrooms: number;

  @Expose()
  public maxAdults: number;

  @Expose()
  public rating:number;

  @Expose()
  public type:string;

  @Expose()
  public price:number;

  @Expose()
  public goods: Good[];

  @Expose()
  public authorId:string;

  @Expose()
  public commentsCount:number;

  @Expose()
  public location: Location;
}
