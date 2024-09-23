import { lazy } from "react";

export const MovieAsync = lazy(
  () => import(/*webpackChunkName:"[Movie]"*/ "./Movie")
);
