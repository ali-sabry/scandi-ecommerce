import { createStore, combineReducers } from 'redux';
import { productsReducers } from 'redux/reducers/ProductsReducers';
import { cartReducers } from 'redux/reducers/CartReducers';

const rootReducer = combineReducers({
  productsReducers,
  cartReducers,
});

const store = createStore(rootReducer);

export default store;
