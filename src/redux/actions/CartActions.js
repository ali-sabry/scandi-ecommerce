import * as Constants from './Constants';

export const overlayStatus = (status) => ({
  type: Constants.OVERLAY_STATUS,
  payload: { overlyStatus: status },
});

export const addToCart = (product) => ({
  type: Constants.ADD_TO_CART,
  payload: {
    ...product,
    quantity: 1,
    galleryIndex: 0,
  },
});

export const increaseQuantity = (id) => ({
  type: Constants.INCREASE_QUANTITY,
  payload: {
    id,
  },
});

export const decreaseQuantity = (id) => ({
  type: Constants.DECREASE_QUANTITY,
  payload: {
    id,
  },
});

export const increaseGalleryIndex = (id) => ({
  type: Constants.INCREASE_GALLERY_INDEX,
  payload: {
    id,
  },
});

export const decreaseGalleryIndex = (id) => ({
  type: Constants.DECREASE_GALLERY_INDEX,
  payload: {
    id,
  },
});

export const getTotalPrice = (index) => ({
  type: Constants.GET_TOTAL_PRICES,
  payload: {
    index,
  },
});

export const updateAttributes = (id, attr) => ({
  type: Constants.UPDATE_ATTRIBUTES,
  payload: {
    id,
    attr: { ...attr },
  },
});
