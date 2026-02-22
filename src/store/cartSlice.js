import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartItemsCount = createAsyncThunk(
  "cart-count",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/cart-items", {
        withCredentials: "include",
      });
      const data = await res.json();

      if (data.success) {
        return data.cartItems || [];
      }

      return rejectWithValue([]);
    } catch (error) {
      return rejectWithValue([]);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { loading: true, items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartItemsCount.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCartItemsCount.rejected, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default cartSlice;
