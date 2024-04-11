import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData, HousingType, ConvenienceType, UserType } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_NUMBER_ROOMS = 1;
const MAX_NUMBER_ROOMS = 10;

const MIN_NUMBER_GUESTS = 1;
const MAX_NUMBER_GUESTS = 50;

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const [cityName, cityLatitude, cityLongitude] = getRandomItem<string>(this.mockData.citys).split(';');
    const imagePreview = getRandomItem<string>(this.mockData.imagePreviews);
    const photosHousing = getRandomItems<string>(this.mockData.photosHousing).join(';');
    const isPremium = Boolean(generateRandomValue(0, 1));
    const isFavorite = Boolean(generateRandomValue(0, 1));
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const type = getRandomItem([HousingType.Apartment, HousingType.Hotel, HousingType.House, HousingType.Room]);
    const numberRooms = generateRandomValue(MIN_NUMBER_ROOMS, MAX_NUMBER_ROOMS).toString();
    const numberGuests = generateRandomValue(MIN_NUMBER_GUESTS, MAX_NUMBER_GUESTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const conveniences = getRandomItems<string>([ConvenienceType.AirConditioning, ConvenienceType.BabySeat, ConvenienceType.Breakfast, ConvenienceType.Fridge, ConvenienceType.LaptopFriendlyWorkspace, ConvenienceType.Towels, ConvenienceType.Washer]).join(';');
    const userFirstname = getRandomItem(this.mockData.userFirstnames);
    const userEmail = getRandomItem(this.mockData.userEmails);
    const userAvatarPath = getRandomItem(this.mockData.userAvatarPaths);
    const userPassword = getRandomItem(this.mockData.userPasswords);
    const userType = getRandomItem([UserType.Pro, UserType.Regular]);


    return [
      title, description, postDate, cityName, cityLatitude, cityLongitude, imagePreview, photosHousing, isPremium, isFavorite, rating, type, numberRooms, numberGuests, price, conveniences, userFirstname, userEmail, userAvatarPath, userPassword, userType
    ].join('\t');
  }
}
