import { AppThunk } from "../store";
import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export interface Product {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface FeedState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FeedState = {
  products: [],
  isLoading: false,
  error: null
};

export const fetchProducts = createAsyncThunk(
  'feed/fetchProducts',
  async (userId, { rejectWithValue }) => {
    try {
      const result = await axios.get('http://localhost:3000/api/products')
      const products = await result.data;
      return products;
    } catch (err) {
      return rejectWithValue(err.response.statusText)
    }
  }
);

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const products = action.payload;
      state.products = products;
      state.isLoading = false;
    }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
  }
});


export const {
} = feedSlice.actions;

export default feedSlice.reducer;