import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLink from './NavLink';
import smallLogo from '../images/logo-sm.png';

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const links = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Hair',
      to: '/hair',
    },
    {
      label: 'Beards',
      to: '/beards',
    },
    {
      label: 'Shaves',
      to: '/shaves',
    },
    {
      label: 'Duo Packages',
      to: '/duo-packages',
    },
    {
      label: 'Gift Certificates',
      to: '/gift-certificates',
    },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-10 bg-black/80">
      {/* Desktop nav bar */}
      <div className="px-4 hidden md:flex container mx-auto justify-evenly items-center">
        {links.map(({ label, to }) => (
          <NavLink
            to={to}
            className="py-4 border-b-4 text-lg font-bold"
            activeClassName="border-gold-500"
            inactiveClassName="border-transparent"
            key={label}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile nav bar */}
      <div className="p-4 flex md:hidden container mx-auto justify-between items-center">
        <AiOutlineMenu onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-3xl" role="button" />
        <NavLink to="/">
          <img src={smallLogo} className="w-10" alt="Equinox Logo" />
        </NavLink>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="py-4 flex md:hidden container mx-auto flex-col">
          {links.map(({ label, to }) => (
            <NavLink
              to={to}
              onClick={() => setShowMobileMenu(false)}
              className="px-4 mb-4 last:mb-0 border-l-4 text-lg font-bold"
              activeClassName="border-gold-500"
              inactiveClassName="border-transparent"
              key={label}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
