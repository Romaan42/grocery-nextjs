import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkLoginUser = createAsyncThunk(
  "checklogin",
  async (_, { rejectWithValue }) => {
    const res = await fetch("/api/get-user");
    const data = await res.json();
    if (data.login) {
      return data.user;
    }

    return rejectWithValue(data.message);
  },
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { user: null, loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkLoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(checkLoginUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default loginSlice;
