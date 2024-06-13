import React from 'react'
import NavItem from '../navItem/NavItem'
import Wrapper from '../wrapper/Wrapper'
import search from "../../images/search.svg"

const Header: React.FC = () => {
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
            className='h-[50px] w-[300px] bg-[#E4E4E4] dark:bg-[#1B1E25] rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none'
            type="text"
            placeholder='Search'
          />
          <button className='h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer'>
            <img
              className='h-[25px] w-[25px]'
              src={search}
              alt="search" />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header