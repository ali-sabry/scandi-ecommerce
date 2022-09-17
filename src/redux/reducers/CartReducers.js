import * as Constants from 'redux/actions/Constants';

const init = {
  cartProducts: [],
  overlyStatus: false,
  totalQuantity: 0,
  galleryIndex: 0,
  totalPrice: 0,
  count: 1,
};

export function cartReducers(state = init, action = {}) {
  switch (action.type) {
    case Constants.OVERLAY_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    case Constants.ADD_TO_CART:
      const productExist = state.cartProducts.filter((item) => item.id === action.payload.id);
      const [existInfo] = productExist;
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.count++;
      if (existInfo) {
        if (JSON.stringify(action.payload.attr) !== JSON.stringify(existInfo.attr)) {
          state.cartProducts.push(action.payload);
          existInfo.id = `${existInfo.id}_${state.count}`;
        } else {
          existInfo.quantity += 1;
          existInfo.attr = action.payload.attr;
        }
        return {
          ...state,
          cartProducts: state.cartProducts,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: existInfo.prices[0].amount * existInfo.quantity,
        };
      }
      state.cartProducts.push(action.payload);

      return {
        ...state,
        cartProducts: state.cartProducts,
        totalQuantity: state.totalQuantity + 1,
      };

    case Constants.INCREASE_QUANTITY:
      const productInc = state.cartProducts.filter((item) => item.id === action.payload.id);
      const [toIncrease] = productInc;
      toIncrease.quantity += 1;
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
      };

    case Constants.DECREASE_QUANTITY:
      const productDec = state.cartProducts.filter((item) => item.id === action.payload.id);
      const [toDecrease] = productDec;
      if (toDecrease.quantity <= 1) {
        const remainedProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          cartProducts: [...remainedProducts],
          totalQuantity: state.totalQuantity - 1,
        };
      }
      toDecrease.quantity -= 1;
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
      };

    case Constants.INCREASE_GALLERY_INDEX:
      const galleryInc = state.cartProducts.filter(
        (item) => item.id === action.payload.id,
      );
      const [toIn] = galleryInc;
      toIn.galleryIndex += 1;
      return {
        ...state,
      };

    case Constants.DECREASE_GALLERY_INDEX:
      const galleryDec = state.cartProducts.filter(
        (item) => item.id === action.payload.id,
      );
      const [toDec] = galleryDec;
      toDec.galleryIndex -= 1;
      return {
        ...state,
      };
    case Constants.GET_TOTAL_PRICES:
      const data = state.cartProducts.map((product) => (
        product.prices[action.payload.index]
          .amount * product.quantity
      )).reduce((acc, curr) => (acc + curr)).toFixed(2);
      return {
        ...state,
        totalPrice: data,
      };
    case Constants.UPDATE_ATTRIBUTES:
      const isExist = state.cartProducts.filter((item) => item.id === action.payload.id);
      const [existedProduct] = isExist;
      if (existedProduct) {
        Object.keys(action.payload.attr).forEach((key) => {
          existedProduct.attr[key] = action.payload.attr[key];
          return false;
        });
        return {
          ...state,
          attr: existedProduct.attr,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
