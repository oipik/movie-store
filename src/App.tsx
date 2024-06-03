import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import FavouritesPage from "./pages/FavouritesPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/series" element={<Series />}/>
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
