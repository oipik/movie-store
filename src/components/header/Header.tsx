import React, { useState } from 'react'
import NavItem from '../navItem/NavItem'
import Wrapper from '../wrapper/Wrapper'
import searchSvg from "../../images/search.svg"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { changeNewPage } from '../../store/movies/movies.slice'

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`);
      dispatch(changeNewPage(1));
    } else {
      navigate('/movies');
    }
  }

  return (
    <Wrapper>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='text-[#535353] font-bold text-3xl dark:text-[#FBFDFC]'>Movie-store</div>
          <nav className='ml-8'>
            <ul className="flex space-x-7 items-center">
              <NavItem text="Фильмы" link="/movies" />
              <NavItem text="Сериалы" link="/series" />
              <NavItem text="Мультфильмы" link="/cartoons" />
              <NavItem text="Избранное" link="/favourites" />
            </ul>
          </nav>
        </div>
        <div className='flex'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='h-[50px] w-[300px] bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none'
            type="text"
            placeholder='Search'
          />
          <button
            onClick={handleSearch}
            className='h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer'
            >
            <img
              className='h-[25px] w-[25px]'
              src={searchSvg}
              alt="search" />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header