import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from "./feed";


export interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        }
    },
});


export const {
    addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;