import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const Map = props => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: API_KEY,
    googleMapsApiKey: 'AIzaSyBMGntOwF5D76lzfzJBHr-0RO4jTF11zio',
  });

  const coordinates = useMemo(
    () => ({
      lat: 50.98927775884605,
      lng: 23.162105711646113,
    }),
    []
  );

  if (!isLoaded) return <p>Ładowanie...</p>;
  return (
    <GoogleMap
      zoom={14}
      center={coordinates}
      clickableIcons={false}
      mapContainerClassName="footer-right"
    >
      <MarkerF position={coordinates} label={{ text: 'aaaaaaaaaaa' }} />
    </GoogleMap>
  );
};

export default Map;
