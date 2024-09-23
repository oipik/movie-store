import { lazy } from "react";

export const SearchResultAsync = lazy(
  () => import(/*webpackChunkName: "[SearchResult]"*/ "./SearchResult")
);
