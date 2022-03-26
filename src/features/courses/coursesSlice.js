import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  //   user: null,
  courses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = coursesSlice.actions;
export default coursesSlice.reducer;
