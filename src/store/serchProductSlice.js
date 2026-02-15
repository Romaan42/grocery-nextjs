import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk(
  "searchProduct/fetchSearchResults",
  async ({ search }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/search?query=${search}`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState: {
    searchTerm: "",
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setProducts, setSearch } = searchProductSlice.actions;
export default searchProductSlice;
