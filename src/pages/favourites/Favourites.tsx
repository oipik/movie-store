import React from "react";
import { useAppSelector } from "../../services/useTypedSelector";

import Card from "../../components/card/Card";
import SwitcherTheme from "../../components/switcherTheme/SwitcherTheme";

const Favourites: React.FC = () => {
  const { favourites } = useAppSelector((state) => state.movies);

  const movies = favourites?.map((movie, i) => {
    return (
      <Card
        query={`/favourites/${movie.id}`}
        key={i}
        movie={movie}
        isFavourite
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-[40px] relative">
      {movies?.length !== 0 ? (
        movies
      ) : (
        <p className="text-4xl dark:text-white">
          Вы пока еще ничего не добавляли...
        </p>
      )}
      <div className="absolute bottom-48 left-[-130px]">
        <SwitcherTheme />
      </div>
    </div>
  );
};

export default Favourites;
