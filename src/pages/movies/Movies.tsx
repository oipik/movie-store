import React, { useEffect } from 'react'
import { useGetMoviesQuery } from '../../store/movies/movies.api';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Paginate from '../../components/paginate/Paginate';
import Card from '../../components/card/Card';

const Movies: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const navigate = useNavigate();

  const { docs: data = [], pageCount = 0, isLoading, isError, isFetching } = useGetMoviesQuery(page, {
    selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
      docs: data?.docs,
      limit: data?.limit,
      pageCount: data?.pages,
      isLoading, isError, isFetching
    })
  });

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page, navigate])

  const handlePageClick = ({ selected }: { selected: number }) => {
    navigate(`?page=${selected + 1}`);
  };

  const movies = data?.map((movie, i) => {
    return <Card query={`/movies/${movie.id}`} key={i} movie={movie} />
  })

  return (
    <>
      <div className='flex flex-wrap justify-center gap-[40px]'>
        {isError && <p className='text-4xl dark:text-white'>Ошибка доступа...</p>}
        {isLoading || isFetching ? <p className='text-4xl dark:text-white'>Loading...</p> : movies}
      </div>
      <div>
        {(movies?.length !== 0 && !isFetching) ? <Paginate initialPage={page - 1} pageCount={pageCount} handlePageClick={handlePageClick} /> : null}
      </div>
    </>
  )
}

export default Movies;

