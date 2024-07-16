import React, { useMemo, useState } from 'react'
import NavItem from '../navItem/NavItem'
import Wrapper from '../wrapper/Wrapper'
import MobileMenu from '../mobileMenu/MobileMenu'

import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/useTypedSelector'
import { changeNewPage } from '../../store/movies/movies.slice'
import SwitcherTheme from '../switcherTheme/SwitcherTheme'

import mobileMenuIcon from '../../images/icon-menu.svg'
import mobileMenuIconWhite from "../../images/icon-menu-white.svg"
import closeMenu from '../../images/icon-close-menu.svg'
import closeMenuWhite from '../../images/icon-close-menu-white.svg'
import searchSvg from "../../images/search.svg"

const Header: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const { theme } = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`);
      dispatch(changeNewPage(1));
    } else {
      navigate('/movies');
    }
  }

  const logo = useMemo(() => {
    return <Link to="/" className='text-[#535353] hover:text-default font-bold text-3xl dark:text-[#FBFDFC]'>Movie-store</Link>
  }, [])

  return (
    <Wrapper>
      <div className='flex items-center justify-between'>
        <div className='w-full flex items-center justify-between ll:justify-start'>
          {logo}
          <nav className='ml-8 hidden ll:block'>
            <ul className="flex space-x-7 items-center">
              <NavItem text="Фильмы" link="/movies" />
              <NavItem text="Сериалы" link="/series" />
              <NavItem text="Мультфильмы" link="/cartoons" />
              <NavItem text="Избранное" link="/favourites" />
            </ul>
          </nav>
          <div onClick={() => setIsMobileMenu(!isMobileMenu)} className="block ll:hidden cursor-pointer z-30">
            {isMobileMenu ? <img src={theme ? closeMenu : closeMenuWhite} alt="menu" />
              : <img src={theme ? mobileMenuIcon : mobileMenuIconWhite} alt="menu" />}
          </div>
          <MobileMenu isOpen={isMobileMenu} setIsMobileMenu={setIsMobileMenu} />
        </div>
        <div className='hidden ll:block'>
          <div className='flex items-center'>
            <SwitcherTheme />
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
      </div>
    </Wrapper>
  )
}

export default Header