import * as Constants from 'redux/actions/Constants';

const init = {
  name: 'all', currencyIndex: 0, imgIndex: 0,
};

export function productsReducers(state = init, action = {}) {
  switch (action.type) {
    case Constants.GET_CATEGORY_NAME:
      return {
        ...state,
        ...action.payload,
      };
    case Constants.CHOOSEN_CURRENCY:
      return {
        ...state,
        ...action.payload,
      };
    case Constants.CHOOSEN_IMAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
