import { useParams, useNavigate } from "react-router-dom";
import { useGetMovieQuery } from "../../store/movies/movies.api";

import { SimilarMovies } from "../../components";

const Movie: React.FC = () => {
  const { id = "" } = useParams();

  return <MovieContent key={id} id={id} />;
};

export default Movie;

const MovieContent: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();
  const { data: movie, isLoading, isError } = useGetMovieQuery(id);

  const name = movie?.name ? movie.name : "Название отсутствует";
  const img = movie?.poster?.url ? movie.poster.url : "Изображение отсутствует";
  const description = movie?.description
    ? movie.description
    : "Описание отсутствует";
  const year = movie?.year ? movie.year : "Год выхода отсутствует";
  const country =
    movie?.countries && movie?.countries.length !== 0
      ? movie?.countries.map((item) => item.name).join(", ")
      : "Страна не указана";
  const runtime = movie?.movieLength
    ? movie.movieLength
    : "Продолжительность не указана";
  const kp = movie?.rating?.kp ? movie.rating.kp : null;
  const imdb = movie?.rating?.imdb ? movie.rating.imdb : null;
  const genres =
    movie?.genres?.length !== 0
      ? movie?.genres.map((item) => item.name).join(", ")
      : "Жанр не указан";
  const watch = movie?.watchability?.items.filter((item) => item.name);

  return (
    <>
      {isError && (
        <p className="text-center text-4xl dark:text-white">
          Ошибка доступа...
        </p>
      )}

      <section className="mx-[40px] mb-[20px] relative">
        {isLoading ? (
          <p className="text-center text-4xl dark:text-white">Loading...</p>
        ) : (
          movie !== undefined && (
            <div>
              <button
                onClick={() => navigate(-1)}
                className="mb-[50px] inline-block px-[20px] h-[50px] cursor-pointer text-white bg-default font-bold text-xl rounded"
              >
                НАЗАД
              </button>
              <div className="flex flex-wrap m:flex-nowrap mb-[20px]">
                <img
                  className="w-[300px] h-[400px] m:mr-[50px] mb-[15px] mx-auto ml-0"
                  src={img}
                  alt={name}
                />
                <div>
                  <h1 className="text-3xl font-bold text-neutral-700 mb-[10px] dark:text-white">
                    {name}
                  </h1>
                  <p className="text-lg dark:text-white">
                    <span className="font-bold">Год выхода: </span>
                    {year}
                  </p>
                  <p className="text-lg dark:text-white">
                    <span className="font-bold">Страна: </span>
                    {country}
                  </p>
                  <p className="text-lg dark:text-white">
                    <span className="font-bold">Продолжительность: </span>
                    {runtime}мин
                  </p>
                  <p className="text-lg dark:text-white">
                    <span className="font-bold">Жанр: </span>
                    {genres}
                  </p>
                  <div className="flex text-lg dark:text-white mb-3">
                    {kp !== null && (
                      <div className="mr-[10px]">
                        <span className="font-bold">Рейтинг:</span> KP {kp}
                      </div>
                    )}
                    {imdb !== null && <div>IMDB {imdb}</div>}
                  </div>
                  <p className="text-xl mb-[15px] dark:text-white">
                    {description}
                  </p>
                  {watch?.map((item, i) => (
                    <a
                      href={item.url}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block p-[10px] mb-5 mr-[10px] cursor-pointer text-white bg-default font-bold text-xl rounded"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <SimilarMovies />
            </div>
          )
        )}
      </section>
    </>
  );
};
