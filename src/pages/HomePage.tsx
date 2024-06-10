import React, { useState } from 'react'
import { useGetMoviesQuery } from '../store/movies/movies.api'
import { Link } from 'react-router-dom';

import notFound from '../images/not-found.jpg';
import heart from '../images/heart.svg'
import heartFavourite from '../images/heart-favourite.svg'
import Wrapper from '../components/wrapper/Wrapper';
import Rating from '../components/rating/Rating';
import Paginate from '../components/paginate/Paginate';

const HomePage: React.FC = () => {
  const [initialPage, setInitialPage] = useState(1);

  const { docs: data = [], limit = 10, page = 0, pageCount = 0, isLoading, isError, isFetching, error } = useGetMoviesQuery(initialPage, {
    selectFromResult: ({ data, isLoading, isError, isFetching, error }) => ({
      docs: data?.docs,
      limit: data?.limit,
      page: data?.page,
      pageCount: data?.pages,
      isLoading, isError, isFetching, error
    })
  });

  const handlePageClick = ({ selected }: { selected: number }) => {
    setInitialPage(selected + 1);
  };

  const movies = data?.map((movie, i) => {
    return (
      <div className="w-[260px] min-h-[480px]" key={i}>
        <Link
          to={`/movie/${movie.name}`}
          className="">
          <img className="mb-2 w-[260px] h-[400px]" src={movie.poster?.url} alt={movie.name} />
        </Link>
        <Rating rating={movie.rating.kp} />
        <p className="mt-2 text-[#373737] font-medium text-xl">{movie.name.length < 22 ? movie.name : `${movie.name.slice(0, 22)}...`}</p>
        <div className='flex justify-between'>
          <p className="text-[#C3C3C3] font-medium text-lg">{movie.year}</p>
          <button className='block w-[25px] h-[25px]'>
            <img src={heart} alt="favourite" />
          </button>
        </div>
      </div>
    )
  })

  console.log(data);

  return (
    <section className='bg-[#F6F6F6] h-full'>
      <Wrapper>
        <div className='flex flex-wrap justify-center gap-[40px]'>
          {isError && <p className='text-center text-4xl h-screen'>Ошибка доступа...</p>}
          {isLoading || isFetching ? <p className='text-center text-4xl h-screen'>Loading...</p> : movies}
        </div>
        {movies?.length !== 0 ? <Paginate initialPage={page - 1} pageCount={pageCount} handlePageClick={handlePageClick} /> : null}
      </Wrapper>
    </section>
  )
}

export default HomePage