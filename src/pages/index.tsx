import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./homePage/HomePage";
import Layout from "./layout/Layout";

const Movies = lazy(
  () => import(/*webpackChunkName:"[Movies]"*/ "./movies/Movies")
);
const Series = lazy(
  () => import(/*webpackChunkName:"[Series]"*/ "./series/Series")
);
const Cartoons = lazy(
  () => import(/*webpackChunkName:"[Cartoons]"*/ "./cartoons/Cartoons")
);
const Favourites = lazy(
  () => import(/*webpackChunkName:"[Favourites]"*/ "./favourites/Favourites")
);
const Movie = lazy(
  () => import(/*webpackChunkName:"[Movie]"*/ "./movie/Movie")
);
const Page404 = lazy(
  () => import(/*webpackChunkName:"[Page404]"*/ "./page404/Page404")
);
const Login = lazy(
  () => import(/* webpackChunkName:"[Login]"*/ "./login/Login")
);
const Register = lazy(
  () => import(/*webpackChunkName:"[Register]"*/ "./register/Register")
);
const SearchResult = lazy(
  () =>
    import(/*webpackChunkName: "[SearchResult]"*/ "./searchResult/SearchResult")
);

function Pages(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <p className="text-4xl">Загрузка...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="cartoons" element={<Cartoons />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path=":movie/:id" element={<Movie />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Pages;
