'use client';

import dynamic from 'next/dynamic';
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
import 'leaflet/dist/leaflet.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { motion } from 'framer-motion';

function Map() {
  const centerPosition: [number, number] = [0, 0];
  const centerReducer = cities.reduce(
    (acc, city) => {
      acc[0] += city.coord.lat;
      acc[1] += city.coord.lng;
      return acc;
    },
    [0, 0]
  );
  centerPosition[0] = centerReducer[0] / cities.length;
  centerPosition[1] = centerReducer[1] / cities.length;

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
      <p className="relative text-base text-justify leading-relaxed font-[300] mt-7 px-5">
        GEOTECH S.A. is an integrated Oil, Gas and Underground Energy Resources Services provider with Main Offices in
        Kavala, Greece. Founded in 1993, it has set the goal to be competent, competitive and productive, where
        professionalism is the key role from its 1st spark on the course. Providing{' '}
        <strong>Engineering Solutions and Services</strong> through the newest and most efficient applications and yet
        perceived as such, GEOTECH S.A. became a trusted service provider across the country. GEOTECH S.A. also extended
        its geographical reach across the <strong>Europe</strong>, <strong>Middle East</strong> and{' '}
        <strong>Africa</strong>. The Company has consistently delivered success and achieved its Clients' goals with
        standing quality and reputation.
        <RiDoubleQuotesL className="text-4xl text-primary absolute -top-6 -left-5 desktop:-top-10 desktop:left-0" />
        <RiDoubleQuotesR className="text-4xl text-primary absolute -bottom-5 -right-5 desktop:-bottom-10 desktop:right-0" />
      </p>
      <div className="w-full mt-5">
        <MapContainer
          center={centerPosition}
          zoom={5}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '500px', zIndex: 0 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker key={city.name} title={city.name} position={[city.coord.lat, city.coord.lng]} />
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
}

export default Map;

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
