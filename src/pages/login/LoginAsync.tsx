import { lazy } from "react";

export const LoginAsync = lazy(
  () => import(/* webpackChunkName:"[Login]"*/ "./Login")
);
