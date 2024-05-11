export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  previewImage: {
    maxLength: 'Maximum previewImage length must be 256',
  },
  type: {
    invalid: 'type must be Buy and Sell',
  },
  isPremium: {
    invalid: 'type is not bool',
  },
  bedrooms: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 200000',
  },
  maxAdults: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 200000',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 200000',
  },
  goods: {
    invalidFormat: 'Field goods must be an array',
  },
  images: {
    invalidFormat: 'Field images must be an array',
    minLength: 'Minimum length must be 6',
    maxLength: 'Maximum length must be 6',
  },
} as const;
