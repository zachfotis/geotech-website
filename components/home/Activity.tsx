'use client';

import { motion } from 'framer-motion';
import Map from '../Map';
import QuoteText from '../QuoteText';

function Activity() {
  return (
    <motion.div
      className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-14 px-5 tablet:px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="relative text-3xl font-[500] leading-normal">
        Our activity around the world!
        <span className="absolute w-[250px] mobile:w-full h-[5px] bg-primary bottom-[-10px] left-0 shadow-lg"></span>
      </h1>

      <div className="relative w-full h-[500px]">
        <Map coords={cities} zoom={5} scroll={false} />
      </div>
    </motion.div>
  );
}

export default Activity;

const cities = [
  {
    name: 'Athens',
    coord: {
      lat: 37.9839,
      lng: 23.7294,
    },
  },
  {
    name: 'Thessaloniki',
    coord: {
      lat: 40.6401,
      lng: 22.9444,
    },
  },
  {
    name: 'Patras',
    coord: {
      lat: 38.2444,
      lng: 21.735,
    },
  },
  {
    name: 'Heraklion',
    coord: {
      lat: 35.3387,
      lng: 25.1442,
    },
  },
  {
    name: 'Larisa',
    coord: {
      lat: 39.6333,
      lng: 22.4167,
    },
  },
  {
    name: 'Volos',
    coord: {
      lat: 39.3667,
      lng: 22.9333,
    },
  },
  {
    name: 'Ioannina',
    coord: {
      lat: 39.6667,
      lng: 20.85,
    },
  },
  {
    name: 'Kavala',
    coord: {
      lat: 40.9333,
      lng: 24.4167,
    },
  },
  {
    name: 'Chania',
    coord: {
      lat: 35.5147,
      lng: 24.0186,
    },
  },
  {
    name: 'Rhodes',
    coord: {
      lat: 36.4442,
      lng: 28.2225,
    },
  },
];
