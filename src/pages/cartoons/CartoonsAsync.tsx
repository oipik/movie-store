import { lazy } from "react";

export const CartoonsAsync = lazy(
  () => import(/*webpackChunkName:"[Cartoons]"*/ "./Cartoons")
);
