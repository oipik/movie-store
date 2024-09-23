import { lazy } from "react";

export const FavouritesAsync = lazy(
  () => import(/*webpackChunkName:"[Favourites]"*/ "./Favourites")
);
