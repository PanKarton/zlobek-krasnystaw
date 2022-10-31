import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { getEnvVariable } from 'helpers/getEnvVariable';
import React, { useMemo } from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });

  const coordinates = useMemo(
    () => ({
      lat: 50.98927775884605,
      lng: 23.162105711646113,
    }),
    [],
  );

  if (!isLoaded) return <p>Ładowanie...</p>;
  return (
    <GoogleMap zoom={14} center={coordinates} clickableIcons={false} mapContainerClassName="footer-right">
      <MarkerF position={coordinates} />
    </GoogleMap>
  );
};

export default Map;
