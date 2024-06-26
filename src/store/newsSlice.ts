import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewsData, NewsState } from "../types/types";

const initialState: NewsState = {
  currentNews: {
    title: "",
    description: "",
    pubDate: "",
    originallink: "",
    imageUrls: [],
    articleText: "",
  },
};

export const newsSlice = createSlice({
  name: "newsState",
  initialState,
  reducers: {
    setCurrentNews(state, action: PayloadAction<NewsData>) {
      state.currentNews = action.payload;
    },
  },
});

export const { setCurrentNews } = newsSlice.actions;
export default newsSlice.reducer;
