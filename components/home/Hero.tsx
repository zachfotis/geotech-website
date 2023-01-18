'use client';

import Link from 'next/link';
import BackgroundImage from '../BackgroundImage';
import HeroImage from '../../assets/images/hero.jpg';
import Services from './Services';

function Hero() {
  return (
    <div className="flex-shrink-0 w-full min-h-[calc(100vh-90px)] overflow-x-hidden px-5 mt-[60px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-5">
        <h1 className="text-4xl font-[700] leading-normal mt-20">
          <span className="text-3xl font-[500]">Welcome to</span> <br /> Geotech Energy Services
        </h1>
        <p className="text-xl ml-1 max-w-[800px]">
          Geotech S.A. is the 1st and only service company in Greece to provide Wireline Logging Services for Oil & Gas,
          Groundwater and Geothermal wells.
        </p>
        <Link
          href="services"
          className="mt-5 px-5 py-2 bg-primary text-white rounded-lg shadow-md font-[600] text-lg hover:scale-105
          transition-all duration-300 ease-in-out"
        >
          Explore Services
        </Link>
        <Services />
      </div>
      <BackgroundImage image={HeroImage} />
    </div>
  );
}

export default Hero;
