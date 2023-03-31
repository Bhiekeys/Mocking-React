/** @format */
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed z-50 flex justify-between items-center bg-[#F1F6FF] px-[80px] py-[20px] w-full">
      <img src={Logo} />
      <nav className="hidden md:flex gap-8 lg:gap-20">
        <ul className="flex gap-7 lg:gap-20 items-center text-black cursor-pointer">
          <li className="border-4 border-[#F1F6FF] border-b-[#F20A0A]">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/artist">ARTIST</Link>
          </li>
          <li>
            <Link to="/music">MUSIC</Link>
          </li>
          <li>
            <Link to="/videos"> VIDEOS</Link>
          </li>
        </ul>
        <button className="text-[#F20A0A]">
          <Link to="/session">BOOK A SESSION</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
