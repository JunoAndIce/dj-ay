import { useEffect, useRef } from 'react';
import { useMenu } from '../context/menuProvider';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { isMenuOpen, closeMenu } = useMenu();
  const asideRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen && asideRef.current) {
      const ctx = gsap.context(() => {
        // Fade in + slight slide on the aside wrapper
        gsap.fromTo(
          asideRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          }
        );

        // Fade + stagger each list item
        if (listRef.current) {
          gsap.fromTo(
            listRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 0.1,
            }
          );
        }
      }, asideRef);

      return () => ctx.revert(); // Cleanup GSAP context on unmount
    }
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <aside
      ref={asideRef}
      className="menu bg-black text-white mt-[4.5rem] p-6 fixed inset-0 z-50"
    >
      <ul ref={listRef} className="flex flex-col items-center gap-30 type-headline-xxs uppercase">
        <Link to='/'><li>Home</li></Link>
        <Link to='/about-me'><li>About Me</li></Link>
        <Link to='/news'><li>News</li></Link>
        <a><li>Tours</li></a>
        <a><li>My Music</li></a>
        <a><li>Book</li></a>
      </ul>
    </aside>
  );
};

export default Menu;
