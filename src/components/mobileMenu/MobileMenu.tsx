import React, { useState } from 'react'
import NavItem from '../navItem/NavItem'
import SwitcherTheme from '../switcherTheme/SwitcherTheme';
import searchSvg from '../../images/search.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/useTypedSelector';
import { changeNewPage } from '../../store/movies/movies.slice';
import { Button } from '../header/Header';

interface IMobileMenu {
  isOpen: boolean;
  setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<IMobileMenu> = ({ isOpen, setIsMobileMenu }) => {
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
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition-transform transform ${isOpen ? 'flex' : 'hidden'} block ll:hidden`}
        onClick={() => setIsMobileMenu(!isOpen)}
      />
      <div className={`fixed right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'} dark:bg-[#0B0C0E] block ll:hidden`} >
        <nav className="my-20 mx-5 space-y-5 text-lg w-full">
          <div className='flex flex-wrap ml-[10px] gap-[10px]'>
            <Link to="auth/login">
              <Button text="Вход" />
            </Link>
            <Link to="auth/register">
              <Button text="Регистрация" />
            </Link>
          </div>
          <ul className="flex flex-col space-y-4 p-2">
            <NavItem text="Фильмы" link="/movies" />
            <NavItem text="Сериалы" link="/series" />
            <NavItem text="Мультфильмы" link="/cartoons" />
            <NavItem text="Избранное" link="/favourites" />
          </ul>
          <div className='flex items-center'>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='h-[50px] max-w-[300px] w-full bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none'
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
          <SwitcherTheme />
        </nav>
      </div>
    </>
  )
}

export default MobileMenu