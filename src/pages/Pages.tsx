import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Movies from "./Movies";
import Series from "./Series";
import Cartoons from "./Cartoons";
import Favourites from './Favourites'
import Movie from "./Movie";
import Page404 from "./Page404";
import Layout from "./Layout";

function Pages(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="cartoons" element={<Cartoons />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path=":movie/:id" element={<Movie />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default Pages;
