/** @format */
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  const navLinks = [
    {
      id: 1,
      text: 'HOME',
      link: '/',
    },
    {
      id: 2,
      text: 'ARTIST',
      link: '/artist',
    },
    {
      id: 3,
      text: 'MUSIC',
      link: '/music',
    },
    {
      id: 4,
      text: 'VIDEOS',
      link: '/videos',
    },
  ];
  return (
    <header className="fixed z-50 flex justify-between items-center bg-[#F1F6FF] px-[80px] py-[20px] w-full">
      <img src={Logo} />
      <nav className="hidden md:flex gap-8 lg:gap-20">
        <ul className="flex gap-7 lg:gap-20 items-center text-black cursor-pointer">
          {navLinks?.map((links, i) => (
            <li key={i}>
              <NavLink
                to={links?.link}
                className={({ isActive }) => {
                  return (
                    'text-black' +
                    (!isActive ? 'border border-neutral-800 ' : 'underline')
                  );
                }}>
                {links.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="text-[#F20A0A]">
          <Link to="/session">BOOK A SESSION</Link>
         
        </button>
      </nav>
    </header>
  );
};

export default Header;
