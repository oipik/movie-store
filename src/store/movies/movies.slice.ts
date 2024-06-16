import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../models/models-Movies";

const FVK_KEY = 'rfk';

interface IInitialState {
  favourites: IMovies[]
  theme: boolean
}

const initialState: IInitialState = {
  favourites: JSON.parse(localStorage.getItem(FVK_KEY) ?? '[]'),
  theme: true 
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
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
  addFavourites,
  removeFavourite,
  changeTheme
} = actions;
export default reducer;