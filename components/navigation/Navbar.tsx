'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from 'react-icons/sl';
import LogoSmallImage from '../../assets/images/logo.png';
import LogoImage from '../../assets/logos/logo-full-notext.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const pathname = usePathname();

  const handleResize = () => {
    window.innerWidth <= 768 ? setIsTablet(true) : setIsTablet(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg font-[400] px-5 py-3 text-black antialiased fixed top-0 z-50">
      <div className="w-full max-w-[1440px] h-fit m-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/">
            <Image src={LogoImage} alt="Company Logo" width={150} />
          </Link>
        </motion.div>
        <AnimatePresence mode="wait">
          {((isTablet && showMenu) || !isTablet) && (
            <motion.ul
              className="flex justify-between items-center gap-10 p-2 text-sm
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
                  <Image src={LogoSmallImage} alt="Company Logo" width={70} />
                </Link>
              </motion.li>

              {menuitems.map((item, index) => (
                <motion.li
                  key={index + item.title}
                  className="hover:text-secondary"
                  initial={isTablet && { x: '500px' }}
                  animate={{ x: 0 }}
                  exit={{ x: '500px' }}
                  transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 100 }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <Link
                    href={item.link}
                    className={`${pathname === item.link ? 'font-[500] border-b border-1 border-black' : ''}`}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
              <Link href="/quote">
                <motion.li
                  className="px-3 py-1 rounded-lg text-primary hover:bg-primary hover:text-white
                outline-primary outline outline-1 outline-solid"
                  initial={isTablet && { x: '500px' }}
                  animate={{ x: 0 }}
                  exit={{ x: '500px' }}
                  transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Get a Quote
                </motion.li>
              </Link>
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

const menuitems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Academy',
    link: '/academy',
  },
  {
    title: 'About us',
    link: '/about',
  },
  {
    title: 'Login',
    link: '/login',
  },
];
