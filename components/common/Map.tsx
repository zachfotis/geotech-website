'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });

type Coords = {
  name: string;
  coord: {
    lat: number;
    lng: number;
  };
};

interface Props {
  coords: Coords[];
  zoom?: number;
  scroll?: boolean;
}

function Map({ coords, zoom = 14, scroll = true }: Props) {
  const centerPosition: [number, number] = [0, 0];

  const centerReducer = coords.reduce(
    (acc, current) => {
      acc[0] += current.coord.lat;
      acc[1] += current.coord.lng;
      return acc;
    },
    [0, 0]
  );
  centerPosition[0] = centerReducer[0] / coords.length;
  centerPosition[1] = centerReducer[1] / coords.length;

  return (
    <MapContainer
      center={centerPosition}
      zoom={zoom}
      scrollWheelZoom={scroll}
      style={{ width: '100%', height: '100%', zIndex: 0 }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coords.map((item) => (
        <Marker key={item.name} title={item.name} position={[item.coord.lat, item.coord.lng]} />
      ))}
    </MapContainer>
  );
}

export default Map;
