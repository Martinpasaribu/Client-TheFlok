"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Tambahkan icon marker custom
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL icon marker
  iconSize: [40, 40], // Ukuran icon
  iconAnchor: [20, 40], // Titik anchor
});

const Maps = () => {


  const position : [number, number] = [-7.5913615, 110.165336]; // Ganti dengan koordinat lokasi bisnis Anda

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: '100%', height: '400px' }}
    >
      {/* Peta dari OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker Lokasi */}
      <Marker position={position} icon={customIcon}>
        <Popup>
          <b>Adhisthana Villas</b>
          <br />
          Susukan, Kecamatan Borobudur
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
