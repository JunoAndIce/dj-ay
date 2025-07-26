import { useEffect, useState } from 'react';
import { useMenu } from '../context/menuProvider';
import Hamburger from 'hamburger-react';
import logo from '../assets/images/bazaart.webp'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  const [bgStyle, setBgStyle] = useState({
    backgroundColor: 'black',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        // Force pure black background when menu is open
        setBgStyle({ backgroundColor: 'black' });
      } else {
        // Normal scroll-based background when menu closed
        const scrolled = window.scrollY > 10;
        setBgStyle({
          backgroundColor: scrolled
            ? 'rgba(0, 0, 0, 0.6)'
            : 'rgba(0, 0, 0, 0.9)',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]); // rerun effect when menu opens/closes

  return (
    <header className='bd-header'>
      <nav
        className='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
        style={{ ...bgStyle, transition: 'background-color 0.3s ease' }}
      >
        <div className='navbar-brand justify-between w-full px-4 py-2'>
          <Link className='navbar-item' to='/dj-ay'>
            <img
              className={`h-10 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              src={logo}
              alt='Logo'
            />
          </Link>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
