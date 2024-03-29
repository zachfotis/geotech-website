'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';

import { FcAddressBook, FcHome, FcPhone } from 'react-icons/fc';
import FacebookIcon from '../../assets/icons/facebook.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';
import LogoSmallImage from '../../assets/images/logo.png';

import Map from '../common/Map';

function Footer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  return (
    <div className="relative w-full bg-accent px-5 py-10 text-white flex flex-col justify-stretch items-center gap-20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="flex-1 absolute top-0 left-0 w-full h-full opacity-30"
      />
      <div className="w-full max-w-[1280px] flex justify-evenly items-stretch flex-wrap gap-20 mobile:gap-10 z-10">
        <div className="w-[350px]">
          <h1 className="text-xl">Working Hours</h1>
          <div className="w-[40%] h-[2px] bg-primary mt-1"></div>
          <p className="text-sm text-justify font-[200] mt-3 mb-5">
            Please schedule a visit during our office hours, which are from 8:30am to 4:30pm Monday through Friday.
          </p>
          <div className="w-full grid grid-cols-2 gap-2 p-5 border border-1 border-secondary rounded-lg shadow-lg">
            <h1>Monday</h1>
            <p className="text-sm font-[200]">8:30am - 4:30pm</p>
            <h1>Tuesday</h1>
            <p className="text-sm font-[200]">8:30am - 4:30pm</p>
            <h1>Wednesday</h1>
            <p className="text-sm font-[200]">8:30am - 4:30pm</p>
            <h1>Thursday</h1>
            <p className="text-sm font-[200]">8:30am - 4:30pm</p>
            <h1>Friday</h1>
            <p className="text-sm font-[200]">8:30am - 4:30pm</p>
            <h1>Sat / Sun</h1>
            <p className="text-sm font-[200]">Closed</p>
          </div>
        </div>
        <div className="w-[350px] min-h-[300px] relative flex flex-col">
          <h1 className="text-xl">Office Location</h1>
          <div className="w-[40%] h-[2px] bg-primary mt-1"></div>
          <p className="text-sm text-justify font-[200] mt-3 mb-5">
            Our office is located at Perigiali 83, Kavala 652 01 and it is easily accessible by public transportation.
          </p>
          <Map coords={coords} zoom={14} scroll={false} />
        </div>
        <div className="w-[350px]">
          <h1 className="text-xl">Contact Information</h1>
          <div className="w-[40%] h-[2px] bg-primary mt-1"></div>
          <p className="text-sm text-justify font-[200] mt-3 mb-5">
            You can reach our office by phone during our office hours, or by email, for any inquiries or to schedule an
            appointment.
          </p>
          <div className="w-full grid grid-cols-[auto_auto] items-center gap-5 p-5 border border-1 border-secondary rounded-lg shadow-lg">
            <FcHome className="text-3xl" />
            <p className="text-sm font-[200]">
              <a href="https://goo.gl/maps/tkxiAnxn213cgq7h8" target="_blank" rel="noreferrer">
                Perigiali 83, Kavala 65201
              </a>
            </p>
            <FcPhone className="text-3xl" />
            <p className="text-sm font-[200]">
              <a href="tel:+302510231852">+30 2510 231 852</a>
            </p>
            <FcAddressBook className="text-3xl" />
            <p className="text-sm font-[200]">
              <a href="mailto:info@geotech-energy.com">info@geotech-energy.com</a>
            </p>
          </div>
          <Link href="/quote" className="w-full font-[400]">
            <motion.button
              className="w-full px-3 py-1 rounded-sm text-black bg-primary hover:text-white mt-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Request a Quote
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-3 z-10">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/">
            <Image src={LogoSmallImage} alt="Company Logo" width={100} />
          </Link>
        </motion.div>
        <h1 className="text-xl">Geotech S.A.</h1>
        <div className="flex justify-center items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://www.facebook.com/100066710522056" target="_blank" rel="noreferrer">
              <Image src={FacebookIcon} alt="Facebook" width={30} height={30} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://www.linkedin.com/company/geotech-s-a" target="_blank" rel="noreferrer">
              <Image src={LinkedinIcon} alt="Linkedin" width={30} height={30} />
            </Link>
          </motion.div>
        </div>
        <p className="text-sm font-[200]">© {new Date().getFullYear()} Geotech S.A. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

const options: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ['#C1DB01', '#00ABB3'],
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 100,
      },
      value: 6,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const coords = [
  {
    name: 'Geotech S.A.',
    coord: {
      lat: 40.951379234671556,
      lng: 24.426109892556138,
    },
  },
];
