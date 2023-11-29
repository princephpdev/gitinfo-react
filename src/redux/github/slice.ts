import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IGithubSlice {
  repos: [];
  orgs: [];
}

const initialState: IGithubSlice = {
  repos: [],
  orgs: [],
};

export const githubSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setRepo: (state, action: PayloadAction<any>) => {
      return { ...state, repos: action.payload };
    },
    setOrgs: (state, action: PayloadAction<any>) => {
      return { ...state, orgs: action.payload };
    },
  },
});

export const { actions: githubActions, reducer: githubReducer } = githubSlice;
