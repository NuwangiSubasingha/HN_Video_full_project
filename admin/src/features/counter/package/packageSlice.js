import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};


// create package
export const createPackage = createAsyncThunk(
    "package/create",
    async (packageData, thunkApi) => {
      try {
        const res = await fetch("/api/packages", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(packageData),
        });
  
        if (!res.ok) {
          const error = await res.json();
          return thunkApi.rejectWithValue(error);
        }
  
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error.message);
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  // get all packages
  export const getPackages = createAsyncThunk("package/getall", async (_, thunkApi) => {
    try {
      const res = await fetch("/api/packages");
      if (!res.ok) {
        const error = await res.json();
        return thunkApi.rejectWithValue(error);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  });
  

export const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },
    },
    extraReducers: (builder) => {
      // add cases here
      builder
      .addCase(createPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    }
}
);

export const { reset } = packageSlice.actions;
export default packageSlice.reducer;