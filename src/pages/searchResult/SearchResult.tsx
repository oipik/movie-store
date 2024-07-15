import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetMoviesByQuery } from '../../store/movies/movies.api';

import Card from '../../components/card/Card';
import Paginate from '../../components/paginate/Paginate';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeNewPage } from '../../store/movies/movies.slice';

const SearchResult: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { newPage } = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  const { docs: data = [], page, pageCount = 0, isLoading, isError, isFetching } = useGetMoviesByQuery({ query, newPage }, {
    selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
      docs: data?.docs,
      limit: data?.limit,
      page: data?.page,
      pageCount: data?.pages,
      isLoading, isError, isFetching
    })
  });

  const handlePageClick = ({ selected }: { selected: number }) => {
    dispatch(changeNewPage(selected + 1));
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
        {(movies?.length !== 0 && !isFetching) ? <Paginate initialPage={page! - 1} pageCount={pageCount} handlePageClick={handlePageClick} /> : null}
      </div>
    </>
  )
};

export default SearchResult