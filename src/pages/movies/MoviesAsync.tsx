import { lazy } from "react";

export const MoviesAsync = lazy(
  () => import(/*webpackChunkName:"[Movies]"*/ "./Movies")
);
