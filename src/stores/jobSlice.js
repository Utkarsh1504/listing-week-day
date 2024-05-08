import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalJobs: 0,
  jobList: [],
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateJobCount: (state, action) => {
      state.totalJobs = action.payload;
    },
    updateJobList: (state, action) => {
      state.jobList = [...state.jobList, ...action.payload];
    },
    setJobList: (state, action) => {
      state.jobList = action.payload;
    },
  },
});

export const { updateJobCount, updateJobList, setJobList } = jobSlice.reducer;
