import { combineReducers } from '@reduxjs/toolkit'
import feedSlice from '../slices/feed';
import cartSlice from '../slices/cart';

const rootReducer = combineReducers({
    feed: feedSlice,
    cart: cartSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;