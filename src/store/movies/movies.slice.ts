import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../models/models-Movies";

const FVK_KEY = 'rfk';

interface IInitialState {
  currentPageMovie: number;
  currentPageSeries: number;
  currentPageCartoon: number;
  favourites: IMovies[]
  theme: boolean
}

const initialState: IInitialState = {
  currentPageMovie: 1,
  currentPageSeries: 1,
  currentPageCartoon: 1,
  favourites: JSON.parse(localStorage.getItem(FVK_KEY) ?? '[]'),
  theme: true 
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeCurrentPageMovie: (state, action: PayloadAction<number>) => {
      state.currentPageMovie = action.payload;
    },
    changeCurrentPageSeries: (state, action: PayloadAction<number>) => {
      state.currentPageSeries = action.payload;
    },
    changeCurrentPageCartoon: (state, action: PayloadAction<number>) => {
      state.currentPageCartoon = action.payload;
    },
    addFavourites: (state, action: PayloadAction<IMovies>) => {
      state.favourites.push(action.payload);
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite: (state, action: PayloadAction<IMovies>) => {
      state.favourites = state.favourites.filter(fv => fv.id !== action.payload.id);
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites))
    },
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    }
  }
})

const { actions, reducer } = moviesSlice;

export const {
  changeCurrentPageMovie,
  changeCurrentPageSeries,
  changeCurrentPageCartoon,
  addFavourites,
  removeFavourite,
  changeTheme
} = actions;
export default reducer;