import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./homePage/HomePage";
import Layout from "./layout/Layout";
import Page404 from "./page404/Page404";
import { MoviesAsync as Movies } from "./movies/MoviesAsync";
import { SeriesAsync as Series } from "./series/SeriesAsync";
import { CartoonsAsync as Cartoons } from "./cartoons/CartoonsAsync";
import { FavouritesAsync as Favourites } from "./favourites/FavouritesAsync";
import { MovieAsync as Movie } from "./movie/MovieAsync";
import { LoginAsync as Login } from "./login/LoginAsync";
import { RegisterAsync as Register } from "./register/RegisterAsync";
import { SearchResultAsync as SearchResult } from "./searchResult/SearchResultAsync";
import { Loader } from "../components";
import { useAppDispatch } from "../services/useTypedSelector";
import { fetchAuthMe } from "../store/movies/auth.slice";

function Pages(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
