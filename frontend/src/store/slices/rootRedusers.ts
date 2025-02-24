import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './product/product-slice';
import userSlice from './user/user-slice';


export const rootReducers = combineReducers({
  [productsSlice.name] : productsSlice.reducer,
  [userSlice.name] : userSlice.reducer,
});
