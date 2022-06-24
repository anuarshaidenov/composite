import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import HamburgerIcon from '../assets/hamburger-icon.svg';
import CompositeLogo from '../assets/composite-logo.svg';
import SearchIcon from '../assets/search-icon.svg';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const mobileMenuStyle = isMenuOpen ? 'translate-x-0' : 'translate-x-full';
  const handleMobileMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const router = useRouter();
  const setActiveLink = (path) => {
    return router.pathname === path
      ? 'text-[#06040A] hover:text-[#06040A]'
      : 'text-[#544E5D] hover:opacity-50';
  };

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        className={`${mobileMenuStyle}`}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      <header className="header py-7">
        <div className="container flex items-center justify-between">
          <div className="logo-container relative h-10 w-36">
            <Image src={CompositeLogo} alt="Composite Logo" layout="fill" />
          </div>
          <div className="flex items-center gap-8 md:hidden">
            <button className="relative w-5 h-5">
              <Image src={SearchIcon} alt="Search" layout="fill" />
            </button>
            <button
              type="button"
              className="hamburger-container w-5 h-5 relative"
              onClick={handleMobileMenuClick}
            >
              <Image src={HamburgerIcon} alt="Hamburger Logo" layout="fill" />
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className={`${setActiveLink('/')}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`${setActiveLink('/about')}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`${setActiveLink('/team')}`}>
                <Link href="/team">Our Team</Link>
              </li>
              <li className={`${setActiveLink('/products')}`}>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
