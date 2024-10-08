import { useEffect } from "react";
import { useGetSeriesQuery } from "../../store/movies/movies.api";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Paginate, Card, SwitcherTheme } from "../../components";

const Series: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const navigate = useNavigate();

  const {
    docs: data = [],
    pageCount = 0,
    isLoading,
    isError,
    isFetching,
  } = useGetSeriesQuery(page, {
    selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
      docs: data?.docs,
      limit: data?.limit,
      page: data?.page,
      pageCount: data?.pages,
      isLoading,
      isError,
      isFetching,
    }),
  });

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page, navigate]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    navigate(`?page=${selected + 1}`);
  };

  const movies = data?.map((movie, i) => {
    return <Card query={`/series/${movie.id}`} key={i} movie={movie} />;
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[40px] relative">
        {isError && (
          <p className="text-4xl dark:text-white">Ошибка доступа...</p>
        )}
        {isLoading || isFetching ? (
          <p className="text-4xl dark:text-white">Loading...</p>
        ) : (
          movies
        )}
        <div className="absolute bottom-48 left-[-130px]">
          <SwitcherTheme />
        </div>
      </div>
      <div>
        {movies?.length !== 0 && !isFetching ? (
          <Paginate
            initialPage={page - 1}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : null}
      </div>
    </>
  );
};

export default Series;
