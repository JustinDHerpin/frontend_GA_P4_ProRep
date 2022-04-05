import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coursesService from "./coursesService";
import { useSelector } from "react-redux";
// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  //   user: null,
  userCourses: [],
  courses: [],
  // showAvailCourse: [],
  showUserCourse: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//state.courses.showAvailCourse
// export const getAvailCourse = createAsyncThunk(
//   "courses/getAvailCourse",
//   async (courseData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await coursesService.addCourse(courseData, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Add a course to user's dashboard
export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (courseData, thunkAPI) => {
    console.log("line 41 from coursesSlice");
    try {
      console.log("addcourse firing from coursesSlice line 42");
      // const { user } = useSelector((state) => state.auth);
      const token = thunkAPI.getState().auth.user.token;
      return await coursesService.addCourse(courseData, token);
      // return await coursesService.addCourse(courseData, user, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  Create new Course
export const createCourse = createAsyncThunk(
  "courses/create",
  async (courseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await coursesService.createCourse(courseData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user courses
export const getUserCourses = createAsyncThunk(
  "courses/getUserCourses",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await coursesService.getUserCourses(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all available courses
export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await coursesService.getAllCourses(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userCourses.push(action.payload);
      })
      .addCase(getUserCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses.push(action.payload);
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userCourses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = coursesSlice.actions;
export default coursesSlice.reducer;
