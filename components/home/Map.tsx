'use client';

import dynamic from 'next/dynamic';
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then((mod) => mod.Polygon), { ssr: false });
import 'leaflet/dist/leaflet.css';

function Map() {
  const position: [number, number] = [37.00417218151473, 25.21094595909675];

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-5 tablet:px-5">
      <h1 className="text-3xl font-[500] leading-normal">Our Operations around the World!</h1>
      <div className="w-full rounded-xl overflow-hidden">
        <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ width: '100%', height: '500px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
