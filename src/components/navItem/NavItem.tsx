import { NavLink } from "react-router-dom";

interface PropsType {
  text: string;
  link: string;
}

const NavItem: React.FC<PropsType> = ({ text, link }) => {
  return (
    <li className={`cursor-pointer text-[#BEBEBE] text-2xl font-bold hover:text-[#79B4D6] hover:border-[#79B4D6] transition-all duration-100`}>
      <NavLink to={link}
        className={({ isActive }) => isActive ? "border-b-4 text-[#79B4D6] border-[#79B4D6]" : ""}>
        {text}
      </NavLink>
    </li>
  )
}

export default NavItem