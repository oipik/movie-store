import { lazy } from "react";

export const SeriesAsync = lazy(
  () => import(/*webpackChunkName:"[Movies]"*/ "./Series")
);
