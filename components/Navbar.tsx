'use client';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../assets/images/logo-full.png';
import LogoSmallImage from '../assets/images/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg font-[400] p-5 text-black antialiased sticky top-0">
      <div className="w-full max-w-[1280px] h-fit m-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="tablet:hidden">
          <Link href="/">
            <Image src={LogoImage} alt="Company Logo" width={150} height={150} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="hidden tablet:block">
          <Link href="/">
            <Image src={LogoSmallImage} alt="Company Logo" width={40} height={40} />
          </Link>
        </motion.div>
        <AnimatePresence mode="wait">
          {((isTablet && showMenu) || !isTablet) && (
            <motion.ul
              className="flex justify-between items-center gap-5 p-2 text-sm
            tablet:absolute tablet:w-full tablet:h-screen tablet:top-0 tablet:left-0 tablet:flex-col tablet:justify-center 
            tablet:bg-slate-50 tablet:text-xl tablet:gap-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.li
                className="hidden tablet:block"
                whileHover={{ scale: 1.05 }}
                initial={{ x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              >
                <Link href="/">
                  <Image src={LogoSmallImage} alt="Company Logo" width={70} height={70} />
                </Link>
              </motion.li>
              <motion.li
                className="hover:text-secondary"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li
                className="hover:text-secondary"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/services">Services</Link>
              </motion.li>
              <motion.li
                className="hover:text-secondary"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/projects">Projects</Link>
              </motion.li>
              <motion.li
                className="hover:text-secondary"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/academy">Academy</Link>
              </motion.li>
              <motion.li
                className="hover:text-secondary"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/about">About us</Link>
              </motion.li>
              <motion.li
                className="px-3 py-1 rounded-lg bg-primary text-white
                hover:bg-white hover:text-primary hover:outline-primary hover:outline hover:outline-1 hover:outline-solid"
                initial={isTablet && { x: '500px' }}
                animate={{ x: 0 }}
                exit={{ x: '500px' }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="/quote">Get a Quote</Link>
              </motion.li>
              <motion.li
                className="tablet:absolute tablet:top-5 tablet:left-5 hover:text-secondary"
                initial={isTablet && { y: '-200px' }}
                animate={{ y: 0 }}
                exit={{ y: '-200px' }}
                transition={{ duration: 0.5 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <Link href="https://clients.geotech-energy.com">
                  <FaUser className="text-2xl tablet:text-3xl" />
                </Link>
              </motion.li>
              <motion.li
                className="hidden tablet:block absolute top-5 right-5 hover:text-secondary"
                initial={isTablet && { y: '-200px' }}
                animate={{ y: 0 }}
                exit={{ y: '-200px' }}
                transition={{ duration: 0.5 }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <SlClose className="text-4xl" />
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="hidden tablet:block">
          <RxHamburgerMenu className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
