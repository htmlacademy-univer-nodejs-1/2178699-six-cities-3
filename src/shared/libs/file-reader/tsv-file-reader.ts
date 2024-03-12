import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, HousingType, ConvenienceType, UserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, sityName, sityLatitude, sityLongitude, imagePreview, photosHousing, isPremium, isFavorite, rating, type, numberRooms, numberGuests, price, conveniences, firstname, email, avatarPath, password, usertype]) => ({
        title,
        description,
        postDate: new Date(postDate),
        sity: {
          name: sityName,
          latitude: Number.parseFloat(sityLatitude),
          longitude: Number.parseFloat(sityLongitude),
        },
        imagePreview,
        photosHousing: photosHousing.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseInt(rating, 10),
        type: HousingType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
        numberRooms: Number.parseInt(numberRooms, 10),
        numberGuests: Number.parseInt(numberGuests, 10),
        price: Number.parseInt(price, 10),
        conveniences: conveniences
          .split(';')
          .map((convenience) =>
            ConvenienceType[convenience as 'Breakfast' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge']
          ),
        author: {
          firstname,
          email,
          avatarPath,
          password,
          type: UserType[usertype as 'Regular' | 'Pro']
        },
        comments: []
      }));
  }
}
