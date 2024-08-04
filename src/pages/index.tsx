import { Routes, Route } from "react-router-dom";

import HomePage from "./homePage/HomePage";
import Movies from "./movies/Movies";
import Series from "./series/Series";
import Cartoons from "./cartoons/Cartoons";
import Favourites from './favourites/Favourites'
import Movie from "./movie/Movie";
import Page404 from "./page404/Page404";
import Layout from "./layout/Layout";
import SearchResult from "./searchResult/SearchResult";
import Login from "./login/Login";
import Register from "./register/Register";

function Pages(): JSX.Element {
  return (
    <Routes >
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
  );
}

export default Pages;
