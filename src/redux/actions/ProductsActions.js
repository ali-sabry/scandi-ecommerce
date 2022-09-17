import * as Constants from './Constants';

export const getCategoryName = (cName) => ({
  type: Constants.GET_CATEGORY_NAME,
  payload: { name: cName },
});

export const choosenCurrency = (index) => ({
  type: Constants.CHOOSEN_CURRENCY,
  payload: { currencyIndex: index },
});

export const choosenImage = (imgIndex) => ({
  type: Constants.CHOOSEN_IMAGE,
  payload: { imgIndex },
});
