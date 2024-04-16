import { Offer, Type, Good, UserType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [title, description, postDate, cityName, cityLatitude, cityLongitude, imagePreview, photosHousing, isPremium, rating, type, numberRooms, numberGuests, price, conveniences, firstname, email, avatarPath, password, usertype] = offerData.replace('\n', '').split('\t');

  const author = {
    firstname,
    email,
    avatarPath,
    password,
    type: UserType[usertype as 'Regular' | 'Pro']
  };

  const city = {
    name: cityName,
    location: {
      latitude: Number.parseFloat(cityLatitude),
      longitude: Number.parseFloat(cityLongitude),
    }
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city,
    location: {
      latitude: Number.parseFloat(cityLatitude),
      longitude: Number.parseFloat(cityLongitude),
    },
    imagePreview,
    photosHousing: photosHousing.split(';'),
    isPremium: isPremium === 'true',
    rating: Number.parseInt(rating, 10),
    type: Type[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    numberRooms: Number.parseInt(numberRooms, 10),
    numberGuests: Number.parseInt(numberGuests, 10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences
      .split(';')
      .map((convenience) =>
        Good[convenience as 'Breakfast' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge']
      ),
    author,
    comments: [],
    favoriteUsers: []
  };
}
