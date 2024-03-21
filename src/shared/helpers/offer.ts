import { Offer, HousingType, ConvenienceType, UserType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [title, description, postDate, sityName, sityLatitude, sityLongitude, imagePreview, photosHousing, isPremium, isFavorite, rating, type, numberRooms, numberGuests, price, conveniences, firstname, email, avatarPath, password, usertype] = offerData.replace('\n', '').split('\t');

  const author = {
    firstname,
    email,
    avatarPath,
    password,
    type: UserType[usertype as 'Regular' | 'Pro']
  };

  const sity = {
    name: sityName,
    latitude: Number.parseFloat(sityLatitude),
    longitude: Number.parseFloat(sityLongitude),
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    sity,
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
    author,
    comments: []
  };
}
